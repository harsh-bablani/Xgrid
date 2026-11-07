import { COMPANY, generateSlateReply } from './llm.js';

/** @typedef {'chat'|'interest'|'timeline'|'name'|'phone'|'done'} FlowStep */

export function emptyLead() {
  return { notes: [] };
}

export function emptyIntent() {
  return { score: 0, browsingFlags: 0, label: 'unclear' };
}

const GENUINE = [
  { re: /\b(demo|trial|book|buy|purchase|implement|go\s*live|migrate)\b/i, w: 3 },
  { re: /\b(jewelbiz|curabiz|retailbiz|hims|erp)\b/i, w: 2 },
  { re: /\b(urgent|asap|this\s*week|tomorrow|today|next\s*week)\b/i, w: 2 },
  { re: /\b(price|pricing|cost|quote|budget|₹|rs\.?)\b/i, w: 2 },
  { re: /\b(call\s*me|whatsapp\s*me|contact\s*me|my\s*name)\b/i, w: 2 },
];

const BROWSING = [
  { re: /\b(just\s*looking|browsing|curious|maybe\s*later|no\s*rush|someday)\b/i, w: 3 },
  { re: /\b(not\s*sure|only\s*checking|just\s*info)\b/i, w: 2 },
  { re: /\b(not\s*interested|no\s*thanks)\b/i, w: 4 },
];

export function extractPhone(text) {
  const m = String(text)
    .replace(/[^\d+]/g, ' ')
    .match(/(?:\+91)?[\s-]?([6-9]\d{9})/);
  return m ? `+91${m[1]}` : undefined;
}

export function scoreMessage(text, prev) {
  let score = prev.score;
  let browsingFlags = prev.browsingFlags;

  for (const g of GENUINE) {
    if (g.re.test(text)) score += g.w;
  }
  for (const b of BROWSING) {
    if (b.re.test(text)) {
      browsingFlags += b.w;
      score -= Math.min(2, b.w);
    }
  }
  if (extractPhone(text)) score += 3;

  score = Math.max(0, Math.min(20, score));
  let label = 'unclear';
  if (browsingFlags >= 3 && score < 5) label = 'browsing';
  else if (score >= 5 && browsingFlags < 4) label = 'genuine';
  else if (score >= 3) label = 'unclear';

  return { score, browsingFlags, label };
}

function faqFallback(input) {
  const q = input.toLowerCase();
  if (/(hello|hi|hey|namaste)/.test(q)) {
    return `Namaste! I’m Slate from ${COMPANY.shortName}. I can help with JewelBiz, CuraBiz, RetailBiz, demos, pricing direction, or how to reach the team.`;
  }
  if (/(jewelbiz|jewellery\s*erp|jewelry\s*erp)/.test(q)) {
    return `JewelBiz is our jewellery ERP for retail, wholesale and karigar ops — fine weight, purity, Jangad, GST e-invoicing and multi-branch stock. Want a demo walkthrough?`;
  }
  if (/(curabiz|hims|hospital|clinic|hms)/.test(q)) {
    return `CuraBiz is our hospital / clinic HIMS — OPD, IPD, pharmacy, labs and patient communication. I can help you book a product demo.`;
  }
  if (/(retailbiz|retail\s*erp)/.test(q)) {
    return `RetailBiz is built for specialist retail operations. Tell me your category and I’ll point you to the right demo.`;
  }
  if (/(price|pricing|cost|how\s*much|quote)/.test(q)) {
    return `Pricing depends on modules, branches and go-live scope. Share which product you need and a rough timeline — or book a free demo and we’ll size it properly.`;
  }
  if (/(demo|trial|book)/.test(q)) {
    return `Great — let’s set up a free demo. Which product are you evaluating: JewelBiz, CuraBiz or RetailBiz?`;
  }
  if (/(time|hour|open|close|timing)/.test(q)) {
    return `Our Jaipur team is typically available ${COMPANY.hours}. For a callback, share your name and WhatsApp number.`;
  }
  if (/(address|where|location|office|jaipur)/.test(q)) {
    return `We’re at ${COMPANY.address}. Phone ${COMPANY.phoneDisplay}.`;
  }
  if (/(whatsapp|call|contact|phone|email)/.test(q)) {
    return `You can WhatsApp us at ${COMPANY.phoneDisplay}, email ${COMPANY.email}, or leave your number here and we’ll reach out.`;
  }
  if (/(service|website|app|chatbot|branding|ecommerce)/.test(q)) {
    return `Besides ERPs we also build care websites & apps, brand/ecommerce sites and on-site chatbots — see /services for live demos. Want an intro call on a custom build?`;
  }
  return null;
}

