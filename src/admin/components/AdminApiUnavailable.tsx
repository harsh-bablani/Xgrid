import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE, checkApiHealth, isApiConfigured } from '../lib/api';

type Props = {
  onRetry?: () => void;
};

export default function AdminApiUnavailable({ onRetry }: Props) {
  const [retrying, setRetrying] = useState(false);
  const isProd = import.meta.env.PROD;

  const handleRetry = async () => {
    setRetrying(true);
    if (onRetry) {
      const ok = await onRetry();
      if (ok) window.location.reload();
    } else {
      const ok = await checkApiHealth();
      if (ok) window.location.reload();
    }
    setRetrying(false);
  };

  if (isProd && !isApiConfigured) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h1 className="text-xl font-semibold text-slate-900">Backend URL not configured</h1>
          <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">
            On <strong>Vercel</strong>, add this environment variable and redeploy:
          </p>
          <pre className="mt-4 p-3 rounded-lg bg-slate-100 text-xs text-slate-800 overflow-x-auto">
            VITE_API_URL=https://YOUR-SERVICE.onrender.com
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
              {API_BASE ? (
                <>
                  {' '}
                  at <code className="text-xs bg-slate-100 px-1 rounded break-all">{API_BASE}</code>
                </>
              ) : null}
              . Free tier can take <strong>30–60 seconds</strong> to wake up on first visit.
            </>
          ) : (
            <>
              Run <code className="text-sm bg-slate-100 px-1 rounded">npm run dev</code> — it starts the website
              and local API on port 3001.
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
