import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

type ComingSoonProps = {
  brand: string;
  title: string;
  subtitle: string;
  description: string;
  accent?: 'blue' | 'orange' | 'teal';
};

const ACCENTS = {
  blue: {
    line: 'bg-[#0C69B6]',
    text: 'text-[#0C69B6]',
    badge: 'border-[#0C69B6]/20 bg-[#0C69B6]/8 text-[#0C69B6]',
    glow: 'from-[#0C69B6]/15 via-transparent to-[#FF641F]/10',
    orb1: 'bg-[#0C69B6]/20',
    orb2: 'bg-[#5B8DEF]/15',
    cta: 'bg-[#0C69B6] hover:bg-[#095a9d]',
  },
  orange: {
    line: 'bg-[#FF641F]',
    text: 'text-[#FF641F]',
    badge: 'border-[#FF641F]/20 bg-[#FF641F]/8 text-[#FF641F]',
    glow: 'from-[#FF641F]/15 via-transparent to-[#0C69B6]/10',
    orb1: 'bg-[#FF641F]/20',
    orb2: 'bg-[#0C69B6]/15',
    cta: 'bg-[#FF641F] hover:bg-[#e55718]',
  },
  teal: {
    line: 'bg-[#0D9488]',
    text: 'text-[#0D9488]',
    badge: 'border-[#0D9488]/20 bg-[#0D9488]/8 text-[#0D9488]',
    glow: 'from-[#0D9488]/15 via-transparent to-[#0C69B6]/10',
    orb1: 'bg-[#0D9488]/20',
    orb2: 'bg-[#0C69B6]/15',
    cta: 'bg-[#0D9488] hover:bg-[#0f766e]',
  },
} as const;

export default function ComingSoon({
  brand,
  title,
  subtitle,
  description,
  accent = 'blue',
}: ComingSoonProps) {
  const styles = ACCENTS[accent];

  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden flex items-center">
      {/* Soft brand gradient atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, #E8F2FB 0%, #F7F8FC 38%, #FBEDE6 72%, #EEF6FF 100%)',
        }}
      />
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl ${styles.orb1}`}
      />
      <div
        className={`pointer-events-none absolute -bottom-32 -left-20 h-[380px] w-[380px] rounded-full blur-3xl ${styles.orb2}`}
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-80`}
      />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.06) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[920px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm bg-white/70 shadow-sm mb-7 animate-[fadeUp_0.6s_ease-out_both]">
          <span className={`h-1.5 w-1.5 rounded-full ${styles.line} animate-pulse`} />
          <span className={styles.text}>{brand}</span>
        </div>

        <div className="mb-5 flex items-center justify-center gap-2.5 animate-[fadeUp_0.7s_ease-out_both]">
          <span className={`h-0.5 w-8 rounded ${styles.line}`} />
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${styles.badge}`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Coming soon
          </span>
          <span className={`h-0.5 w-8 rounded ${styles.line}`} />
        </div>

        <h1 className="font-serif font-normal text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-slate-900 animate-[fadeUp_0.8s_ease-out_both]">
          {title}
          <em className={`mt-2 block font-serif italic ${styles.text}`}>{subtitle}</em>
        </h1>

        <p className="mx-auto mt-6 max-w-[540px] text-[15px] sm:text-[17px] leading-relaxed text-slate-600 animate-[fadeUp_0.9s_ease-out_both]">
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-[fadeUp_1s_ease-out_both]">
          <Link
            to="/contact/"
            className={`inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/10 transition ${styles.cta}`}
          >
            Get notified
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-7 py-3.5 text-[14px] font-semibold text-slate-700 backdrop-blur-sm transition hover:bg-white hover:border-slate-300"
          >
            Back to home
          </Link>
        </div>

        <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.1em] text-slate-400 animate-[fadeUp_1.1s_ease-out_both]">
          We&apos;re crafting something worth the wait
        </p>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
