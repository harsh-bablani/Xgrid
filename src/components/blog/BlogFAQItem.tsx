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
    <div className="border-b border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 md:px-7 py-5 text-left flex items-start justify-between gap-4"
      >
        <span className="font-semibold text-gray-900 text-[15px] leading-snug">{q}</span>
        <span className="shrink-0 text-blue-600 font-bold text-xl leading-none">{open ? '−' : '+'}</span>
      </button>
      {open ? (
        <div className="px-5 md:px-7 pb-6 pt-0 text-gray-600 text-[14px] leading-relaxed">{a}</div>
      ) : null}
    </div>
  );
}
