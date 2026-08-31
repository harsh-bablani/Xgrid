import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { apiFetch, clearToken, getToken, setToken, checkApiHealth, onUnauthorized, type AdminUser } from '../lib/api';

type AuthContextValue = {
  user: AdminUser | null;
  loading: boolean;
  apiReady: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    checkApiHealth().then(setApiReady);

    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    apiFetch<{ user: AdminUser }>('/auth/me')
      .then(({ user: me }) => setUser(me))
      .catch(() => {
        clearToken();
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    return onUnauthorized(() => setUser(null));
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { token, user: loggedIn } = await apiFetch<{ token: string; user: AdminUser }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        skipAuthClear: true,
      });
      setToken(token);
      setUser(loggedIn);
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Sign in failed.' };
    }
  };

  const signOut = async () => {
    try {
      await apiFetch('/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    }
    clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, apiReady, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
