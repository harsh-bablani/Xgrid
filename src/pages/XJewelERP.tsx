import { Check, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { modules } from '../data/productMatrix';
import ProductRelatedArticles from '../components/ProductRelatedArticles';
import { Link } from 'react-router-dom';

export default function XJewelERP() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyLogosSection />
      <BusinessModelSectionWithImages />
      <ComparisonSection />
      <FeaturesSection />
      <AccreditationSection />
      <ProductRelatedArticles brand="jewelbiz" />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#F4F6F8]"
      style={{ minHeight: 'calc(100svh - var(--site-header-height))' }}
    >
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/jewelbiz-hero-bg-1920.webp"
          type="image/webp"
        />
        <img
          src="/jewelbiz-hero-bg.webp"
          alt=""
          width={2560}
          height={1100}
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[82%_center] xl:object-[78%_center] 2xl:object-right"
          aria-hidden
        />
      </picture>

      {/* Keep copy readable on every laptop width — desk props sit mid-frame */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.72) 42%, rgba(255,255,255,0.28) 58%, rgba(255,255,255,0) 72%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] xl:hidden"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 38%, rgba(255,255,255,0.55) 58%, rgba(255,255,255,0.1) 78%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="w-full max-w-[460px] rounded-2xl bg-white/75 p-5 shadow-[0_8px_40px_rgba(15,25,35,0.04)] backdrop-blur-md sm:p-6 lg:max-w-[480px] lg:bg-white/55 xl:max-w-[500px] xl:bg-transparent xl:p-0 xl:shadow-none xl:backdrop-blur-none text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-[#0C69B6]/40 bg-white/95 px-4 py-1.5 text-[13px] font-medium text-[#0C69B6] shadow-sm">
            JewelBiz ERP
          </span>

          <h1 className="mt-5 font-serif font-normal leading-[1.12] tracking-[-0.02em] text-slate-900">
            <span className="block text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[38px]">
              Jewellery ERP For Retail, Wholesale,
            </span>
            <span className="mt-1 block text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[38px] italic text-[#FF641F]">
              And Karigar Operations.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[460px] text-[14px] leading-[1.65] text-[#0C69B6] md:text-[15px] lg:mx-0">
            JewelBiz is purpose-built for Indian jewellers — fine weight, purity, Jangad,
            manufacturing, GST e-invoicing, and multi-branch stock on a single connected system.
            Not a generic ERP with jewellery labels.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start">
            <Link
              to="/contact/"
              className="inline-flex h-[50px] w-full items-center justify-center rounded-[10px] bg-[#FF641F] text-[14px] font-semibold text-white transition hover:bg-[#E55A18] sm:w-[182px]"
            >
              Get 14 Days Free Trial
            </Link>
            <a
              href="#features"
              className="inline-flex h-[50px] w-full items-center justify-center rounded-[10px] border border-slate-800 bg-white text-[14px] font-semibold text-[#0C69B6] transition hover:bg-slate-50 sm:w-[160px]"
            >
              Browse all features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyLogosSection() {
  const logos = [
    '/hissaria gems private limited.webp',
    '/Mahalaxmi.webp',
    '/BTR.webp',
    '/b l hissaria jewellers.webp',
    '/Bhagwati Ayurveda & Panchakarma Research Centre.webp',
    '/Parmeshwari Newborn & Children Hospital - Abohar.webp',
    '/Skyy High Placement.webp',
    '/Shiv General Store.webp',
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
              <img src={src} alt="Client logo" loading="lazy" decoding="async" width={160} height={80} className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
          ))}
          {logos.map((src, idx) => (
            <div key={`jewel-logo-b-${idx}`} className="flex items-center justify-center shrink-0 p-3 w-40 h-20">
              <img src={src} alt="Client logo" loading="lazy" decoding="async" width={160} height={80} className="max-w-full max-h-full object-contain mix-blend-multiply" />
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
            <div className="bg-[#111111] h-[52px] px-6 hidden md:flex items-center border-r border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Capability</span>
            </div>
            <div className="bg-[#111111] h-[52px] px-6 flex items-center border-r border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Generic ERP</span>
            </div>
            <div className="bg-[#FF641F] h-[52px] px-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
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
    <section id="features" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-header">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-3">
            Complete feature map
          </p>
          <h2 className="font-serif font-normal text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-slate-900">
            <span className="block">Every JewelBiz module,</span>
            <span className="block italic text-[#FF641F]">listed clearly.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-[15px] leading-relaxed">
            Capabilities drawn from the JewelBiz product matrix — organised by how jewellery businesses actually run. Ask for a demo to see which modules fit your showroom.
          </p>
        </div>

        <div className="lg:hidden -mx-4 px-4 mb-8 overflow-x-auto">
          <div className="flex gap-2 w-max pb-1">
            {modules.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 min-h-[40px] px-4 py-2 rounded-full text-sm font-semibold transition ${
                  i === active ? 'bg-[#FF641F] text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <div className="hidden lg:flex flex-col gap-1">
            {modules.map((m, i) => {
              const isActive = i === active;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition min-h-[48px] ${
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
            <div className="mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md mb-4">
                <Icon className="w-4 h-4 text-[#FF641F]" />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-800">{module.title}</span>
              </div>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-slate-900 leading-snug">{module.description}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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




function BusinessModelSectionWithImages() {
  const cards = [
    {
      image: '/retail jewelbiz.webp',
      alt: 'Retail POS',
      title: 'Retail POS',
      description:
        'Barcode billing, multi-payment modes, UPI QR, salesperson tracking, and old gold exchange at the counter.',
      href: '#features',
    },
    {
      image: '/wholesale jewelbiz.webp',
      alt: 'Wholesale & approval',
      title: 'Wholesale & approval',
      description:
        'Party rates, credit sales, Jangad / goods on approval, rate settlement, and delivery challans.',
      href: '#features',
    },
    {
      image: '/manufacturing jewelbiz.webp',
      alt: 'Manufacturing',
      title: 'Manufacturing',
      description:
        'Karigar issue–receipt, WIP, job costing, wastage visibility, and process-wise production tracking.',
      href: '#features',
    },
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-14 text-center sm:mb-16">
          <span className="mb-6 inline-block rounded-full border border-slate-200 bg-[#F3F4F6] px-4 py-1.5 text-[13px] font-medium tracking-wide text-slate-700">
            Built for the trade
          </span>
          <h2 className="font-serif font-normal leading-[1.08] tracking-[-0.02em] text-slate-900">
            <span className="block text-[32px] md:text-[38px] lg:text-[42px]">
              From metal purchase to signed
            </span>
            <span className="block text-[32px] md:text-[38px] lg:text-[42px] italic text-[#FF641F]">
              GST invoice — nothing entered twice.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[70ch] text-[15px] leading-[1.7] text-slate-500">
            Retail counter, wholesale desk, and karigar workshop share one stock and one ledger.
            Approvals, old gold, manufacturing, and compliance stay in the same language your team
            already uses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <div className="overflow-hidden rounded-[16px] bg-slate-100 shadow-[0_8px_24px_rgba(15,25,35,0.06)]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-auto w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-5 text-[16px] font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-500">
                {card.description}
              </p>
              <a
                href={card.href}
                className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-[#FF641F] transition hover:text-[#E55A18]"
              >
                Read More
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccreditationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const complianceItems = [
    {
      title: 'Sales Order',
      content: 'Manage customer orders efficiently with complete product details, pricing, quantities, delivery timelines, and real-time order status tracking.'
    },
    {
      title: 'RM Stock In & Out',
      content: 'Track every raw material movement with accurate inward and outward records, ensuring proper material usage and complete transaction visibility.'
    },
    {
      title: 'RM Inventory',
      content: 'Maintain a centralized view of raw material inventory, including available quantities, consumption, reorder levels, and current stock status.'
    },
    {
      title: 'Job Card',
      content: 'Create and manage detailed job cards to track jewellery production, assigned work, required materials, processes, and job completion status.'
    },
    {
      title: 'Finished Goods Stock In & Out',
      content: 'Record finished jewellery movement accurately from production to storage and dispatch, maintaining complete visibility of finished goods transactions.'
    },
    {
      title: 'Stock In & Out',
      content: 'Monitor all inventory movements across departments with organized inward and outward entries, ensuring accurate stock records and accountability.'
    },
    {
      title: 'Production Planning',
      content: 'Plan production activities efficiently by managing job requirements, material availability, production schedules, workloads, and expected completion timelines.'
    },
    {
      title: 'Purchase Order',
      content: 'Create and manage purchase orders with supplier details, material requirements, quantities, pricing, delivery schedules, and complete purchase tracking.'
    },
    {
      title: 'Quality Management',
      content: 'Track quality inspections and approvals throughout production to ensure every jewellery piece meets defined quality standards before dispatch.'
    },
    {
      title: 'Reports & Analytics',
      content: 'Access comprehensive reports on sales, inventory, production, purchases, materials, and operations to support faster and smarter business decisions.'
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

  const handleClick = (i: number) => {
    setActiveIndex(i === activeIndex ? -1 : i);
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

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-slate-300/40" />
            <div
              className="absolute top-0 left-0 w-[2px] bg-[#0C69B6] transition-[height] duration-1000 ease-out"
              style={{ height: lineHeight }}
            />
            <ul
              ref={ulRef}
              className="space-y-2 pl-6"
            >
              {complianceItems.map((item, i) => {
                const isActive = reduced || i === activeIndex;
                return (
                  <li
                    key={item.title}
                    ref={(el) => { liRefs.current[i] = el; }}
                    className="py-2.5 cursor-pointer"
                    onClick={() => handleClick(i)}
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

          <div className="relative lg:sticky lg:top-[calc(var(--site-header-height)+1.5rem)]">
            <div className="pointer-events-none absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-[#0C69B6]/10 via-transparent to-[#FF641F]/10 blur-2xl" />
            <div
              className="relative mx-auto max-w-[640px]"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse 88% 82% at 50% 45%, #000 52%, transparent 100%)',
                maskImage:
                  'radial-gradient(ellipse 88% 82% at 50% 45%, #000 52%, transparent 100%)',
              }}
            >
              <img
                src="/acc jewelbiz.webp"
                alt="JewelBiz order and production tracking"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full scale-[1.04] object-contain drop-shadow-[0_24px_50px_rgba(15,25,35,0.12)]"
              />
            </div>
            {/* Soft fade into section bg at edges */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 65% at 50% 45%, transparent 40%, #EAECEF 78%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[url('/herobg.webp')] bg-cover bg-center bg-no-repeat min-h-[620px] md:min-h-[720px] flex items-center justify-center"
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
