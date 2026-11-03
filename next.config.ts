import type { NextConfig } from "next";

// Vercel: selalu root domain (tanpa basePath, tanpa static export), abaikan env NEXT_PUBLIC_BASE_PATH.
// GitHub Pages (Actions): static export + basePath "/Popsi".
const isVercel = Boolean(process.env.VERCEL);
const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS) && !isVercel;

const computedBasePath = isVercel
  ? ""
  : (process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubActions ? "/Popsi" : ""));

const nextConfig: NextConfig = {
  ...(computedBasePath ? { basePath: computedBasePath } : {}),
  ...(isGitHubActions ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
  },
};

export default nextConfig;
