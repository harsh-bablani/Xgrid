export default function BlogSectionHeader({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8">
      {kicker ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6] mb-3">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-serif font-normal text-[26px] sm:text-[30px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-slate-900">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-slate-500 leading-[1.75] text-[15px] md:text-[16px]">{desc}</p>
      ) : null}
    </div>
  );
}
