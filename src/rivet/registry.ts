import { actor, setup } from "rivetkit";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { SYSTEM_PROMPT } from "./persona";
import {
  type ChatMessage,
  trimHistory,
  validateUserMessage,
} from "./guards";

const FRIENDLY_ERROR =
  "Sorry — I hit a snag generating that reply. Please try again in a moment.";

// One actor instance per visitor (keyed by a browser-generated id). The
// engine persists `state` across restarts and Sablier sleep/wake cycles.
export const chatbot = actor({
  state: {
    messages: [] as ChatMessage[],
  },

  actions: {
    getHistory: (c) => c.state.messages,

    sendMessage: async (c, text: string): Promise<{ error?: string }> => {
      const guard = validateUserMessage(text, c.state.messages);
      if (!guard.ok) {
        return { error: guard.reason };
      }

      const userMessage: ChatMessage = {
        role: "user",
        content: text.trim(),
        at: Date.now(),
      };
      c.state.messages.push(userMessage);
      c.broadcast("message", userMessage);
      c.broadcast("status", "thinking");

      try {
        const result = streamText({
          model: openai(process.env.OPENAI_MODEL ?? "gpt-5-mini"),
          system: SYSTEM_PROMPT,
          messages: trimHistory(c.state.messages).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        });

        let content = "";
        for await (const delta of result.textStream) {
          content += delta;
          c.broadcast("delta", { content });
        }

        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: content || FRIENDLY_ERROR,
          at: Date.now(),
        };
        c.state.messages.push(assistantMessage);
        c.broadcast("message", assistantMessage);
      } catch (err) {
        console.error("chatbot: LLM call failed", err);
        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: FRIENDLY_ERROR,
          at: Date.now(),
        };
        c.state.messages.push(assistantMessage);
        c.broadcast("message", assistantMessage);
      } finally {
        c.broadcast("status", "idle");
      }

      return {};
    },
  },
});

export const registry = setup({
  use: { chatbot },
});
