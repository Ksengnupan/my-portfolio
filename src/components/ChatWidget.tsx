"use client";

import { useEffect, useRef, useState } from "react";
import { useActor } from "@/rivet/client";
import type { ChatMessage } from "@/rivet/guards";

const VISITOR_KEY = "portfolio-visitor-id";

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `v-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

const SUGGESTIONS = [
  "What does Pan do?",
  "Tell me about the cybersecurity assistant",
  "How does this chat work?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    setVisitorId(getVisitorId());
  }, []);

  const toggle = () => {
    setOpen((o) => !o);
    setEverOpened(true);
  };

  return (
    <>
      {everOpened && visitorId && (
        <div className={`chat-panel${open ? " open" : ""}`} aria-hidden={!open}>
          <ChatPanel visitorId={visitorId} onClose={() => setOpen(false)} />
        </div>
      )}
      <button
        type="button"
        className="chat-fab"
        onClick={toggle}
        aria-label={open ? "Close chat" : "Chat with Pan's assistant"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </>
  );
}

function ChatPanel({
  visitorId,
  onClose,
}: {
  visitorId: string;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const historyLoaded = useRef(false);

  const chat = useActor({ name: "chatbot", key: [visitorId] });

  chat.useEvent("message", (msg: ChatMessage) => {
    setMessages((prev) => [...prev, msg]);
    if (msg.role === "assistant") setStreaming(null);
  });

  chat.useEvent("delta", ({ content }: { content: string }) => {
    setStreaming(content);
  });

  chat.useEvent("status", (s: string) => {
    setThinking(s === "thinking");
    if (s !== "thinking") setStreaming(null);
  });

  useEffect(() => {
    if (chat.connection && !historyLoaded.current) {
      historyLoaded.current = true;
      chat.connection
        .getHistory()
        .then((h: ChatMessage[]) => setMessages(h))
        .catch(() => {
          historyLoaded.current = false;
        });
    }
  }, [chat.connection]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, streaming, thinking]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking || !chat.connection) return;
    setInput("");
    setNotice(null);
    try {
      const res = await chat.connection.sendMessage(trimmed);
      if (res?.error) setNotice(res.error);
    } catch {
      setNotice("Connection hiccup — please try again.");
    }
  };

  const connected = Boolean(chat.connection);

  return (
    <>
      <div className="chat-header">
        <div>
          <div className="chat-title">Pan&apos;s assistant</div>
          <div className="chat-subtitle">
            {connected ? "Powered by a Rivet actor" : "Connecting…"}
          </div>
        </div>
        <button
          type="button"
          className="chat-close"
          onClick={onClose}
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      <div className="chat-messages" ref={scrollRef}>
        {messages.length === 0 && !streaming && (
          <div className="chat-empty">
            <p>
              Hi! Ask me anything about Pan — his work, projects, or background.
            </p>
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="chat-suggestion"
                  onClick={() => send(s)}
                  disabled={!connected || thinking}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => (
          <div key={`${m.at}-${m.role}`} className={`chat-msg ${m.role}`}>
            {m.content}
          </div>
        ))}

        {streaming !== null && (
          <div className="chat-msg assistant">{streaming}</div>
        )}
        {thinking && streaming === null && (
          <div className="chat-msg assistant chat-typing" aria-label="Assistant is typing">
            <span />
            <span />
            <span />
          </div>
        )}
        {notice && <div className="chat-notice">{notice}</div>}
      </div>

      <form
        className="chat-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={connected ? "Ask about Pan…" : "Connecting…"}
          disabled={!connected}
          maxLength={1000}
          aria-label="Chat message"
        />
        <button
          type="submit"
          className="chat-send"
          disabled={!connected || thinking || !input.trim()}
          aria-label="Send message"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>
    </>
  );
}
