"use client";

import dynamic from "next/dynamic";

// The Rivet client stack is browser-only; skip it entirely during SSR.
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatWidgetLoader() {
  return <ChatWidget />;
}
