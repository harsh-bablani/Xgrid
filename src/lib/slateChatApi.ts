import { resolveApiBase } from './runtimeConfig';
import {
  emptyIntent,
  emptyLead,
  handleSlateChat,
  type ChatResponse,
  type ChatTurn,
  type FlowStep,
  type IntentState,
  type LeadDraft,
} from './slateChatEngine';

export type ApiChatResponse = ChatResponse & { usedLlm?: boolean };

export async function sendSlateMessage(payload: {
  message: string;
  history: ChatTurn[];
  lead: LeadDraft;
  intent: IntentState;
  step: FlowStep;
}): Promise<ApiChatResponse> {
  try {
    const base = await resolveApiBase();
    const res = await fetch(`${base}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(28000),
    });

    if (!res.ok) {
      throw new Error(`Chat API ${res.status}`);
    }

    const data = (await res.json()) as ApiChatResponse;
    if (!data?.reply) throw new Error('Empty chat reply');
    return {
      reply: data.reply,
      lead: data.lead ?? payload.lead,
      intent: data.intent ?? payload.intent,
      step: data.step ?? payload.step,
      usedLlm: Boolean(data.usedLlm),
    };
  } catch {
    // Offline / API down — keep chatting with local FAQ engine
    return {
      ...handleSlateChat({
        message: payload.message,
        lead: payload.lead ?? emptyLead(),
        intent: payload.intent ?? emptyIntent(),
        step: payload.step,
      }),
      usedLlm: false,
    };
  }
}
