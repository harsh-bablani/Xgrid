/** Gemini (preferred) reply generation for Slate chatbot. */

function cleanKey(value) {
  const key = String(value || '').trim();
  if (!key || /your-key-here|AIza.?your|paste/i.test(key)) return '';
  return key;
}

export const COMPANY = {
  name: 'SlateBiz Softwares',
  shortName: 'SlateBiz',
  phoneDisplay: '+91 925 737 3668',
  whatsapp: 'https://wa.me/919257373668',
  email: 'info@slatebiz.com',
  address: 'DH-079, 1st Floor, Ansal Sushant City-1, Kalwar Road, Jaipur, Rajasthan 303706',
  hours: 'Monday–Saturday, 10:00 AM – 7:00 PM',
  products: 'JewelBiz (jewellery ERP), CuraBiz (hospital/clinic HIMS), RetailBiz (retail ERP)',
  services: 'hospital websites & apps, ecommerce/branding sites, on-site chatbots, ERP implementation',
};

export function getLlmConfig() {
  return {
    geminiApiKey: cleanKey(process.env.GEMINI_API_KEY),
    geminiModel: (process.env.GEMINI_MODEL || 'gemini-3.8-flash').trim(),
  };
}

export function llmStatus() {
  const { geminiApiKey, geminiModel } = getLlmConfig();
  if (geminiApiKey) {
    return { configured: true, provider: 'gemini', model: geminiModel };
  }
  return { configured: false, provider: null, model: null };
}

function systemPrompt(ctx) {
  return `You are Slate, the warm professional assistant for ${COMPANY.name} (${COMPANY.shortName}) in Jaipur.

Company facts (only use these; never invent prices or SLAs):
- Products: ${COMPANY.products}
- Services: ${COMPANY.services}
- Address: ${COMPANY.address}
- Hours: ${COMPANY.hours}
- Phone/WhatsApp: ${COMPANY.phoneDisplay}
- Email: ${COMPANY.email}
- Demo booking: contact form on /contact or WhatsApp

Personality: concise (2–5 short sentences), clear B2B SaaS tone, Hindi-English mix only if the user uses Hindi. Never be pushy. Always finish every sentence.

Hard rules:
- Never invent module pricing, discounts, or go-live timelines — say pricing depends on scope and offer a demo.
- Do not claim you already emailed/called the sales team unless told in context.
- For browsers, stay helpful and light — no hard sell.
- Steer unrelated questions gently back to SlateBiz products/services.
- Prefer concrete next steps (demo, WhatsApp, product pages).

Current pipeline step: ${ctx.step}
Intent label: ${ctx.intent.label} (score ${ctx.intent.score}, browseFlags ${ctx.intent.browsingFlags})
Lead so far: ${JSON.stringify(ctx.lead)}
Mode: ${ctx.mode}
${
  ctx.nextQuestion
    ? `You MUST naturally include this required question (paraphrase ok, keep meaning): "${ctx.nextQuestion}"`
    : 'Do NOT ask for interest, timeline, name, or phone if Lead so far already has that field.'
}
Never re-ask for a field that is already filled in Lead so far.
`;
}

async function callGemini(system, history, userMessage, { withThinking }) {
  const { geminiApiKey, geminiModel } = getLlmConfig();
  if (!geminiApiKey) return null;

  const contents = [];
  for (const turn of history.slice(-12)) {
    contents.push({
      role: turn.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: turn.content }],
    });
  }
  contents.push({ role: 'user', parts: [{ text: userMessage }] });

  const generationConfig = {
    temperature: 0.6,
    maxOutputTokens: 2048,
  };
  if (withThinking) {
    generationConfig.thinkingConfig = { thinkingLevel: 'low' };
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(geminiModel)}:generateContent?key=${encodeURIComponent(geminiApiKey)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig,
    }),
    signal: AbortSignal.timeout(25000),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Gemini error', res.status, errText.slice(0, 400));
    // Retry without thinkingConfig if the model rejects it
    if (withThinking && /thinking|Unknown name|Invalid/i.test(errText)) {
      return callGemini(system, history, userMessage, { withThinking: false });
    }
    return null;
  }

  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .filter((p) => !p.thought)
    .map((p) => p.text || '')
    .join('')
    .trim();
  const finish = data.candidates?.[0]?.finishReason;
  if (finish === 'MAX_TOKENS' && text.length < 40) return null;
  return text || null;
}

export async function generateSlateReply(input) {
  const system = systemPrompt({
    step: input.step,
    lead: input.lead,
    intent: input.intent,
    nextQuestion: input.nextQuestion,
    mode: input.mode,
  });

  try {
    const { geminiApiKey } = getLlmConfig();
    if (!geminiApiKey) {
      return { text: input.fallback, usedLlm: false };
    }

    const text = await callGemini(system, input.history || [], input.userMessage, {
      withThinking: true,
    });
    if (!text) return { text: input.fallback, usedLlm: false };
    return { text, usedLlm: true };
  } catch (err) {
    console.error('LLM fetch failed', err);
    return { text: input.fallback, usedLlm: false };
  }
}
