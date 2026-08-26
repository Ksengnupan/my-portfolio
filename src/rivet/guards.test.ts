import { describe, expect, it } from "vitest";
import {
  HISTORY_WINDOW,
  MAX_MESSAGE_CHARS,
  MAX_USER_MESSAGES,
  type ChatMessage,
  trimHistory,
  validateUserMessage,
} from "./guards";

const msg = (role: "user" | "assistant", content = "hi"): ChatMessage => ({
  role,
  content,
  at: 0,
});

describe("validateUserMessage", () => {
  it("accepts a normal message", () => {
    expect(validateUserMessage("What does Pan do?", [])).toEqual({ ok: true });
  });

  it("rejects empty and whitespace-only input", () => {
    expect(validateUserMessage("", []).ok).toBe(false);
    expect(validateUserMessage("   ", []).ok).toBe(false);
  });

  it("rejects non-string input", () => {
    expect(validateUserMessage(42, []).ok).toBe(false);
    expect(validateUserMessage(undefined, []).ok).toBe(false);
  });

  it("rejects messages over the length cap", () => {
    expect(validateUserMessage("x".repeat(MAX_MESSAGE_CHARS), []).ok).toBe(true);
    expect(validateUserMessage("x".repeat(MAX_MESSAGE_CHARS + 1), []).ok).toBe(
      false,
    );
  });

  it("closes the conversation at the user-message cap", () => {
    const history = Array.from({ length: MAX_USER_MESSAGES }, () =>
      msg("user"),
    );
    const result = validateUserMessage("one more", history);
    expect(result.ok).toBe(false);
  });

  it("only counts user messages toward the cap", () => {
    const history = Array.from({ length: MAX_USER_MESSAGES }, () =>
      msg("assistant"),
    );
    expect(validateUserMessage("hello", history)).toEqual({ ok: true });
  });
});

describe("trimHistory", () => {
  it("returns short histories unchanged", () => {
    const history = [msg("user"), msg("assistant")];
    expect(trimHistory(history)).toEqual(history);
  });

  it("keeps only the most recent window", () => {
    const history = Array.from({ length: HISTORY_WINDOW + 15 }, (_, i) =>
      msg(i % 2 ? "assistant" : "user", `m${i}`),
    );
    const trimmed = trimHistory(history);
    expect(trimmed).toHaveLength(HISTORY_WINDOW);
    expect(trimmed[trimmed.length - 1]).toEqual(
      history[history.length - 1],
    );
  });
});
