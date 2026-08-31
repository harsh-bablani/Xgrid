const TOKEN_KEY = 'slatebiz_admin_token';

export type AdminUser = {
  id: string;
  email: string;
  name?: string;
};

export type ApiFetchOptions = RequestInit & {
  /** Do not clear token on 401 (e.g. failed login attempt) */
  skipAuthClear?: boolean;
  /** Custom timeout in ms (default 8000; uploads use 60000) */
  timeoutMs?: number;
};

type UnauthorizedListener = () => void;
const unauthorizedListeners = new Set<UnauthorizedListener>();

export function onUnauthorized(listener: UnauthorizedListener) {
  unauthorizedListeners.add(listener);
  return () => unauthorizedListeners.delete(listener);
}

function notifyUnauthorized() {
  unauthorizedListeners.forEach((fn) => fn());
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  const { skipAuthClear, timeoutMs = path === '/upload' ? 60000 : 8000, ...fetchOptions } = options;
  const token = getToken();
  const headers = new Headers(fetchOptions.headers);

  if (token) headers.set('Authorization', `Bearer ${token}`);

  const isFormData = fetchOptions.body instanceof FormData;
  if (!isFormData && fetchOptions.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  let res: Response;
  try {
    res = await fetch(`/api${path}`, { ...fetchOptions, headers, signal: controller.signal });
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error(
        path === '/upload'
          ? 'Upload timed out. Try a smaller image or check your connection.'
          : 'API server not responding. Run npm run kill-server then npm run dev.'
      );
    }
    throw new Error('Cannot reach API server. Run npm run dev (both client and server must start).');
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    const message = body.error || 'Request failed';

    if (res.status === 401 && !skipAuthClear) {
      clearToken();
      notifyUnauthorized();
      throw new ApiError('Session expired. Please sign in again.', 401);
    }

    throw new ApiError(message, res.status);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch('/api/health', { signal: controller.signal });
    clearTimeout(timeout);
    return res.ok;
  } catch {
    return false;
  }
}
