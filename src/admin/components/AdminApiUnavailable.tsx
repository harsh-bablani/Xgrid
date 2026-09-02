import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

type Props = {
  onRetry?: () => Promise<boolean>;
};

export default function AdminApiUnavailable({ onRetry }: Props) {
  const { apiBase, apiConfigured, refreshApiHealth } = useAuth();
  const [retrying, setRetrying] = useState(false);
  const isProd = import.meta.env.PROD;

  const handleRetry = async () => {
    setRetrying(true);
    const ok = onRetry ? await onRetry() : await refreshApiHealth();
    if (ok) window.location.reload();
    setRetrying(false);
  };

  if (isProd && !apiConfigured) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h1 className="text-xl font-semibold text-slate-900">Backend URL not configured</h1>
          <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">
            Set your Render API URL using <strong>one</strong> of these options, then redeploy:
          </p>
          <p className="mt-4 text-sm font-medium text-slate-800">Option A — Vercel env variable:</p>
          <pre className="mt-2 p-3 rounded-lg bg-slate-100 text-xs text-slate-800 overflow-x-auto">
            VITE_API_URL=https://YOUR-SERVICE.onrender.com
          </pre>
          <p className="mt-4 text-sm font-medium text-slate-800">Option B — edit in repo:</p>
          <pre className="mt-2 p-3 rounded-lg bg-slate-100 text-xs text-slate-800 overflow-x-auto">
            public/api-config.json → "apiUrl": "https://YOUR-SERVICE.onrender.com"
          </pre>
          <Link to="/" className="mt-6 inline-flex text-[#0C69B6] font-semibold text-sm hover:underline">
            ← Back to website
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h1 className="text-xl font-semibold text-slate-900">
          {isProd ? 'Connecting to API…' : 'Start the local server'}
        </h1>
        <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">
          {isProd ? (
            <>
              Waiting for your Render backend
              {apiBase ? (
                <>
                  {' '}
                  at <code className="text-xs bg-slate-100 px-1 rounded break-all">{apiBase}</code>
                </>
              ) : null}
              . Free tier can take <strong>60–90 seconds</strong> to wake up — click Retry and wait.
            </>
          ) : (
            <>
              Run <code className="text-sm bg-slate-100 px-1 rounded">npm run dev</code> in the project folder.
              That starts the website and API together locally.
            </>
          )}
        </p>
        <button
          type="button"
          onClick={() => void handleRetry()}
          disabled={retrying}
          className="mt-5 px-4 py-2 rounded-lg bg-[#0C69B6] text-white text-sm font-semibold disabled:opacity-60"
        >
          {retrying ? 'Retrying…' : 'Retry connection'}
        </button>
        <Link to="/" className="mt-4 ml-4 inline-flex text-[#0C69B6] font-semibold text-sm hover:underline">
          ← Back to website
        </Link>
      </div>
    </div>
  );
}