function promptFor(step) {
  switch (step) {
    case 'interest':
      return 'Which product fits you best — JewelBiz, CuraBiz, RetailBiz, or a custom website / app?';
    case 'timeline':
      return 'When are you hoping to go live or see a demo — this week, this month, or later?';
    case 'name':
      return 'Thanks. What’s your name?';
    case 'phone':
      return 'Please share a 10-digit WhatsApp mobile number so our team can connect.';
    default:
      return '';
  }
}

function nextQualifyStep(lead) {
  if (!lead.interest) return 'interest';
  if (!lead.timeline) return 'timeline';
  if (!lead.name) return 'name';
  if (!lead.phone) return 'phone';
  return 'done';
}

async function finishLead(lead, intent, history, userMessage) {
  if (!lead.phone) {
    const fallback = 'I still need a valid 10-digit mobile number. Please share your WhatsApp number.';
    const { text, usedLlm } = await generateSlateReply({
      history,
      userMessage,
      step: 'phone',
      lead,
      intent,
      nextQuestion: promptFor('phone'),
      mode: 'qualify',
      fallback,
    });
    return { reply: text, lead, intent, step: 'phone', usedLlm };
  }

  const browsing =
    intent.label === 'browsing' || (intent.browsingFlags >= 4 && intent.score < 6);
  const genuine = intent.label === 'genuine' || intent.score >= 5;

  if (browsing && !genuine) {
    const fallback = `Thanks${lead.name ? `, ${lead.name}` : ''}. Looks like you’re still exploring — that’s fine. WhatsApp us anytime at ${COMPANY.phoneDisplay}, or say “book a demo” when ready.`;
    const { text, usedLlm } = await generateSlateReply({
      history,
      userMessage,
      step: 'done',
      lead,
      intent,
      mode: 'closing',
      fallback,
    });
    return { reply: text, lead, intent, step: 'done', usedLlm };
  }

  const fallback = `Perfect${lead.name ? `, ${lead.name}` : ''}. I’ve noted ${lead.interest ?? 'your interest'} (${lead.timeline ?? 'timeline TBD'}). Our team will reach you on ${lead.phone}. You can also WhatsApp us now at ${COMPANY.phoneDisplay}.`;
  const { text, usedLlm } = await generateSlateReply({
    history,
    userMessage,
    step: 'done',
    lead,
    intent,
    mode: 'closing',
    fallback,
  });
  return { reply: text, lead, intent, step: 'done', usedLlm };
}

