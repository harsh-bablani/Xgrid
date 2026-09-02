/**
 * Resolves the backend API base URL.
 * 1. VITE_API_URL (Vercel env — preferred)
 * 2. /api-config.json (fallback, no rebuild needed after edit)
 * 3. Empty in dev → Vite proxy /api
 */
let cachedBase: string | undefined;
let pending: Promise<string> | undefined;

export async function resolveApiBase(): Promise<string> {
  if (cachedBase !== undefined) return cachedBase;
  if (pending) return pending;

  pending = (async () => {
    const fromEnv = (import.meta.env.VITE_API_URL as string | undefined)?.trim().replace(/\/$/, '') || '';
    if (fromEnv) {
      if (typeof window !== 'undefined') {
        (window as Window & { __SLATEBIZ_API_URL__?: string }).__SLATEBIZ_API_URL__ = fromEnv;
      }
      cachedBase = fromEnv;
      return fromEnv;
    }

    if (import.meta.env.DEV) {
      cachedBase = '';
      return '';
    }

    try {
      const res = await fetch('/api-config.json', { cache: 'no-store' });
      if (res.ok) {
        const data = (await res.json()) as { apiUrl?: string };
        const fromFile = (data.apiUrl || '').trim().replace(/\/$/, '');
        if (fromFile && !fromFile.includes('YOUR-SERVICE')) {
          if (typeof window !== 'undefined') {
            (window as Window & { __SLATEBIZ_API_URL__?: string }).__SLATEBIZ_API_URL__ = fromFile;
          }
          cachedBase = fromFile;
          return fromFile;
        }
        cachedBase = '';
        return '';
      }
    } catch {
      // ignore
    }

    cachedBase = '';
    return '';
  })();

  return pending;
}

export function isApiConfiguredBase(base: string): boolean {
  return import.meta.env.DEV || Boolean(base);
}
