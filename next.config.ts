import type { NextConfig } from "next";

// Deteksi environment deployment:
// 1. Vercel: process.env.VERCEL bernilai '1' -> basePath HARUS kosong ("") agar root domain tidak 404.
// 2. GitHub Pages (Actions): process.env.GITHUB_ACTIONS bernilai 'true' -> gunakan "/Popsi".
// 3. Manual override: NEXT_PUBLIC_BASE_PATH.
const isVercel = Boolean(process.env.VERCEL);
const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS);

const computedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isVercel
    ? ""
    : isGitHubActions
    ? "/Popsi"
    : "";

const nextConfig: NextConfig = {
  // Hanya pasang basePath jika bernilai non-empty string
  ...(computedBasePath ? { basePath: computedBasePath } : {}),
  // Untuk GitHub Pages gunakan export static, di Vercel gunakan deployment native Next.js
  ...(isGitHubActions ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
  },
};

export default nextConfig;
