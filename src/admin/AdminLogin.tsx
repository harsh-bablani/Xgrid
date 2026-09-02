import { FormEvent, useState } from 'react';
import { Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminApiUnavailable from './components/AdminApiUnavailable';

export default function AdminLogin() {
  const { user, loading, signIn, apiReady, apiChecking, refreshApiHealth } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const from = (location.state as { from?: string } | null)?.from || '/admin';

  if (apiChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500">Connecting to API…</p>
      </div>
    );
  }

  if (!apiReady) {
    return <AdminApiUnavailable onRetry={refreshApiHealth} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500">Checking session…</p>
      </div>
    );
  }

  if (user) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const result = await signIn(email, password);
    setSubmitting(false);
    if (result.error) setError(result.error);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo.jpg" alt="SlateBiz" className="h-10 w-auto mx-auto mix-blend-multiply" />
          </Link>
          <h1 className="mt-6 text-2xl font-semibold text-slate-900">Admin sign in</h1>
          <p className="mt-2 text-slate-500 text-sm">Manage blog posts, images, and categories</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5"
        >
          {import.meta.env.DEV && (
            <div className="rounded-lg bg-blue-50 border border-blue-100 px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">Local dev credentials</p>
              <p>Email: <span className="font-mono">admin@slatebiz.com</span></p>
              <p>Password: <span className="font-mono">admin123</span></p>
            </div>
          )}

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">{error}</div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/30 focus:border-[#0C69B6]"
              placeholder="admin@slatebiz.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/30 focus:border-[#0C69B6]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-[50px] rounded-[10px] bg-[#FF641F] text-white text-sm font-semibold hover:bg-[#E55A18] transition-colors disabled:opacity-60"
          >
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          <Link to="/" className="text-[#0C69B6] font-medium hover:underline">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
