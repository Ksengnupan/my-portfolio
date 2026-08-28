// Guardrails for the public-facing chatbot. Pure functions, unit-tested.

export const MAX_MESSAGE_CHARS = 1000;
export const MAX_USER_MESSAGES = 30;
export const HISTORY_WINDOW = 20;

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  at: number;
};

export type GuardResult = { ok: true } | { ok: false; reason: string };

export function validateUserMessage(
  text: unknown,
  history: ChatMessage[],
): GuardResult {
  if (typeof text !== "string" || text.trim().length === 0) {
    return { ok: false, reason: "Please type a message first." };
  }
  if (text.length > MAX_MESSAGE_CHARS) {
    return {
      ok: false,
      reason: `That message is a bit long — please keep it under ${MAX_MESSAGE_CHARS} characters.`,
    };
  }
  const userCount = history.filter((m) => m.role === "user").length;
  if (userCount >= MAX_USER_MESSAGES) {
    return {
      ok: false,
      reason:
        "This conversation has reached its demo limit. If you'd like to talk to Pan, email sengnupan.kumgyi@gmail.com!",
    };
  }
  return { ok: true };
}

// The LLM only ever sees the most recent window, keeping cost bounded even
// though the actor persists the full conversation.
export function trimHistory(history: ChatMessage[]): ChatMessage[] {
  return history.slice(-HISTORY_WINDOW);
}
