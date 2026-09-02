export default function BlogFAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden transition-colors ${
        open ? 'border-[#0C69B6]/25 bg-blue-50/40' : 'border-slate-100 bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 py-4 text-left flex items-start justify-between gap-4"
      >
        <span className="font-semibold text-slate-900 text-[15px] leading-snug">{q}</span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full inline-flex items-center justify-center text-sm font-bold leading-none ${
            open ? 'bg-[#0C69B6] text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div className="px-5 pb-5 pt-0 text-slate-600 text-[14px] leading-relaxed">{a}</div>
      ) : null}
    </div>
  );
}
