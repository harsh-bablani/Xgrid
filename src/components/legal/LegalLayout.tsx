import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays, ChevronDown, Clock, Mail, type LucideIcon } from 'lucide-react';

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export type LegalHighlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type LegalLayoutProps = Readonly<{
  kicker: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  updated?: string;
  readTime: string;
  highlights: LegalHighlight[];
  sections: LegalSection[];
  related: { to: string; label: string };
}>;

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive] as const;
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

export default function LegalLayout({
  kicker,
  titleLead,
  titleAccent,
  intro,
  updated,
  readTime,
  highlights,
  sections,
  related,
}: LegalLayoutProps) {
  const [ids] = useState(() => sections.map((s) => s.id));
  const [active, setActive] = useActiveSection(ids);
  const progress = useReadingProgress();
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const goTo = (id: string) => {
    setActive(id);
    setMobileTocOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeIndex = Math.max(0, ids.indexOf(active));

  return (
    <div className="min-h-screen bg-white">
      <div
        className="fixed left-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-[#0C69B6] to-[#FF641F] transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-100"
        style={{ background: 'linear-gradient(115deg, #E8F2FB 0%, #F7F8FC 45%, #FBEDE6 100%)' }}
      >
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#0C69B6]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-6 h-64 w-64 rounded-full bg-[#FF641F]/10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(rgba(12,105,182,0.18) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        <div className="relative mx-auto max-w-[820px] px-4 pb-12 pt-14 text-center sm:px-6 sm:pb-14 sm:pt-16 lg:pt-20">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">{kicker}</span>
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
          </div>

          <h1 className="font-serif font-normal text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.12] tracking-[-0.02em] text-slate-900">
            {titleLead}
            <em className="mt-1 block font-serif italic text-[#FF641F]">{titleAccent}</em>
          </h1>

          <p className="mx-auto mt-5 max-w-[600px] text-[14.5px] leading-relaxed text-slate-600 sm:text-[15.5px]">
            {intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-[12px] font-medium text-slate-600">
            {updated && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                <CalendarDays className="h-3.5 w-3.5 text-[#0C69B6]" />
                Last updated {updated}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
              <Clock className="h-3.5 w-3.5 text-[#FF641F]" />
              {readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
              {sections.length} sections
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/70 bg-white/75 p-5 shadow-[0_8px_30px_rgba(15,25,35,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,25,35,0.08)]"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0C69B6]/10 text-[#0C69B6] transition group-hover:bg-[#0C69B6] group-hover:text-white">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h2 className="font-sans text-[14px] font-semibold text-slate-900">{title}</h2>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#F7F8FC] py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10 lg:px-8">
          {/* Mobile TOC */}
          <div className="sticky top-[calc(var(--site-header-height)+0.5rem)] z-20 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen((open) => !open)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white/95 px-4 py-3 text-left shadow-sm backdrop-blur"
              aria-expanded={mobileTocOpen}
            >
              <span className="min-w-0">
                <span className="block text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  On this page · {activeIndex + 1}/{sections.length}
                </span>
                <span className="block truncate text-[13.5px] font-medium text-slate-900">
                  {sections[activeIndex]?.title}
                </span>
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileTocOpen && (
              <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => goTo(section.id)}
                    className={`flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition ${
                      active === section.id ? 'bg-[#0C69B6]/[0.07] text-[#0C69B6]' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="mt-px w-5 shrink-0 font-mono text-[11px] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--site-header-height)+1.5rem)]">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">On this page</p>
              <nav className="relative max-h-[calc(100vh-var(--site-header-height)-12rem)] overflow-y-auto pr-2">
                <span className="absolute bottom-1 left-[7px] top-1 w-px bg-slate-200" aria-hidden />
                {sections.map((section) => {
                  const isActive = active === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => goTo(section.id)}
                      className={`group relative flex w-full items-start gap-3 py-1.5 text-left text-[13px] leading-snug transition ${
                        isActive ? 'font-medium text-[#0C69B6]' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <span
                        className={`relative z-10 mt-[5px] h-[9px] w-[9px] shrink-0 rounded-full border-2 transition ${
                          isActive
                            ? 'scale-110 border-[#0C69B6] bg-[#0C69B6]'
                            : 'border-slate-300 bg-[#F7F8FC] group-hover:border-slate-500'
                        }`}
                        style={{ marginLeft: 3 }}
                      />
                      {section.title}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-4">
                <p className="text-[12.5px] font-semibold text-slate-900">Questions about this policy?</p>
                <a
                  href="mailto:info@slatebiz.com"
                  className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#0C69B6] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  info@slatebiz.com
                </a>
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div className="min-w-0 space-y-4 sm:space-y-5">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-[calc(var(--site-header-height)+5rem)] rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_4px_20px_rgba(15,25,35,0.03)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(15,25,35,0.06)] sm:p-8 lg:scroll-mt-[calc(var(--site-header-height)+1.5rem)]"
              >
                <header className="mb-4 flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-sans text-[13px] font-semibold transition ${
                      active === section.id
                        ? 'bg-[#0C69B6] text-white shadow-[0_6px_16px_rgba(12,105,182,0.3)]'
                        : 'bg-[#0C69B6]/[0.08] text-[#0C69B6]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="pt-1.5 font-serif text-[clamp(1.2rem,2vw,1.45rem)] font-normal leading-snug tracking-[-0.01em] text-slate-900">
                    {section.title}
                  </h2>
                </header>
                <div className="legal-content sm:pl-14">{section.content}</div>
              </article>
            ))}

            {/* Contact strip */}
            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200/70 p-7 sm:p-9"
              style={{ background: 'linear-gradient(115deg, #E8F2FB 0%, #F7F8FC 48%, #FBEDE6 100%)' }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF641F]/10 blur-2xl" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-serif text-[clamp(1.3rem,2.2vw,1.6rem)] font-normal text-slate-900">
                    Still have <em className="italic text-[#FF641F]">questions?</em>
                  </h2>
                  <p className="mt-1.5 text-[13.5px] text-slate-600">
                    Our team is happy to walk you through anything on this page.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact/"
                    className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#FF641F] px-5 text-[13.5px] font-semibold text-white transition hover:bg-[#E55A18]"
                  >
                    Contact us
                  </Link>
                  <Link
                    to={related.to}
                    className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[10px] border border-slate-300 bg-white px-5 text-[13.5px] font-semibold text-slate-800 transition hover:border-slate-400"
                  >
                    {related.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
