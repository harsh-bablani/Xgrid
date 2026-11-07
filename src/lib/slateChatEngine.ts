/** Client-side chat engine modeled on blrhissariamain Sunehri (FAQ + lead qualify). */

export type FlowStep = 'chat' | 'interest' | 'timeline' | 'name' | 'phone' | 'done';

export type LeadDraft = {
  name?: string;
  phone?: string;
  interest?: string;
  timeline?: string;
  notes: string[];
};

export type IntentState = {
  score: number;
  browsingFlags: number;
  label: 'genuine' | 'browsing' | 'unclear';
};

export type ChatTurn = { role: 'user' | 'assistant'; content: string };

export type ChatResponse = {
  reply: string;
  lead: LeadDraft;
  intent: IntentState;
  step: FlowStep;
};

export const PHONE_DISPLAY = '+91 925 737 3668';
export const WHATSAPP_URL = 'https://wa.me/919257373668';
export const ADDRESS =
  'DH-079, 1st Floor, Ansal Sushant City-1, Kalwar Road, Jaipur, Rajasthan 303706';

export function emptyLead(): LeadDraft {
  return { notes: [] };
}

export function emptyIntent(): IntentState {
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

export function scoreMessage(text: string, prev: IntentState): IntentState {
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
  let label: IntentState['label'] = 'unclear';
  if (browsingFlags >= 3 && score < 5) label = 'browsing';
  else if (score >= 5 && browsingFlags < 4) label = 'genuine';
  else if (score >= 3) label = 'unclear';

  return { score, browsingFlags, label };
}

export function extractPhone(text: string): string | undefined {
  const m = text.replace(/[^\d+]/g, ' ').match(/(?:\+91)?[\s-]?([6-9]\d{9})/);
  return m ? `+91${m[1]}` : undefined;
}

function faqFallback(input: string): string | null {
  const q = input.toLowerCase();
  if (/(hello|hi|hey|namaste)/.test(q)) {
    return `Namaste! I’m Slate from SlateBiz Softwares. I can help with JewelBiz, CuraBiz, RetailBiz, demos, pricing direction, or how to reach the team.`;
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
    return `Our Jaipur team is typically available Mon–Sat, 10:00 AM – 7:00 PM. For a callback, share your name and WhatsApp number.`;
  }
  if (/(address|where|location|office|jaipur)/.test(q)) {
    return `We’re at ${ADDRESS}. Phone ${PHONE_DISPLAY}.`;
  }
  if (/(whatsapp|call|contact|phone|email)/.test(q)) {
    return `You can WhatsApp us at ${PHONE_DISPLAY}, email info@slatebiz.com, or leave your number here and we’ll reach out.`;
  }
  if (/(service|website|app|chatbot|branding|ecommerce)/.test(q)) {
    return `Besides ERPs we also build care websites & apps, brand/ecommerce sites and on-site chatbots — see /services for live demos. Want an intro call on a custom build?`;
  }
  return null;
}

function promptFor(step: FlowStep): string {
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

function nextStep(step: FlowStep): FlowStep {
  const order: FlowStep[] = ['interest', 'timeline', 'name', 'phone', 'done'];
  const i = order.indexOf(step);
  if (i < 0) return 'interest';
  return order[Math.min(i + 1, order.length - 1)];
}

export function handleSlateChat(input: {
  message: string;
  lead: LeadDraft;
  intent: IntentState;
  step: FlowStep;
}): ChatResponse {
  const text = input.message.trim();
  let lead = { ...input.lead, notes: [...input.lead.notes] };
  let intent = scoreMessage(text, input.intent);
  let step = input.step;

  const phone = extractPhone(text);
  if (phone) lead.phone = phone;

  // Qualification path
  if (step !== 'chat' && step !== 'done') {
    if (step === 'interest') {
      lead.interest = text;
      step = 'timeline';
      return { reply: promptFor('timeline'), lead, intent, step };
    }
    if (step === 'timeline') {
      lead.timeline = text;
      step = 'name';
      return { reply: promptFor('name'), lead, intent, step };
    }
    if (step === 'name') {
      const name = text.replace(/[^a-zA-Z\s.'-]/g, '').trim();
      if (name.length < 2) {
        return { reply: 'Please share your name (at least 2 letters).', lead, intent, step: 'name' };
      }
      lead.name = name;
      step = 'phone';
      return { reply: promptFor('phone'), lead, intent, step };
    }
    if (step === 'phone') {
      if (!lead.phone) {
        return {
          reply: 'I still need a valid 10-digit Indian mobile number.',
          lead,
          intent,
          step: 'phone',
        };
      }
      step = 'done';
      const genuine = intent.label === 'genuine' || intent.score >= 5;
      if (!genuine && intent.browsingFlags >= 3) {
        return {
          reply: `Thanks${lead.name ? `, ${lead.name}` : ''}. Looks like you’re still exploring — that’s fine. WhatsApp us anytime at ${PHONE_DISPLAY}, or say “book a demo” when ready.`,
          lead,
          intent,
          step,
        };
      }
      return {
        reply: `Perfect${lead.name ? `, ${lead.name}` : ''}. I’ve noted ${lead.interest ?? 'your interest'} (${lead.timeline ?? 'timeline TBD'}). Our team will reach you on ${lead.phone}. You can also WhatsApp us now at ${PHONE_DISPLAY}.`,
        lead,
        intent,
        step,
      };
    }
  }

  // Start qualify when intent is strong or user asks for demo
  if (
    step === 'chat' &&
    (/\b(demo|trial|book|buy|implement|talk\s*to\s*(sales|team)|call\s*me)\b/i.test(text) ||
      intent.score >= 5)
  ) {
    step = 'interest';
    const faq = faqFallback(text);
    const leadIn = faq ? `${faq}\n\n${promptFor('interest')}` : promptFor('interest');
    return { reply: leadIn, lead, intent, step };
  }

  const faq = faqFallback(text);
  if (faq) return { reply: faq, lead, intent, step: 'chat' };

  lead.notes.push(text.slice(0, 180));
  return {
    reply: `I can help with product intros, demos, pricing direction and contact. Try “JewelBiz”, “CuraBiz”, “Book a demo”, or “Address” — or WhatsApp ${PHONE_DISPLAY}.`,
    lead,
    intent,
    step: 'chat',
  };
}

export function startQualifyFromQuick(label: string, lead: LeadDraft, intent: IntentState): ChatResponse {
  return handleSlateChat({ message: label, lead, intent, step: 'chat' });
}

export { nextStep, promptFor };
