import ProductFeaturesSection from '../components/ProductFeaturesSection';
import ProductRelatedArticles from '../components/ProductRelatedArticles';
import { curaBizModules } from '../data/curaBizMatrix';
import {
  curaBizCareDelivery,
  curaBizDeployment,
  curaBizDifferentiators,
  curaBizFacilityTypes,
  curaBizPatientJourney,
  curaBizWhyChoose,
} from '../data/curaBizPageContent';
import {
  Activity,
  BellRing,
  BedDouble,
  CalendarCheck,
  Check,
  ClipboardList,
  Cloud,
  FlaskConical,
  Layers,
  Link2,
  MonitorSmartphone,
  Pill,
  Receipt,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserPlus,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function XCuraHMS() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DifferentiatorsSection />
      <CareDeliverySection />
      <ComparisonSection />
      <ProductFeaturesSection
        sectionId="features"
        modules={curaBizModules}
        theme="blue"
        kicker="Complete feature map"
        headingLead="Every CuraBiz module,"
        subtitle="Capabilities drawn from the CuraBiz HIMS product matrix — organised by how clinics and hospitals actually run. Ask for a demo to see which modules fit your facility."
      />
      <PatientJourneySection />
      <WhyChooseSection />
      <ProductRelatedArticles brand="curabiz" />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] bg-blue-50/90 lg:block"
        style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
              CuraBiz HIMS
            </span>
          </div>

          <h1 className="font-serif font-normal text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.12] tracking-[-0.02em] text-slate-900">
            HIMS for clinics, nursing homes, and hospitals.
            <em className="mt-2 block font-serif italic text-[#0C69B6]">
              One patient journey. Registration to discharge.
            </em>
          </h1>

          <p className="mt-5 max-w-[520px] text-[15px] md:text-[17px] leading-relaxed text-slate-600">
            CuraBiz connects OPD, IPD, e-prescription, pharmacy, lab, and billing on a single hospital record —
            built for Indian care teams, not a generic ERP with medical labels.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {curaBizFacilityTypes.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#0C69B6]/20 bg-blue-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-[10px] bg-[#0C69B6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#095a9d]"
            >
              Book a free demo
            </Link>
            <a
              href="#features"
              className="rounded-[10px] border-[1.5px] border-gray-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              Browse all features
            </a>
            <a
              href="https://wa.me/919257373668?text=Hi%20SlateBiz%2C%20I%27d%20like%20to%20watch%20a%20CuraBiz%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] border-[1.5px] border-[#0C69B6] bg-blue-50 px-5 py-3 text-sm font-semibold text-[#0C69B6] transition hover:bg-[#0C69B6] hover:text-white"
            >
              Watch Free demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_24px_60px_rgba(15,25,35,0.1)]">
            <img
              src="/curabiz-dashboard.jpg"
              alt="CuraBiz hospital command center dashboard"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6] mb-3 text-center">
          What makes CuraBiz different
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {curaBizDifferentiators.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#f8fafc] px-4 py-3.5 text-[14px] text-slate-700 leading-relaxed"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-[#0C69B6] shrink-0 mt-0.5">
                <Check size={12} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CareDeliverySection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] mx-auto text-center mb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-3">
          Built for care delivery
        </p>
        <h2 className="font-serif font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[1.15] tracking-[-0.02em] text-slate-900">
          {curaBizCareDelivery.title}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.7] text-slate-500 max-w-[680px] mx-auto">
          {curaBizCareDelivery.description}
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-6">
        {curaBizCareDelivery.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-left"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{pillar.title}</h3>
            <p className="text-[14px] text-slate-500 leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    ['Patient file speed', 'Slow pulls; hangs on large databases', 'Seconds across 70–80k+ records'],
    ['UHID at reception', 'Thick paper register each day', 'Daily UHID auto-reset in software'],
    ['Doctor follow-ups', 'Retype prescriptions every visit', 'Favourites + copy previous Rx'],
    ['Paediatrics', 'Photocopied growth charts', '0–2yr charts & immunisation log'],
    ['Pharmacy linkage', 'Handwritten Rx re-entered at counter', 'Rx → stock → bill in one loop'],
    ['Ayurveda workflows', 'Forced into generic procedure slots', 'Panchkarma schedule + diet plan'],
    ['Insurance / cashless', 'Separate Excel for claims', 'Policy tagged to patient UHID'],
    ['24/7 reliability', 'Crash-prone local installs', 'Cloud backup & cross-device access'],
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1020px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-3">
            Why hospital software matters
          </p>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
            <span className="block text-[34px] md:text-[40px] lg:text-[44px]">Generic software versus</span>
            <span className="block text-[34px] md:text-[40px] lg:text-[44px] italic text-[#0C69B6]">
              CuraBiz HIMS
            </span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.6] text-slate-500 max-w-[680px] mx-auto">
            Spreadsheets and disconnected clinic tools record visits. CuraBiz is built for UHID, beds, eRx,
            pharmacy stock, and documentation habits oriented toward NABH-style audits.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr_1.35fr] border-b border-gray-200">
            <div className="bg-[#111111] h-[52px] px-6 hidden md:flex items-center border-r border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Capability</span>
            </div>
            <div className="bg-[#111111] h-[52px] px-6 flex items-center border-r border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Generic / legacy tools
              </span>
            </div>
            <div className="bg-[#0C69B6] h-[52px] px-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">CuraBiz HIMS</span>
            </div>
          </div>

          {rows.map(([cap, generic, cura]) => (
            <div
              key={cap}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr_1.35fr] border-b border-gray-100 last:border-b-0"
            >
              <div className="px-6 py-3 bg-white font-medium text-[13px] text-slate-900 flex items-center border-r border-gray-100">
                {cap}
              </div>
              <div className="px-6 py-3 bg-gray-50 text-[13px] text-slate-500 flex items-center gap-2 border-r border-gray-100">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-orange-100 text-orange-500">
                  <X size={10} strokeWidth={3} />
                </span>
                <span>{generic}</span>
              </div>
              <div className="px-6 py-3 bg-white text-[13px] text-slate-900 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 text-[#0C69B6]">
                  <Check size={10} strokeWidth={3} />
                </span>
                <span>{cura}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-[505px] mx-auto">
          <div className="bg-[#F7F7F7] rounded-xl px-5 py-3.5 text-center border border-gray-200">
            <p className="text-[12px] text-slate-600 leading-relaxed">
              If your current system still needs Excel for beds, cashless cases, or pharmacy stock — that gap
              is exactly what CuraBiz closes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientJourneySection() {
  const journeySteps: { label: string; icon: LucideIcon }[] = [
    { label: curaBizPatientJourney[0], icon: UserPlus },
    { label: curaBizPatientJourney[1], icon: CalendarCheck },
    { label: curaBizPatientJourney[2], icon: Stethoscope },
    { label: curaBizPatientJourney[3], icon: Pill },
    { label: curaBizPatientJourney[4], icon: FlaskConical },
    { label: curaBizPatientJourney[5], icon: BedDouble },
    { label: curaBizPatientJourney[6], icon: Activity },
    { label: curaBizPatientJourney[7], icon: Receipt },
    { label: curaBizPatientJourney[8], icon: ClipboardList },
    { label: curaBizPatientJourney[9], icon: BellRing },
  ];

  const topRow = journeySteps.slice(0, 5);
  const bottomRow = [...journeySteps.slice(5)].reverse();

  return (
    <section className="relative w-full overflow-hidden bg-[#EAECEF] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#0C69B6]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative max-w-[1180px] mx-auto">
        <div className="max-w-[780px] mb-14 sm:mb-16">
          <span className="inline-block mb-5 px-3 py-1.5 bg-white text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full shadow-sm">
            Patient journey
          </span>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
            <span className="block text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px]">
              Track care from registration
            </span>
            <span className="block text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] italic text-[#0C69B6]">
              to follow-up.
            </span>
          </h2>
          <p className="mt-6 text-[14px] sm:text-[15px] leading-[1.7] text-[#4B5563] max-w-[640px]">
            One connected flow so clinical teams, pharmacy, and billing never rebuild the same patient
            story.
          </p>
        </div>

        {/* Desktop: snake timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-5">
            {topRow.map((step, i) => (
              <JourneyStepCard key={step.label} step={step} index={i} showRightConnector={i < 4} />
            ))}
          </div>

          <div className="flex justify-end pr-[10%] py-3">
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#0C69B6] to-[#0C69B6]/30 rounded-full" />
          </div>

          <div className="grid grid-cols-5 gap-5">
            {bottomRow.map((step, i) => {
              const originalIndex = journeySteps.indexOf(step);
              return (
                <JourneyStepCard
                  key={step.label}
                  step={step}
                  index={originalIndex}
                  showLeftConnector={i > 0}
                  reverseConnectors
                />
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#0C69B6] via-[#0C69B6]/50 to-[#0C69B6]/20 rounded-full" />
          <div className="space-y-4">
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative flex gap-4">
                  <div className="absolute -left-8 top-5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0C69B6] ring-4 ring-[#EAECEF]">
                    <span className="text-[9px] font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="group flex-1 rounded-2xl border border-white/80 bg-white p-5 shadow-[0_8px_30px_rgba(12,105,182,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,105,182,0.12)]">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0C69B6] to-[#095a9d] text-white shadow-md">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <p className="text-[14px] font-semibold text-slate-900 leading-snug">{step.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyStepCard({
  step,
  index,
  showRightConnector,
  showLeftConnector,
  reverseConnectors,
}: {
  step: { label: string; icon: LucideIcon };
  index: number;
  showRightConnector?: boolean;
  showLeftConnector?: boolean;
  reverseConnectors?: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative group">
      {showLeftConnector && reverseConnectors ? (
        <div className="pointer-events-none absolute -left-[10px] top-[52px] h-[2px] w-[10px] bg-[#0C69B6]/40" />
      ) : null}
      {showRightConnector && !reverseConnectors ? (
        <div className="pointer-events-none absolute -right-[10px] top-[52px] h-[2px] w-[10px] bg-[#0C69B6]/40" />
      ) : null}

      <div className="relative h-full rounded-[20px] border border-white/90 bg-white p-5 shadow-[0_10px_40px_rgba(12,105,182,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(12,105,182,0.14)]">
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-[20px] bg-gradient-to-r from-[#0C69B6] to-[#4da3e0]" />
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0C69B6] to-[#095a9d] text-white shadow-lg shadow-blue-500/20">
            <Icon size={20} strokeWidth={2} />
          </div>
          <span className="font-serif text-[28px] leading-none text-[#0C69B6]/20 group-hover:text-[#0C69B6]/35 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <p className="text-[13px] font-semibold text-slate-900 leading-snug min-h-[40px]">{step.label}</p>
      </div>
    </div>
  );
}

const whyChooseIcons: LucideIcon[] = [
  ShieldCheck,
  Sparkles,
  Settings2,
  MonitorSmartphone,
  Link2,
  ClipboardList,
];

function WhyChooseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(100%,900px)] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1180px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-14 sm:mb-16">
          <span className="inline-block mb-5 px-3 py-1.5 bg-blue-50 text-slate-800 text-[11px] font-medium tracking-wide rounded-full">
            Why hospitals choose SlateBiz
          </span>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
            <span className="block text-[32px] sm:text-[38px] md:text-[46px]">
              Built for mission-critical
            </span>
            <span className="block text-[32px] sm:text-[38px] md:text-[46px] italic text-[#0C69B6]">
              hospital hours.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {curaBizWhyChoose.map((item, i) => {
            const Icon = whyChooseIcons[i] ?? ShieldCheck;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[20px] border border-slate-200/70 bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0C69B6]/25 hover:shadow-[0_20px_50px_rgba(12,105,182,0.12)]"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0C69B6]/5 transition group-hover:bg-[#0C69B6]/10" />
                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0C69B6] to-[#095a9d] text-white shadow-lg shadow-blue-500/25">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="relative text-[16px] font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="relative text-[13px] sm:text-[14px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a2f5c] via-[#0C69B6] to-[#1a7fd4] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mb-8 sm:mb-10 text-center lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/90 mb-3">
              Deployment options
            </p>
            <h3 className="font-serif font-normal text-[26px] sm:text-[32px] text-white leading-[1.15]">
              On-premise, cloud, or hybrid — your call.
            </h3>
          </div>

          <div className="relative grid md:grid-cols-3 gap-4 sm:gap-5">
            {curaBizDeployment.map((item, i) => {
              const icons = [Server, Cloud, Layers];
              const Icon = icons[i] ?? Cloud;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:bg-white/15 hover:border-white/35"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 transition group-hover:bg-white/25">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-[13px] text-blue-50/90 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0d3b75] to-[#0C69B6] py-16 sm:py-20 px-4 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif font-normal text-[28px] sm:text-[36px] leading-[1.15] mb-4">
          Demo CuraBiz on your OPD, beds, and pharmacy flow.
        </h2>
        <p className="text-blue-100 text-[15px] leading-relaxed mb-8">
          A walkthrough configured around your specialties and wards — not a sample clinic dataset.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto min-w-[160px] h-[50px] inline-flex items-center justify-center rounded-[10px] bg-white text-[#0C69B6] text-[14px] font-semibold hover:bg-blue-50 transition-colors"
          >
            Book a free demo
          </Link>
          <a
            href="https://wa.me/919257373668"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[160px] h-[50px] inline-flex items-center justify-center rounded-[10px] border-2 border-white/80 text-white text-[14px] font-semibold hover:bg-white/10 transition-colors"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
