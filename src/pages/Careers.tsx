import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Check,
  Code2,
  Copy,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Megaphone,
  Rocket,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';

type JobOpening = {
  id: string;
  title: string;
  team: string;
  icon: LucideIcon;
  accent: 'blue' | 'orange';
  overview: string;
  responsibilities: string[];
  requirements: string[];
  location: 'Remote' | 'Jaipur';
  experience: string;
  compensation: string;
};

const openings: JobOpening[] = [
  {
    id: 'video-editor',
    title: 'Video Editor',
    team: 'Creative',
    icon: Video,
    accent: 'orange',
    overview:
      "We're looking for a creative Video Editor who can edit engaging videos and create content for social media and other platforms.",
    responsibilities: ['Edit videos and create social media content', 'Collaborate on ideas with the team'],
    requirements: ['Basic editing skills and creativity', 'Willingness to learn', 'No prior experience required'],
    location: 'Remote',
    experience: 'Fresher',
    compensation: 'To be discussed during the interview',
  },
  {
    id: 'java-trainee',
    title: 'Java Trainee (J2EE / REST API)',
    team: 'Engineering',
    icon: Code2,
    accent: 'blue',
    overview: 'Hiring a Java Trainee interested in backend development and learning on real projects.',
    responsibilities: ['Assist in backend development', 'Work on REST APIs', 'Learn and contribute on live projects'],
    requirements: ['Basic Java knowledge', 'J2EE / REST API experience preferred'],
    location: 'Jaipur',
    experience: 'Fresher / Trainee',
    compensation: 'To be discussed during the interview',
  },
  {
    id: 'business-development',
    title: 'Business Development Trainee',
    team: 'Growth',
    icon: TrendingUp,
    accent: 'blue',
    overview: 'Help expand business opportunities and outreach for SlateBiz.',
    responsibilities: [
      'Identify potential clients',
      'Assist with outreach and communication',
      'Support business growth initiatives',
    ],
    requirements: ['Good communication skills', 'Interest in business development'],
    location: 'Remote',
    experience: 'Fresher / Trainee',
    compensation: 'To be discussed during the interview',
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Marketing Manager',
    team: 'Marketing',
    icon: Megaphone,
    accent: 'orange',
    overview: 'Create and manage social media content to grow our brand presence.',
    responsibilities: [
      'Content planning and scheduling',
      'Posting and community engagement',
      'Track and improve social performance',
    ],
    requirements: ['Basic social media knowledge', 'Creativity and consistency', 'No prior experience required'],
    location: 'Remote',
    experience: 'Fresher',
    compensation: 'To be discussed during the interview',
  },
];

const perks: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Rocket, title: 'Real products, day one', text: 'Work on ERPs that jewellers, hospitals, and retailers run every day.' },
  { icon: Users, title: 'Learn from the team', text: 'Small team, direct access to the people who build and ship.' },
  { icon: Laptop, title: 'Remote-friendly', text: 'Most roles are remote; engineering sits with us in Jaipur.' },
  { icon: GraduationCap, title: 'Freshers welcome', text: 'Curiosity and consistency matter more than a long CV.' },
];

const APPLY_EMAIL = 'info@slatebiz.com';

function applySubject(roleTitle: string) {
  return `Application for ${roleTitle} – SlateBiz`;
}

function applyMailto(roleTitle: string) {
  return `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(applySubject(roleTitle))}`;
}

const accentStyles = {
  blue: {
    tile: 'bg-gradient-to-br from-[#E8F2FB] to-[#d6e8f8] text-[#0C69B6]',
    dot: 'bg-[#0C69B6]',
    team: 'text-[#0C69B6]',
  },
  orange: {
    tile: 'bg-gradient-to-br from-[#FFF1EA] to-[#FBE1D3] text-[#FF641F]',
    dot: 'bg-[#FF641F]',
    team: 'text-[#E55A18]',
  },
};

type Filter = 'All' | 'Remote' | 'Jaipur';

