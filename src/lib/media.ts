/** Prefix relative upload paths with VITE_API_URL in production (frontend on a different host). */
export function resolveMediaUrl(pathOrUrl: string): string {
  if (!pathOrUrl?.trim()) return pathOrUrl;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') || '';
  if (!base) return pathOrUrl;
  return `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}
