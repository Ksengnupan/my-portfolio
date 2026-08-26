/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // rivetkit loads its WASM runtime via a computed dynamic import that
    // webpack cannot bundle — keep these packages external on the server.
    serverComponentsExternalPackages: ["rivetkit", "@rivetkit/rivetkit-wasm"],
  },
};

export default nextConfig;