function JobCard({ job }: Readonly<{ job: JobOpening }>) {
  const Icon = job.icon;
  const accent = accentStyles[job.accent];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(15,25,35,0.04)] transition duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_18px_44px_rgba(15,25,35,0.09)]">
      <span
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${accent.dot}`}
        aria-hidden
      />
      <div className="flex flex-grow flex-col p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.tile}`}>
            <Icon className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${accent.team}`}>{job.team}</span>
            <h3 className="mt-0.5 font-sans text-[19px] font-semibold leading-snug tracking-[-0.01em] text-slate-900 sm:text-[20px]">
              {job.title}
            </h3>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F8FC] px-3 py-1 text-[12px] font-medium text-slate-700 ring-1 ring-slate-200/80">
            <MapPin className="h-3.5 w-3.5 text-[#FF641F]" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F8FC] px-3 py-1 text-[12px] font-medium text-slate-700 ring-1 ring-slate-200/80">
            <GraduationCap className="h-3.5 w-3.5 text-[#0C69B6]" />
            {job.experience}
          </span>
        </div>

        <p className="mt-5 text-[14.5px] leading-relaxed text-slate-600">{job.overview}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            { label: 'What you’ll do', items: job.responsibilities },
            { label: 'What we look for', items: job.requirements },
          ].map((group) => (
            <div key={group.label}>
              <h4 className="mb-2.5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                {group.label}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13.5px] leading-snug text-slate-700">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0C69B6]/10">
                      <Check className="h-2.5 w-2.5 text-[#0C69B6]" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 bg-[#FAFBFD] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500">
          <Briefcase className="h-3.5 w-3.5" />
          Pay: {job.compensation.toLowerCase()}
        </span>
        <a
          href={applyMailto(job.title)}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] bg-[#FF641F] px-4 text-[13px] font-semibold text-white transition hover:bg-[#E55A18]"
        >
          Apply now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export default function Careers() {
  const [filter, setFilter] = useState<Filter>('All');
  const [copied, setCopied] = useState(false);

  const counts = useMemo(
    () => ({
      All: openings.length,
      Remote: openings.filter((job) => job.location === 'Remote').length,
      Jaipur: openings.filter((job) => job.location === 'Jaipur').length,
    }),
    []
  );

  const visible = filter === 'All' ? openings : openings.filter((job) => job.location === filter);

  const copySubject = async () => {
    try {
      await navigator.clipboard.writeText(applySubject('[Role Name]'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-100"
        style={{ background: 'linear-gradient(115deg, #E8F2FB 0%, #F7F8FC 45%, #FBEDE6 100%)' }}
      >
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#0C69B6]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-6 h-72 w-72 rounded-full bg-[#FF641F]/10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(rgba(12,105,182,0.18) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        <div className="relative mx-auto max-w-[860px] px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-16 sm:pt-16 lg:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0C69B6]/20 bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-[#0C69B6] shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            We&apos;re hiring · {openings.length} open roles
          </span>

          <h1 className="mt-5 font-serif font-normal text-[clamp(2.1rem,4.8vw,3.4rem)] leading-[1.1] tracking-[-0.02em] text-slate-900">
            Build the software
            <em className="mt-1 block font-serif italic text-[#FF641F]">India&apos;s businesses run on.</em>
          </h1>

          <p className="mx-auto mt-5 max-w-[580px] text-[14.5px] leading-relaxed text-slate-600 sm:text-[15.5px]">
            We&apos;re always looking for motivated individuals who want to learn, grow, and build impactful
            digital solutions with us. Explore our current openings below.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#openings"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#FF641F] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(255,100,31,0.25)] transition hover:bg-[#E55A18]"
            >
              View open roles
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${APPLY_EMAIL}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-slate-300 bg-white px-6 text-[14px] font-semibold text-slate-800 transition hover:border-slate-400"
            >
              <Mail className="h-4 w-4 text-[#0C69B6]" />
              Email your resume
            </a>
          </div>

          <dl className="mx-auto mt-10 grid max-w-[620px] grid-cols-3 divide-x divide-slate-200/80 rounded-2xl border border-white/70 bg-white/70 py-4 shadow-[0_8px_30px_rgba(15,25,35,0.05)] backdrop-blur-sm">
            {[
              { value: String(openings.length), label: 'Open roles' },
              { value: 'Remote', label: '+ Jaipur office' },
              { value: 'Freshers', label: 'Welcome to apply' },
            ].map((stat) => (
              <div key={stat.label} className="px-2">
                <dt className="font-serif text-[clamp(1.15rem,2.6vw,1.6rem)] text-slate-900">{stat.value}</dt>
                <dd className="mt-0.5 text-[11.5px] font-medium text-slate-500 sm:text-[12px]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why SlateBiz */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">Why SlateBiz</span>
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-[-0.02em] text-slate-900">
              A place to <em className="italic text-[#FF641F]">learn by shipping.</em>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200/70 bg-[#F7F8FC] p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_36px_rgba(15,25,35,0.07)]"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0C69B6] shadow-sm ring-1 ring-slate-200/80 transition group-hover:bg-[#0C69B6] group-hover:text-white group-hover:ring-[#0C69B6]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-sans text-[15px] font-semibold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="scroll-mt-header bg-[#F7F8FC] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">Open roles</span>
              </div>
              <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-[-0.02em] text-slate-900">
                Current openings
              </h2>
              <p className="mt-1.5 text-[14px] text-slate-600">Apply with your resume today — no long forms.</p>
            </div>

            <div className="inline-flex self-start rounded-xl border border-slate-200 bg-white p-1 shadow-sm sm:self-auto" role="tablist">
              {(['All', 'Remote', 'Jaipur'] as Filter[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={filter === option}
                  onClick={() => setFilter(option)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium transition ${
                    filter === option ? 'bg-[#0C69B6] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option}
                  <span
                    className={`rounded-full px-1.5 text-[11px] ${
                      filter === option ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {counts[option]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {visible.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">How to apply</span>
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-[-0.02em] text-slate-900">
              Three steps. <em className="italic text-[#FF641F]">That&apos;s it.</em>
            </h2>
          </div>

          <ol className="relative grid gap-4 md:grid-cols-3 md:gap-6">
            <span
              className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-[#0C69B6]/30 via-slate-200 to-[#FF641F]/30 md:block"
              aria-hidden
            />
            {[
              { icon: Sparkles, title: 'Pick a role', text: 'Find the opening that matches what you want to learn and do.' },
              { icon: Send, title: 'Email your resume', text: `Send it to ${APPLY_EMAIL} with the role in the subject line.` },
              { icon: Users, title: 'Meet the team', text: 'We get in touch to talk through the role and compensation.' },
            ].map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="relative rounded-2xl border border-slate-200/70 bg-white p-6 text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F2FB] to-[#FBEDE6] text-[#0C69B6] ring-4 ring-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Step {index + 1}
                </span>
                <h3 className="mt-1 font-sans text-[16px] font-semibold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>

          <div
            className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200/70 p-7 sm:p-10"
            style={{ background: 'linear-gradient(115deg, #E8F2FB 0%, #F7F8FC 48%, #FBEDE6 100%)' }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#FF641F]/10 blur-2xl" />
            <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-serif text-[clamp(1.35rem,2.4vw,1.75rem)] font-normal text-slate-900">
                  Don&apos;t see your role? <em className="italic text-[#FF641F]">Write to us anyway.</em>
                </h3>
                <p className="mt-2 text-[14px] text-slate-600">
                  Send your resume to{' '}
                  <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold text-[#0C69B6] hover:underline">
                    {APPLY_EMAIL}
                  </a>{' '}
                  with this subject line:
                </p>
                <button
                  type="button"
                  onClick={copySubject}
                  className="mt-4 inline-flex max-w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-left text-[13.5px] font-medium text-slate-800 shadow-sm transition hover:border-[#0C69B6]/40"
                >
                  <span className="truncate">{applySubject('[Role Name]')}</span>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 text-[11.5px] font-semibold ${
                      copied ? 'bg-emerald-50 text-emerald-600' : 'bg-[#0C69B6]/[0.08] text-[#0C69B6]'
                    }`}
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </span>
                </button>
              </div>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(applySubject('[Role Name]'))}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#FF641F] px-6 text-[14px] font-semibold text-white transition hover:bg-[#E55A18]"
              >
                <Mail className="h-4 w-4" />
                Send your resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
