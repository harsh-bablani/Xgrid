import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LogOut, FileText, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminApiUnavailable from './components/AdminApiUnavailable';

export default function AdminLayout() {
  const { user, loading, signOut, apiReady, apiChecking, refreshApiHealth } = useAuth();
  const location = useLocation();

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
        <p className="text-slate-500">Loading…</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/admin" className="flex items-center gap-2">
              <img src="/logo.jpg" alt="SlateBiz" className="h-8 w-auto mix-blend-multiply" />
              <span className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Admin</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-4">
              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#0C69B6]"
              >
                <FileText className="w-4 h-4" /> Blog posts
              </Link>
              <Link
                to="/admin/blogs/new"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#0C69B6]"
              >
                <Plus className="w-4 h-4" /> New post
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/blogs/" className="text-sm text-slate-500 hover:text-slate-800 hidden sm:inline">
              View site
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
