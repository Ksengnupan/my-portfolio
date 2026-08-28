"use client";

import { createRivetKit } from "@rivetkit/next-js/client";
import type { registry } from "./registry";

// Browsers talk to the Rivet Engine's public endpoint directly; the engine
// then invokes our actors through its serverless callback into /api/rivet.
// NEXT_PUBLIC_RIVET_ENDPOINT must point at the engine (dev: localhost:6420).
type Kit = ReturnType<typeof createRivetKit<typeof registry>>;

function makeKit(): Kit {
  if (typeof window === "undefined") {
    // SSR evaluates this module too; the hooks are only ever called in the
    // browser (the chat panel mounts on user interaction), so a stub is safe
    // and avoids the kit fetching engine metadata from the server process.
    return {
      useActor: () => {
        throw new Error("Rivet client is browser-only");
      },
    } as unknown as Kit;
  }
  const endpoint =
    process.env.NEXT_PUBLIC_RIVET_ENDPOINT ?? "http://localhost:6420";
  return createRivetKit<typeof registry>(endpoint);
}

export const { useActor } = makeKit();
