import { toNextHandler } from "@rivetkit/next-js";
import { registry } from "@/rivet/registry";

// Mounting the registry here turns this Next.js server into a Rivet worker:
// on boot it connects outbound to the engine at RIVET_ENDPOINT and hosts the
// actors; browsers reach them through this same route.
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const handlers = toNextHandler(registry);

// In dev the Next.js driver force-starts a bundled local engine, which
// conflicts with pointing RIVET_ENDPOINT at our own engine. Prefer ours.
if (process.env.RIVET_ENDPOINT) {
  registry.config.startEngine = false;
}

export const { GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS } = handlers;
