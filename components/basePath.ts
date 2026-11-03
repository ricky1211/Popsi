const isVercel = typeof process !== "undefined" && Boolean(process.env.VERCEL);
const isGitHubActions = typeof process !== "undefined" && Boolean(process.env.GITHUB_ACTIONS);

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isVercel
    ? ""
    : isGitHubActions
    ? "/Popsi"
    : "";

/**
 * Prepends basePath to static assets so they load correctly on GitHub Pages or custom sub-paths.
 */
export function withBasePath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) {
    return cleanPath;
  }
  if (cleanPath.startsWith(basePath)) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
