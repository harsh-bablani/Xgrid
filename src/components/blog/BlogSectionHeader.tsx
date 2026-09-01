export default function BlogSectionHeader({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  void kicker;
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-wide">{title}</h2>
      {desc ? <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">{desc}</p> : null}
    </div>
  );
}
