import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // @trinkui/shared still uses dist — transpile it normally
  transpilePackages: ["@trinkui/shared"],
  webpack(config) {
    // Point @trinkui/react to TypeScript source so each file's
    // "use client" directive is preserved for Next.js App Router
    config.resolve.alias = {
      ...config.resolve.alias,
      "@trinkui/react": path.resolve(__dirname, "../../packages/react/src/index.ts"),
    };
    return config;
  },
};

export default nextConfig;
