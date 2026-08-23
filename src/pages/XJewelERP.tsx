import { Building2, BarChart3, UserPlus, ClipboardCheck, ReceiptText, ShieldCheck, Check, X, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { modules } from '../data/productMatrix';
import { POSTS } from './blog-posts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function XJewelERP() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyLogosSection />
      <BusinessModelSection />
      <ComparisonSection />
      <FeaturesSection />
      <AccreditationSection />
      <RelatedArticlesSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-6 md:py-8"
      style={{ minHeight: 'calc(100svh - var(--site-header-height))' }}
    >
      {/* Background grid from older design */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/herobg.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1120px] mx-auto">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center md:text-left">
            <span className="inline-block mb-5 px-4 py-1.5 text-[13px] font-medium text-[#0C69B6] border border-[#0C69B6]/30 rounded-full bg-white/80">
              JewelBiz ERP
            </span>

            <h1 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
              <span className="block text-[30px] md:text-[34px] lg:text-[38px]">
                Jewellery ERP For Retail, Wholesale,
              </span>
              <span className="block text-[30px] md:text-[34px] lg:text-[38px] italic text-[#FF641F]">
                And Karigar Operations.
              </span>
            </h1>

            <p className="mt-5 text-[14px] md:text-[15px] leading-[1.6] text-[#0C69B6] max-w-[500px] mx-auto md:mx-0">
              JewelBiz is purpose-built for Indian jewellers — fine weight, purity, Jangad, manufacturing, GST e-invoicing, and multi-branch stock on a single connected system. Not a generic ERP with jewellery labels.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-[182px] h-[50px] inline-flex items-center justify-center rounded-[10px] bg-[#FF641F] text-white text-[14px] font-semibold hover:bg-[#E55A18] transition-colors"
              >
                Get 14 Days Free Trial
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-[160px] h-[50px] inline-flex items-center justify-center rounded-[10px] bg-white text-[#0C69B6] border border-gray-200 text-[14px] font-semibold hover:bg-gray-50 transition-colors"
              >
                Browse all features
              </Link>
            </div>
          </div>

          {/* Right — dashboard */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[85%] h-[85%] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-40" />
            <img
              src="/Dashboard.png"
              alt="JewelBiz Dashboard"
              className="relative w-full max-w-[580px] h-auto max-h-[56vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyLogosSection() {
  const logos = [
    '/hissaria gems private limited.jpeg',
    '/Mahalaxmi.png',
    '/BTR.png',
    '/b l hissaria jewellers.png',
    '/Bhagwati Ayurveda & Panchakarma Research Centre.jpeg',
    '/Parmeshwari Newborn & Children Hospital - Abohar.jpeg',
    '/Skyy High Placement.jpeg',
    '/Shiv General Store.jpeg',
  ];

  return (
    <div className="relative z-20 py-12 bg-white w-full overflow-hidden">
      <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
        Trusted by 17,000+ founders & business owners
      </p>
      <div className="overflow-hidden">
        <div className="company-marquee gap-12 items-center">
          {logos.map((src, idx) => (
            <div key={`jewel-logo-a-${idx}`} className="flex items-center justify-center shrink-0 p-3 w-40 h-20">
              <img src={src} alt="Client logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
          ))}
          {logos.map((src, idx) => (
            <div key={`jewel-logo-b-${idx}`} className="flex items-center justify-center shrink-0 p-3 w-40 h-20">
              <img src={src} alt="Client logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .company-marquee {
          display: inline-flex;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

function ComparisonSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1020px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
            <span className="block text-[34px] md:text-[40px] lg:text-[44px]">
              Generic ERP versus
            </span>
            <span className="block text-[34px] md:text-[40px] lg:text-[44px] italic text-[#FF641F]">
              JewelBiz ERP
            </span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.6] text-slate-500 max-w-[680px] mx-auto">
            Off-the-shelf ERPs record invoices. JewelBiz is built for purity, karigar accountability, Jangad, and GST that splits the way jewellery billing actually works.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl overflow-hidden border border-gray-200">

          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr_1.35fr] border-b border-gray-200">
            <div className="bg-gray-50 h-[52px] px-6 hidden md:flex items-center border-r border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">CAPABILITY</span>
            </div>
            <div className="bg-gray-50 h-[52px] px-6 flex items-center border-r border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">Generic ERP</span>
            </div>
            <div className="bg-[#000000] h-[52px] px-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white">JewelBiz ERP</span>
            </div>
          </div>

          {/* Rows */}
          {[
            ["Stock unit of truth", "SKU / quantity thinking", "Gram, purity, fine weight per piece"],
            ["Karigar & WIP", "Not designed for artisan job work", "Issue, receipt, wastage, job costing"],
            ["Goods on approval / Jangad", "Manual notes or spreadsheets", "Tracked issuance, aging, return match"],
            ["Old gold exchange", "Forced into generic purchase/sale", "Purity-aware exchange in one bill"],
            ["GST on jewellery bills", "Single-line tax after the fact", "Metal + making + stone split at billing"],
            ["E-invoicing", "Often a separate step or add-on", "Signed IRN & QR at point of sale"],
            ["Peak-day reliability", "Cloud-only risk on busy days", "Offline-capable billing & stock"],
            ["Trade language", "Generic retail templates", "Built for Indian jewellery workflows"],
          ].map(([cap, generic, jewel], i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr_1.35fr] border-b border-gray-100 last:border-b-0">
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
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 text-blue-600">
                  <Check size={10} strokeWidth={3} />
                </span>
                <span>{jewel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 max-w-[505px] mx-auto">
          <div className="bg-[#F7F7F7] rounded-xl px-5 py-3.5 text-center border border-gray-200">
            <p className="text-[12px] text-slate-600 leading-relaxed">
              If your current system still needs Excel for fine weight, karigar balances, or GST splits — that gap is exactly what JewelBiz closes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [active, setActive] = useState(0);

  const module = modules[active];
  const Icon = module.icon;

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-serif font-normal italic text-[#FF641F] text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em]">
            listed clearly.
          </h2>
          <p className="mt-4 text-slate-500 text-[15px] leading-relaxed">
            Capabilities drawn from the JewelBiz product matrix — organised by how jewellery businesses actually run. Ask for a demo to see which modules fit your showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <div className="flex flex-col gap-1">
            {modules.map((m, i) => {
              const isActive = i === active;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  className={`group w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition ${
                    isActive
                      ? 'bg-[#FF641F] text-white shadow-md'
                      : 'text-slate-700 hover:bg-gray-50'
                  }`}
                >
                  <span className={`text-xs font-medium ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                    {m.number}
                  </span>
                  <span className="text-sm font-semibold">{m.title}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </div>

          <div key={module.id} className="transition-all duration-300">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md mb-4">
                <Icon className="w-4 h-4 text-[#FF641F]" />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-800">{module.title}</span>
              </div>
              <h3 className="text-[24px] md:text-[28px] font-semibold text-slate-900 leading-snug">{module.description}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {module.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition"
                >
                  <h4 className="text-sm font-semibold text-slate-900">{feature.title}</h4>
                  <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




function BusinessModelSection() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block mb-6 px-4 py-2 bg-blue-50 text-slate-800 text-[13px] font-medium tracking-wide rounded-full">
            Built for the trade
          </span>
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
            <span className="block text-[32px] md:text-[38px] lg:text-[42px]">
              From metal purchase to signed
            </span>
            <span className="block text-[32px] md:text-[38px] lg:text-[42px] italic text-[#FF641F]">
              GST invoice — nothing entered twice.
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.7] text-slate-500 max-w-[80ch] mx-auto">
            Retail counter, wholesale desk, and karigar workshop share one stock and one ledger. Approvals, old gold, manufacturing, and compliance stay in the same language your team already uses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GaugeCard
            value={95}
            label="Retail POS"
            description="Barcode billing, multi-payment modes, UPI QR, salesperson tracking, and old gold exchange at the counter."
          />
          <GaugeCard
            value={97}
            label="Wholesale & approval"
            description="Party rates, credit sales, Jangad / goods on approval, rate settlement, and delivery challans."
          />
          <GaugeCard
            value={99}
            label="Manufacturing FMS"
            description="Karigar issue–receipt, WIP, job costing, wastage visibility, and process-wise production tracking."
          />
        </div>
      </div>
    </section>
  );
}

function GaugeCard({ value, label, description }: { value: number; label: string; description: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;
    const st = ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: value,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => setDisplayValue(Math.round(obj.v)),
        });
      },
    });
    return () => st.kill();
  }, [value]);

  const total = 40;
  const activeCount = Math.round((displayValue / 100) * total);

  const segments = [];
  for (let i = 0; i < total; i++) {
    const angle = -180 + (i / (total - 1)) * 180;
    const rad = (angle * Math.PI) / 180;
    const x1 = 100 + 58 * Math.cos(rad);
    const y1 = 85 + 58 * Math.sin(rad);
    const x2 = 100 + 86 * Math.cos(rad);
    const y2 = 85 + 86 * Math.sin(rad);
    const isActive = i < activeCount;
    segments.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? '#FF641F' : '#FFE8DE'}
        strokeWidth="3"
        strokeLinecap="round"
      />
    );
  }

  return (
    <div ref={cardRef} className="flex flex-col items-center">
      <div className="w-[260px] h-[275px] bg-[#9FC5D4] rounded-[24px] py-[45px] px-[10px]">
        <div className="bg-white rounded-[20px] w-[240px] h-[185px] flex flex-col items-center pt-4">
          <div className="relative w-44 h-36">
            <svg viewBox="0 0 200 130" className="w-full h-full">
              {segments}
            </svg>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="text-3xl font-semibold text-slate-900">
                {displayValue}
                <span className="text-xl text-slate-900">%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-7 text-base font-semibold text-slate-900 text-left w-[260px]">{label}</h3>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed text-left w-[260px]">
        {description}
      </p>
    </div>
  );
}

function AccreditationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const directionRef = useRef(1);

  const complianceItems = [
    {
      title: 'GST & e-Invoicing (IRP / IRN)',
      content: 'Mandatory for businesses above the notified turnover threshold. JewelBiz auto generates HSN mapped, GST split invoices with signed IRN and QR at the point of sale.'
    },
    {
      title: 'BIS hallmarking & HUID readiness',
      content: 'Hallmarking and HUID tracking are core to jewellery compliance. JewelBiz links HUID to stock, tags and invoices for full audit traceability.'
    },
    {
      title: 'E-Way Bill aligned dispatch',
      content: 'Interstate and threshold based goods movement needs controlled challans and tax documents. Dispatch flows stay aligned with GST practice throughout.'
    },
    {
      title: 'Enterprise security architecture',
      content: 'Built on Java and Oracle with SHA-512 hashing, role based access and full audit trails. On-premise deployment keeps your data inside your own premises.'
    },
    {
      title: 'PCI-oriented payment controls',
      content: 'Card and digital collection paths follow payment security discipline. Settlement workflows and access controls protect high value jewellery transactions.'
    },
    {
      title: 'ABDM & NABH-ready healthcare pathways',
      content: 'CuraBiz is built for hospital operations with ABDM aligned integration and NABH oriented reporting. Healthcare clients get a purpose built system, not a generic retail ERP.'
    },
    {
      title: 'Financial audit freeze & logs',
      content: 'Period locks, voucher audit trails and day end controls support CA reviews and GST assessments. No reconstructing history from spreadsheets.'
    },
    {
      title: 'TDS / TCS & reverse charge',
      content: 'Jewellery and trade purchases often trigger TDS, TCS and reverse charge rules. Platform masters and billing logic apply these correctly at transaction time.'
    },
    {
      title: 'Data residency & deployment choice',
      content: 'Choose on premise, cloud or hybrid deployment. Accreditation conversations increasingly start with where your data lives, so SlateBiz lets you decide.'
    }
  ];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', onChange);
    } else {
      mq.addListener(onChange);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', onChange);
      } else {
        mq.removeListener(onChange);
      }
    };
  }, []);

  useEffect(() => {
    if (reduced) {
      const ul = ulRef.current;
      if (ul) setLineHeight(ul.clientHeight);
      return;
    }
    const li = liRefs.current[activeIndex];
    if (!li) return;
    setLineHeight(li.offsetTop + li.clientHeight);
  }, [activeIndex, reduced]);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.25 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || !inView) return;
    const id = setInterval(() => {
      if (hovered) return;
      setActiveIndex((prev) => {
        const next = prev + directionRef.current;
        if (next >= complianceItems.length - 1) {
          directionRef.current = -1;
          return complianceItems.length - 1;
        }
        if (next <= 0) {
          directionRef.current = 1;
          return 0;
        }
        return next;
      });
    }, 1800);
    return () => clearInterval(id);
  }, [inView, reduced, hovered, complianceItems.length]);

  const handleEnter = (i: number) => {
    setActiveIndex(i);
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#EAECEF] pt-16 pb-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        <span className="inline-block mb-6 px-3 py-1.5 bg-white text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full">
          Accreditation
        </span>
        <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
          <span className="block text-[38px] md:text-[46px] lg:text-[54px]">
            Track jewellery orders
          </span>
          <span className="block text-[38px] md:text-[46px] lg:text-[54px] italic text-[#FF641F]">
            process by process.
          </span>
        </h2>
        <p className="mt-6 text-[14px] leading-[1.7] text-[#4B5563] max-w-[780px]">
          From sales order to delivery challan — production visibility for owners who cannot afford silent wastage.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-slate-300/40" />
            <div
              className="absolute top-0 left-0 w-[2px] bg-[#0C69B6] transition-[height] duration-1000 ease-out"
              style={{ height: lineHeight }}
            />
            <ul
              ref={ulRef}
              className="space-y-2 pl-6"
              onMouseLeave={handleLeave}
            >
              {complianceItems.map((item, i) => {
                const isActive = reduced || i === activeIndex;
                return (
                  <li
                    key={item.title}
                    ref={(el) => { liRefs.current[i] = el; }}
                    className="py-2.5 cursor-pointer"
                    onMouseEnter={() => handleEnter(i)}
                  >
                    <h3 className="text-[15px] font-semibold text-black">
                      {item.title}
                    </h3>
                    <div
                      className={`mt-2 text-[13px] leading-[1.5] text-black overflow-hidden transition-all duration-1000 ease-out ${
                        isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.content}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full max-w-[760px] h-auto object-contain rounded-[12px]"
              aria-label="Java and Oracle compliance stack"
            >
              <source src="/java slatebiz.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedArticlesSection() {
  const articles = POSTS.slice(0, 3);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block mb-6 px-3 py-1.5 bg-gray-100 text-gray-700 text-[11px] font-medium tracking-wide rounded-full">
          Related Articles
        </span>
        <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
          <span className="block text-[38px] md:text-[52px] lg:text-[62px]">
            From metal purchase to signed
          </span>
          <span className="block text-[38px] md:text-[52px] lg:text-[62px] italic text-[#FF641F]">
            GST invoice — nothing entered twice.
          </span>
        </h2>
        <p className="mt-6 text-[17px] leading-[1.7] text-slate-600 max-w-3xl mx-auto">
          Retail counter, wholesale desk, and karigar workshop share one stock and one ledger. Approvals, old gold, manufacturing, and compliance stay in the same language your team already uses.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blogs/${article.brand}/${article.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition hover:shadow-md"
            >
              <div className="overflow-hidden rounded-2xl m-3 border border-gray-100">
                <img src={article.heroImage} alt={article.title} className="w-full h-auto block" />
              </div>
              <div className="flex flex-col flex-1 p-5 pt-0">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  {article.date} | {article.readTime} | {article.brand.toUpperCase()}
                </p>
                <h2 className="text-lg font-bold text-gray-900 uppercase tracking-tight leading-snug">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                  {article.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                    Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat min-h-[620px] md:min-h-[720px] flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
          <span className="block text-[38px] md:text-[52px] lg:text-[62px]">
            Your business runs on precision.
          </span>
          <span className="block text-[38px] md:text-[52px] lg:text-[62px] italic text-[#FF641F]">
            Your software should too.
          </span>
        </h2>

        <p className="mt-6 text-[17px] leading-[1.7] text-slate-600 max-w-3xl mx-auto">
          Book a demo today. We configure it on your stock, your rates, and your industry — so you see exactly what changes before you commit.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/contact/#contact-form"
            className="w-full sm:w-[182px] h-[50px] inline-flex items-center justify-center rounded-[10px] bg-[#FF641F] text-white text-[14px] font-semibold hover:bg-[#E55A18] transition-colors"
          >
            Get 14 Days Free Trial
          </Link>
          <Link
            to="/contact/#contact-form"
            className="w-full sm:w-[160px] h-[50px] inline-flex items-center justify-center rounded-[10px] bg-white border border-slate-900 text-slate-900 text-[14px] font-semibold hover:bg-slate-50 transition-colors"
          >
            Book A Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
