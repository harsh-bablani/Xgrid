import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Pencil, Trash2, ExternalLink } from 'lucide-react';
import { fetchAllPosts, deletePost } from '../lib/blogService';
import type { BlogPost } from '../types/blog';

export default function AdminDashboard() {
  const location = useLocation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const state = location.state as { success?: string } | null;
    if (state?.success) {
      setNotice(state.success);
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  const load = async () => {
    setError('');
    try {
      setPosts(await fetchAllPosts());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Blog posts</h1>
          <p className="mt-1 text-slate-500 text-sm">Create and edit articles for the public blog page.</p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center justify-center gap-2 h-[44px] px-5 rounded-[10px] bg-[#FF641F] text-white text-sm font-semibold hover:bg-[#E55A18] transition-colors"
        >
          <Plus className="w-4 h-4" /> New post
        </Link>
      </div>

      {notice && (
        <div className="mb-6 rounded-lg bg-green-50 border border-green-100 px-4 py-3 text-sm text-green-700">{notice}</div>
      )}

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-white rounded-xl border border-gray-100 animate-pulse" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-slate-500">No blog posts yet.</p>
          <Link to="/admin/blogs/new" className="mt-4 inline-flex text-[#0C69B6] font-semibold text-sm hover:underline">
            Create your first post →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50/80">
                  <th className="text-left px-5 py-3 font-semibold text-slate-600">Title</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 hidden md:table-cell">Brand</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 hidden lg:table-cell">Category</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600">Status</th>
                  <th className="text-right px-5 py-3 font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-50 hover:bg-slate-50/50">
                    <td className="px-5 py-4">
                      <p className="font-medium text-slate-900 line-clamp-1">{post.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">/blog/{post.slug}</p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell capitalize text-slate-600">{post.brand}</td>
                    <td className="px-5 py-4 hidden lg:table-cell text-slate-600 line-clamp-1">{post.categoryLabel}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                          post.published ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {post.published && (
                          <a
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 font-medium"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> View
                          </a>
                        )}
                        <Link
                          to={`/admin/blogs/${post.id}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#0C69B6] hover:bg-blue-50 font-medium"
                        >
                          <Pencil className="w-3.5 h-3.5" /> Edit
                        </Link>
                        <button
                          type="button"
                          disabled={deletingId === post.id}
                          onClick={() => handleDelete(post.id, post.title)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 font-medium disabled:opacity-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
