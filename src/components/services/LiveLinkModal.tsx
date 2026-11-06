import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type LiveLinkPayload = {
  url: string;
  product: string;
  reason?: string;
};

type LiveLinkContextValue = {
  askLiveLink: (payload: LiveLinkPayload) => void;
};

const LiveLinkContext = createContext<LiveLinkContextValue | null>(null);

export function useLiveLink() {
  const ctx = useContext(LiveLinkContext);
  if (!ctx) {
    return {
      askLiveLink: ({ url }: LiveLinkPayload) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    };
  }
  return ctx;
}

export function LiveLinkProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<LiveLinkPayload | null>(null);

  const askLiveLink = useCallback((payload: LiveLinkPayload) => {
    setActive(payload);
  }, []);

  const value = useMemo(() => ({ askLiveLink }), [askLiveLink]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <LiveLinkContext.Provider value={value}>
      {children}
      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/55 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="live-link-title"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-slate-100 bg-[#F7F9FC] px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0C69B6]">
                Demo preview
              </p>
              <h3 id="live-link-title" className="mt-1 font-serif text-[22px] text-slate-900">
                Want to see more?
              </h3>
            </div>
            <div className="px-5 py-4">
              <p className="text-[14px] leading-relaxed text-slate-600">
                {active.reason ??
                  `This in-page preview is a lightweight demo of ${active.product}. Open the live site for the full experience.`}
              </p>
              <p className="mt-3 truncate rounded-lg bg-slate-50 px-3 py-2 text-[12px] font-medium text-slate-500 ring-1 ring-slate-200">
                {active.url.replace(/^https?:\/\//, '')}
              </p>
              <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-slate-200 px-4 text-[13px] font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Keep exploring here
                </button>
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setActive(null)}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#FF641F] px-4 text-[13px] font-semibold text-white hover:bg-[#E55A18]"
                >
                  Open live site
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </LiveLinkContext.Provider>
  );
}