export async function handleChat(req) {
  const message = String(req.message || '').trim();
  if (!message) {
    return {
      reply: 'Please type a message and I’ll help.',
      lead: req.lead ?? emptyLead(),
      intent: req.intent ?? emptyIntent(),
      step: req.step ?? 'chat',
      usedLlm: false,
    };
  }

  const history = Array.isArray(req.history) ? req.history : [];
  let lead = { ...(req.lead ?? emptyLead()), notes: [...(req.lead?.notes ?? [])] };
  let intent = scoreMessage(message, req.intent ?? emptyIntent());
  let step = req.step ?? 'chat';

  const phone = extractPhone(message);
  if (phone) lead.phone = phone;

  if (/\b(just browsing|only looking|window shop|not interested|no thanks)\b/i.test(message)) {
    step = 'chat';
    const fallback =
      'Of course — take your time. Explore our products anytime, and say “book a demo” when you’d like personal help.';
    const { text, usedLlm } = await generateSlateReply({
      history,
      userMessage: message,
      step,
      lead,
      intent,
      mode: 'chat',
      fallback,
    });
    return { reply: text, lead, intent, step, usedLlm };
  }

  // Qualification answers in progress
  if (step !== 'chat' && step !== 'done') {
    if (step === 'interest') {
      lead.interest = message;
      lead.notes.push(message.slice(0, 180));
      const next = nextQualifyStep(lead);
      if (next === 'done') return finishLead(lead, intent, history, message);
      step = next;
      const q = promptFor(next);
      const { text, usedLlm } = await generateSlateReply({
        history,
        userMessage: message,
        step,
        lead,
        intent,
        nextQuestion: q,
        mode: 'qualify',
        fallback: q,
      });
      return { reply: text, lead, intent, step, usedLlm };
    }

    if (step === 'timeline') {
      lead.timeline = message;
      if (/\b(no timeline|someday|later|not sure)\b/i.test(message)) {
        intent = { ...intent, browsingFlags: intent.browsingFlags + 1 };
      }
      const next = nextQualifyStep(lead);
      if (next === 'done') return finishLead(lead, intent, history, message);
      step = next;
      const q = promptFor(next);
      const { text, usedLlm } = await generateSlateReply({
        history,
        userMessage: message,
        step,
        lead,
        intent,
        nextQuestion: q,
        mode: 'qualify',
        fallback: q,
      });
      return { reply: text, lead, intent, step, usedLlm };
    }

    if (step === 'name') {
      const name = message.replace(/[^a-zA-Z\s.'-]/g, '').trim();
      if (name.length < 2) {
        return {
          reply: 'Please share your name (at least 2 letters).',
          lead,
          intent,
          step: 'name',
          usedLlm: false,
        };
      }
      lead.name = name;
      const next = nextQualifyStep(lead);
      if (next === 'done') return finishLead(lead, intent, history, message);
      step = next;
      const q = promptFor(next);
      const { text, usedLlm } = await generateSlateReply({
        history,
        userMessage: message,
        step,
        lead,
        intent,
        nextQuestion: q,
        mode: 'qualify',
        fallback: q,
      });
      return { reply: text, lead, intent, step, usedLlm };
    }

    if (step === 'phone') {
      if (!lead.phone) {
        const fallback = 'I still need a valid 10-digit Indian mobile number.';
        const { text, usedLlm } = await generateSlateReply({
          history,
          userMessage: message,
          step: 'phone',
          lead,
          intent,
          nextQuestion: promptFor('phone'),
          mode: 'qualify',
          fallback,
        });
        return { reply: text, lead, intent, step: 'phone', usedLlm };
      }
      return finishLead(lead, intent, history, message);
    }
  }

  // Start qualify
  const wantsQualify =
    step === 'chat' &&
    (/\b(demo|trial|book|buy|implement|talk\s*to\s*(sales|team)|call\s*me|i'?m ready|interested)\b/i.test(
      message,
    ) ||
      intent.label === 'genuine' ||
      intent.score >= 4);

  if (wantsQualify) {
    if (!lead.interest) lead = { ...lead, interest: message, notes: [...lead.notes, message.slice(0, 180)] };
    else lead = { ...lead, notes: [...lead.notes, message.slice(0, 180)] };

    const next = nextQualifyStep(lead);
    if (next === 'done') return finishLead(lead, intent, history, message);

    step = next;
    const q = promptFor(next);
    const faq = faqFallback(message);
    const fallback =
      intent.label === 'browsing'
        ? `No pressure — browse freely. If you want help later, say “book a demo”. ${q}`
        : faq
          ? `${faq}\n\n${q}`
          : `I’d love to help. ${q}`;

    const { text, usedLlm } = await generateSlateReply({
      history,
      userMessage: message,
      step,
      lead,
      intent,
      nextQuestion: q,
      mode: 'qualify',
      fallback,
    });
    return { reply: text, lead, intent, step, usedLlm };
  }

  // Free chat
  if (step === 'chat') {
    const faq = faqFallback(message);
    const fallback =
      faq ??
      `I can help with product intros, demos, pricing direction and contact. Try “JewelBiz”, “CuraBiz”, “Book a demo”, or “Address” — or WhatsApp ${COMPANY.phoneDisplay}.`;
    const { text, usedLlm } = await generateSlateReply({
      history,
      userMessage: message,
      step,
      lead,
      intent,
      mode: 'chat',
      fallback,
    });
    return { reply: text, lead, intent, step, usedLlm };
  }

  // Done — re-engage
  if (/\b(ready|call me|want to buy|book a demo|notify)\b/i.test(message)) {
    intent = { ...intent, score: Math.max(intent.score, 6), label: 'genuine' };
    step = 'interest';
    const q = promptFor('interest');
    const { text, usedLlm } = await generateSlateReply({
      history,
      userMessage: message,
      step,
      lead,
      intent,
      nextQuestion: q,
      mode: 'qualify',
      fallback: q,
    });
    return { reply: text, lead, intent, step, usedLlm };
  }

  const fallback = `Anything else I can help with — or say “book a demo” to share details for our team.`;
  const { text, usedLlm } = await generateSlateReply({
    history,
    userMessage: message,
    step,
    lead,
    intent,
    mode: 'chat',
    fallback,
  });
  return { reply: text, lead, intent, step, usedLlm };
}
