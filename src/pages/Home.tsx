import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, ShieldCheck, BarChart3, Users, Link as LinkIcon, Settings, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <CompanyLogosSection />
      <WhyWeExistSection />
      <ProductsSection />
      <FoundationSection />
      <TechnicalSection />
      <ClientTestimonialsSection />
      <OutcomeSection />
      <LaunchStepsSection />
      <AboutCompanySection />
      <ConnectSection />
      <FeatureShowcaseSection />
      <GrowthSection />
      <FAQSection />
    </div>
  );
}


function CountUp({ end, duration = 2000, suffix = '', decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const ease = 1 - Math.pow(1 - percentage, 4);

      setCount(end * ease);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat min-h-[540px] md:min-h-[600px] flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="inline-block mb-7 px-4 py-2 bg-blue-50 text-slate-800 text-[13px] font-medium tracking-wide rounded-full">
          ERP SOFTWARE - PAN INDIA
        </span>

        <h1 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
          <span className="block text-[38px] md:text-[52px] lg:text-[62px]">
            The technology large enterprises run on.
          </span>
          <span className="block text-[38px] md:text-[52px] lg:text-[62px] italic text-[#FF641F]">
            Built for the businesses that power India.
          </span>
        </h1>

        <p className="mt-6 text-[17px] leading-[1.7] text-slate-600 max-w-3xl mx-auto">
          SlateBiz builds purpose-built ERP software for jewellers, hospitals, and specialist retailers — the
          industries that form the backbone of India's economy. Robust, secure, and engineered on
          enterprise-grade technology.
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
    <div className="relative z-20 py-12 bg-slate-100 w-full overflow-hidden">
      <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
        Trusted by 17,000+ founders & business owners
      </p>
      <div className="overflow-hidden">
        <div className="company-marquee gap-12 items-center">
          {logos.map((src, idx) => (
            <div key={`logo-a-${idx}`} className="flex items-center justify-center shrink-0 p-3 w-40 h-20">
              <img src={src} alt="Client logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
          ))}
          {logos.map((src, idx) => (
            <div key={`logo-b-${idx}`} className="flex items-center justify-center shrink-0 p-3 w-40 h-20">
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

function WhyWeExistSection() {
  return (
    <section className="w-full bg-[#F7F7F5] pt-14 pb-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[465px_1fr] gap-10 items-start">
          <img
            src="/Exist.png"
            alt="Why we exist"
            className="w-full h-auto md:w-[465px] md:h-[550px] object-cover rounded-xl"
          />

          <div className="pt-1 w-full max-w-[560px]">
            <span className="block text-[#FF641F] text-[11px] font-semibold tracking-[1px] uppercase font-sans mb-10">
              Why We Exist
            </span>

            <h2 className="font-sans font-medium leading-[1.1] tracking-[-0.01em] text-[#171717]">
              <span className="block text-[31px] whitespace-normal md:whitespace-nowrap">
                The small business is the Indian economy.
              </span>
              <span className="block text-[30px] font-medium italic text-[#FF641F] whitespace-normal md:whitespace-nowrap">
                It deserves the same tools the enterprise has.
              </span>
            </h2>

            <p className="mt-8 text-[14px] leading-[1.6] text-[#4B5563] max-w-[550px]">
              Large retail chains, hospital groups, and jewellery conglomerates run on systems worth crores. The independent jeweller, the clinic, the specialty retailer compete with those players every day. SlateBiz gives them the same backbone.
            </p>

            <div className="mt-12 flex flex-col gap-5">
              <div className="relative overflow-hidden bg-[#F5F6F7] rounded-xl py-5 px-6 pl-[26px]">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#FF641F]" />
                <span className="block font-sans text-[11px] font-normal tracking-[0.15em] uppercase text-[#0C69B6] mb-3">
                  Vision
                </span>
                <h3 className="text-[14px] font-semibold leading-[1.3] text-[#171717] mb-2">
                  Put enterprise technology in every Indian business's hands
                </h3>
                <p className="text-[12px] leading-[1.4] text-[#4B5563]">
                  We build software that is purpose-built — not a generic platform with a skin on top. JewelBiz cannot be run as a hospital system. CuraBiz cannot manage a karigar workshop. That is not a limitation. That is the point.
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#F5F6F7] rounded-xl py-5 px-6 pl-[26px]">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#FF641F]" />
                <span className="block font-sans text-[11px] font-normal tracking-[0.15em] uppercase text-[#0C69B6] mb-3">
                  Mission
                </span>
                <h3 className="text-[14px] font-semibold leading-[1.3] text-[#171717] mb-2">
                  Put enterprise technology in every Indian business's hands
                </h3>
                <p className="text-[12px] leading-[1.4] text-[#4B5563]">
                  We build software that is purpose-built — not a generic platform with a skin on top. JewelBiz cannot be run as a hospital system. CuraBiz cannot manage a karigar workshop. That is not a limitation. That is the point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="w-full bg-[#EBF0F1] pt-14 pb-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block mb-5 px-3 py-1.5 bg-white text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full">
            Why we exist
          </span>
          <h2 className="font-sans font-medium leading-[1.1] tracking-[-0.01em] text-[#171717]">
            <span className="block text-[31px] whitespace-normal md:whitespace-nowrap">
              Three ERPs.
            </span>
            <span className="block text-[29px] font-medium italic text-[#FF641F] whitespace-normal md:whitespace-nowrap">
              One standard of engineering.
            </span>
          </h2>
          <p className="mt-5 text-[12px] leading-[1.6] text-[#4B5563] max-w-2xl mx-auto">
            Each product is built from the ground up for its industry — not a generic ERP retrofitted with a template.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* JewelBiz */}
          <div className="bg-white rounded-[10px] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-[22px] font-bold text-[#171717]">JewelBiz ERP</h3>
                  <span className="bg-[#FF641F] text-white text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded">
                    Primary Product
                  </span>
                </div>
                <p className="text-[#0C69B6] italic text-[14px] mb-3">
                  “Your karigar, your stock, your GST. One system. Nothing missed.”
                </p>
                <p className="text-[#4B5563] text-[13px] leading-[1.5] mb-5">
                  One system for the retail counter, the wholesale desk, and the karigar workshop. Sales, stock, manufacturing, accounts, and compliance on a single ledger — from metal purchase to a signed GST invoice.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['HUID and BIS compliance', 'Karigar WIP tracking', 'MCX live gold rates', 'GSTR-1 and 3B auto-ready', 'Old gold exchange', 'Ohm / pawn register', 'Multi-branch real-time sync', 'On-premise and cloud'].map((tag) => (
                    <span key={tag} className="bg-[#FFF7ED] text-[#9A3412] text-[11px] font-medium px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/jewelbiz/" className="inline-flex items-center justify-center h-[30px] px-4 rounded-md bg-[#FF641F] text-white text-[13px] font-medium hover:bg-[#E55A18] transition-colors">
                  Explore JewelBiz
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/JM.png"
                  alt="JewelBiz ERP"
                  className="w-full h-[380px] md:h-[460px] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* CuraBiz */}
          <div className="bg-white rounded-[10px] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-1">
                <img
                  src="/HM.png"
                alt="CuraBiz HIMS"
                className="w-full h-[380px] md:h-[460px] object-contain rounded-2xl"
              />
              </div>
              <div className="order-2">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-[22px] font-bold text-[#171717]">CuraBiz HIMS</h3>
                  <span className="bg-[#FF641F] text-white text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded">
                    Primary Product
                  </span>
                </div>
                <p className="text-[#0C69B6] italic text-[14px] mb-3">
                  “Every patient. Every prescription. Every rupee. One system.”
                </p>
                <p className="text-[#4B5563] text-[13px] leading-[1.5] mb-5">
                  Full hospital information management with integrated pharmacy, OPD, IPD, e-prescriptions, and patient records. Built for clinics and hospitals — including Ayurveda practices with Panchkarma scheduling and WhatsApp patient communication.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['OPD and IPD', 'Integrated pharmacy', 'e-Prescription', 'Panchkarma scheduler', 'ABDM readiness', 'WhatsApp API'].map((tag) => (
                    <span key={tag} className="bg-[#DBEAFE] text-[#1E40AF] text-[11px] font-medium px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/curabiz/" className="inline-flex items-center justify-center h-[30px] px-4 rounded-md bg-[#FF641F] text-white text-[13px] font-medium hover:bg-[#E55A18] transition-colors">
                  Explore CuraBiz
                </Link>
              </div>
            </div>
          </div>

          {/* RetailBiz */}
          <div className="bg-white rounded-[10px] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-[22px] font-bold text-[#171717]">RetailBiz ERP</h3>
                </div>
                <p className="text-[#0C69B6] italic text-[14px] mb-3">
                  “Built for your retail. Not adapted from someone else's.”
                </p>
                <p className="text-[#4B5563] text-[13px] leading-[1.5] mb-5">
                  Specialized ERP for retail verticals where generic software cannot be forced to fit. Built around your industry rules, compliance needs, and operational workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Specialized vertical ERP', 'GST-compliant billing', 'Multi-branch support', 'Industry-specific workflows'].map((tag) => (
                    <span key={tag} className="bg-[#F1F5F9] text-[#334155] text-[11px] font-medium px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/retailbiz/" className="inline-flex items-center justify-center h-[30px] px-4 rounded-md bg-[#FF641F] text-white text-[13px] font-medium hover:bg-[#E55A18] transition-colors">
                  Explore RetailBiz ERP
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/RM%20(2).png"
                  alt="RetailBiz ERP"
                  className="w-full h-[380px] md:h-[460px] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundationSection() {
  const cards = [
    { image: '/streamline.png', title: 'Industry-specific ERP', desc: 'Purpose-built software for jewellery, healthcare, and specialist retail.' },
    { image: '/streamline.png', title: 'Data migration', desc: 'Opening stock, party ledgers, and historical records migrated before go-live.' },
    { image: '/empowering.png', title: 'On-site training', desc: 'Counter staff, accountant, and manager trained by role — included in every deployment.' },
    { image: '/always.png', title: 'Dedicated support', desc: 'Named account support over phone, email, and WhatsApp when operations cannot wait.' },
    { image: '/stay.png', title: 'Compliance updates', desc: 'GST, e-invoice, and HUID regulatory changes tracked and pushed into your system.' },
    { image: '/built.png', title: 'Industry-specific ERP', desc: 'Purpose-built software for jewellery, healthcare, and specialist retail.' },
  ];

  return (
    <section className="w-full bg-white pt-16 pb-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block mb-5 px-3 py-1.5 bg-white text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full">
            Technical foundation
          </span>
          <h2 className="font-sans font-medium leading-[1.1] tracking-[-0.01em] text-[#171717]">
            <span className="block text-[31px] whitespace-normal md:whitespace-nowrap">
              Built on the same stack
            </span>
            <span className="block text-[29px] font-medium italic text-[#FF641F] whitespace-normal md:whitespace-nowrap">
              India&apos;s banks use
            </span>
          </h2>
          <p className="mt-5 text-[12px] leading-[1.6] text-[#4B5563] max-w-2xl mx-auto">
            Buying a licence is not the same as going live successfully. Every SlateBiz deployment includes end-to-end support from setup to steady-state operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div key={i}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[280px] md:h-[340px] object-contain rounded-2xl"
              />
              <h3 className="mt-5 text-[14px] font-bold text-[#171717]">{card.title}</h3>
              <p className="mt-2 text-[12px] leading-[1.5] text-[#4B5563]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalSection() {
  return (
    <section className="w-full bg-[#F7F7F5] pt-16 pb-10">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block mb-5 px-3 py-1.5 bg-[#F1F5F9] text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full">
            Technical foundation
          </span>
          <h2 className="font-sans font-medium leading-[1.1] tracking-[-0.01em] text-[#171717]">
            <span className="block text-[31px] whitespace-normal md:whitespace-nowrap">
              Built on the same stack
            </span>
            <span className="block text-[29px] font-medium italic text-[#FF641F] whitespace-normal md:whitespace-nowrap">
              India&apos;s banks use
            </span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-[16px] font-bold text-[#171717] mb-3">
                Bank-grade security architecture
              </h3>
              <p className="text-[12px] leading-[1.5] text-[#4B5563]">
                Java and Oracle with SHA-256 encryption. On-premise keeps your data on your premises.
              </p>
            </div>
            <div>
              <img
                src="/technical.png"
                alt="Bank-grade security"
                className="w-full h-[260px] md:h-[320px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#171717] mb-2">
              Full offline capability
            </h3>
            <p className="text-[12px] leading-[1.5] text-[#4B5563]">
              Billing, POS, stock, and ledger operations run without internet on peak days.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#171717] mb-2">
              Government-ready compliance
            </h3>
            <p className="text-[12px] leading-[1.5] text-[#4B5563]">
              GST, HUID, e-invoice and medicines are recorded with digital IRN and QR at the point of sale.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#171717] mb-2">
              Mobile and WhatsApp API
            </h3>
            <p className="text-[12px] leading-[1.5] text-[#4B5563]">
              Member transactions and confirmations with customers or patients from the workflows you already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientTestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      text: "From procurement to sales, everything is streamlined. Highly recommended for any growing jewellery business.",
      name: "Kalpit Hissaria",
      brand: "Hissaria Art Palace Pvt Ltd"
    },
    {
      text: "The reporting features give us deep insights into our business performance. A must-have tool for modern jewellers.",
      name: "Mudit Hissaria",
      brand: "Hissaria Gems Private Limited",
      logo: "/hissaria gems private limited.jpeg"
    },
    {
      text: "JewelBiz is intuitive and powerful. It has significantly reduced our manual errors and improved operational efficiency.",
      name: "Abhishek Jain",
      brand: "BTR & SONS",
      logo: "/BTR.png"
    },
    {
      text: "Security and reliability were our top priorities, and JewelBiz delivers on both fronts perfectly.",
      name: "Manoj Bansal",
      brand: "Mahalaxmi Refinery",
      logo: "/Mahalaxmi.png"
    },
    {
      text: "JewelBiz has revolutionized our inventory tracking. The precision and ease of use are unmatched in the industry.",
      name: "Rajesh Hissaria",
      brand: "B.L.Hissaria Jewellers Pvt. Ltd.",
      logo: "/b l hissaria jewellers.png"
    },
    {
      text: "Managing multiple branches has never been easier. Real-time data synchronization keeps us ahead of the competition.",
      name: "Sandeep Hissaria",
      brand: "B.L.Hissaria Jewellers Pvt. Ltd.",
      logo: "/b l hissaria jewellers.png"
    },
    {
      text: "The karigar management module is a game-changer. We now have complete visibility over our gold wastage and job work.",
      name: "Sachin Hissaria",
      brand: "B.L.Hissaria Jewellers Pvt. Ltd.",
      logo: "/b l hissaria jewellers.png"
    },
    {
      text: "Excellent support and a robust platform. It handles our complex billing requirements effortlessly.",
      name: "Aditya Hissaria",
      brand: "Hissaria Art Palace Pvt Ltd"
    },
    {
      text: "Managing patient records, appointments, and pharmacy has become effortless. The CuraBiz platform truly understands the needs of an Ayurvedic practice.",
      name: "Dr. Amit Sharma",
      brand: "Bhagwati Ayurveda & Panchakarma Research Centre",
      logo: "/Bhagwati Ayurveda & Panchakarma Research Centre.jpeg"
    },
    {
      text: "From OPD to billing and discharge summaries, everything runs smoothly. It has greatly improved our hospital's day-to-day efficiency.",
      name: "Dr. Saabram",
      brand: "Parmeshwari Newborn & Children Hospital - Abohar",
      logo: "/Parmeshwari Newborn & Children Hospital - Abohar.jpeg"
    },
    {
      text: "Tracking candidates, clients, and placements is now incredibly simple. The team's support has been outstanding throughout our journey.",
      name: "Ms. Preeti",
      brand: "Skyy High Placement",
      logo: "/Skyy High Placement.jpeg"
    },
    {
      text: "Inventory, billing, and daily reports are all in one place now. Running our store has become much easier and faster than before.",
      name: "Mr. Kanhaiya Lal",
      brand: "Shiv General Store",
      logo: "/Shiv General Store.jpeg"
    }
  ];

  return (
    <section className="w-full bg-[#F7F7F5] pt-16 pb-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block mb-5 px-3 py-1.5 bg-white text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full">
            Client Testimonials
          </span>
          <h2 className="font-sans font-medium leading-[1.1] tracking-[-0.01em] text-[#171717]">
            <span className="block text-[31px] whitespace-normal md:whitespace-nowrap">
              Businesses that refuse to
            </span>
            <span className="block text-[29px] font-medium italic text-[#FF641F] whitespace-normal md:whitespace-nowrap">
              settle for off-the-shelf.
            </span>
          </h2>
          <p className="mt-5 text-[12px] leading-[1.6] text-[#4B5563] max-w-2xl mx-auto">
            Jewellery showrooms and healthcare practices across India have moved from scattered notebooks and generic software to a single connected system.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start flex flex-col justify-between"
              >
                <p className="text-[13px] leading-[1.6] text-[#4B5563] italic mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center">
                  {testimonial.logo ? (
                    <img src={testimonial.logo} alt={testimonial.brand} className="w-10 h-10 rounded-full object-contain border border-slate-100 bg-white p-1" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0C69B6] font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div className="ml-3">
                    <h4 className="text-[13px] font-bold text-[#171717]">{testimonial.name}</h4>
                    <p className="text-[11px] text-[#4B5563]">{testimonial.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4 gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 hover:text-blue-600 shadow-sm"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 hover:text-blue-600 shadow-sm"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}

function OutcomeSection() {
  const items = [
    { title: 'Instant Deployment', description: 'Push changes to your production system with one click, zero downtime guaranteed.', icon: Rocket },
    { title: 'Smart Automations', description: 'Complex conditional logic made simple with our drag-and-drop workflow builder.', icon: Zap },
    { title: 'Seamless Integration', description: 'Native connectors for 500+ apps including Stripe, Salesforce, and Slack.', icon: LinkIcon },
    { title: 'Bank-Grade Security', description: 'SOC2 Type II compliant with end-to-end encryption for all customer data.', icon: ShieldCheck },
    { title: 'Real-Time BI', description: 'Customizable dashboards that pull data directly from your operational core.', icon: BarChart3 },
    { title: 'Unlimited Scaling', description: 'Scale from your first 10 customers to 10 million without changing a line of code.', icon: Users },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900">Engineered for Outcome</h2>
        <p className="mt-4 text-base text-slate-600 whitespace-nowrap">Everything you need to automate a modern enterprise, without the enterprise price tag.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-md border border-slate-100 text-left">
                <div className="mb-5 h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-body">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LaunchStepsSection() {
  const steps = [
    {
      title: 'Step 1: Plan & Scope',
      description: 'Define goals, user journeys, and KPIs for launch readiness.',
      image: '/ST1.png'
    },
    {
      title: 'Step 2: Design & Prototype',
      description: 'Build clickable UI/UX for early validation and feedback loops.',
      image: '/ST2.png'
    },
    {
      title: 'Step 3: Build & Integrate',
      description: 'Develop core features, integrate APIs, and automate workflows.',
      image: '/ST3.png'
    },
    {
      title: 'Step 4: Test & Iterate',
      description: 'Run QA sprints, fix issues, and polish the experience.',
      image: '/ST4.png'
    },
    {
      title: 'Step 5: Deploy & Scale',
      description: 'Launch with monitoring, health checks, and growth-backed scaling.',
      image: '/ST5.png'
    },
  ];

  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 470);
    }, 2800);

    return () => clearInterval(timer);
  }, [steps.length]);

  const getPosition = (index: number) => {
    const pos = (index - active + steps.length) % steps.length;
    if (pos === 0) return 'front';
    if (pos === 1) return 'next';
    if (pos === 2) return 'back1';
    return 'back2';
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900">From Idea To Launch In 5 Steps</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 whitespace-normal sm:whitespace-nowrap font-body">
            Speed is your unfair advantage. Stop waiting on developers and start running your business.
          </p>
        </div>

        <div className="relative h-[620px] sm:h-[660px] md:h-[500px] lg:h-[600px]">
          {steps.map((step, index) => {
            const position = getPosition(index);
            const common = 'absolute w-full h-[580px] sm:h-[620px] md:h-[460px] lg:h-[560px] rounded-3xl shadow-2xl transition-all duration-500 ease-in-out transform overflow-hidden';

            const props = {
              front: 'top-0 left-0 z-30 text-white scale-100 opacity-100 translate-x-0',
              next: 'top-4 left-6 z-20 bg-slate-100 text-slate-900 scale-95 opacity-80 translate-x-10',
              back1: 'top-8 left-12 z-10 bg-slate-100 text-slate-600 scale-90 opacity-50 translate-x-20',
              back2: 'top-12 left-16 z-0 bg-slate-100 text-slate-500 scale-85 opacity-20 translate-x-28',
            };

            const animationClass = isAnimating && position === 'front' ? ' -translate-x-10 opacity-0' : '';

            return (
              <div
                key={step.title}
                className={`${common} ${props[position]} ${animationClass}`}
                style={position === 'front' ? { background: 'linear-gradient(to right, #0C69B6, #1570BD, #4B96E9)' } : undefined}
              >
                <div className="h-full grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side - Text Content */}
                  <div className="relative z-10 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-snug">{step.title}</h3>
                      <p className="mt-4 text-sm md:text-base leading-relaxed text-white/95 md:text-lg font-body">{step.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-subtitle border border-white/30">Advanced</span>
                      <span className="text-xs md:text-sm text-white/80 font-body">Progressing...</span>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative p-6 md:p-10 flex items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="max-w-full h-auto max-h-[200px] sm:max-h-[260px] md:max-h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition ${active === idx ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCompanySection() {
  const stats = [
    { value: 25, suffix: '+', label: 'Years Of Experience' },
    { value: 3452, suffix: '+', label: 'Total Transactions' },
    { value: 751, suffix: '+', label: 'Active Users' },
    { value: 592, suffix: '+', label: 'Positive Reviews' },
    { value: 2.75, suffix: '+', label: 'Man-Hours of R&D', subLabel: 'Lakhs', decimals: 2 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left Side - Images with Floating Overlay */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <img src="/H1.jpeg" alt="About company main" className="w-full h-[400px] object-cover object-center" />
            </div>

            {/* Floating Secondary Image */}
            <div className="absolute bottom-4 -left-4 w-1/2 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img src="/H2.jpeg" alt="About company secondary" className="w-full h-[200px] object-cover" />
            </div>

            {/* Purple Badge Overlay */}
            <div className="absolute bottom-4 left-[calc(50%-1rem)] -translate-x-1/2 z-30 bg-purple-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center text-xs font-semibold shadow-lg text-center leading-tight">
              <span>1,485 +</span>
              <span>Trusted Clients</span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-purple-600 text-sm font-medium uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              About Company
            </div>
            <h2 className="text-4xl font-semibold text-slate-900 leading-[1.1]">Building Future-Ready Software for Modern Enterprises</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-body">At SlateBiz Softwares, we specialize in developing intelligent, scalable ERP solutions that transform businesses. With over a decade of experience, we've helped hundreds of companies across jewellery, healthcare, and retail industries streamline their operations and achieve remarkable growth.</p>

            {/* Feature Blocks */}
            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Trusted Partner</h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">500+ businesses trust us for their critical operations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Fast Implementation</h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">Go live in weeks, not months with our rapid deployment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Proven Results</h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">Average 45% efficiency improvement for our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Horizontal Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-16 text-center">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-none">
                <CountUp end={item.value} suffix={item.suffix} decimals={item.decimals || 0} />
              </h3>
              <p className="mt-3 text-base text-slate-500">
                {item.subLabel && (
                  <span className="mr-1">
                    {item.subLabel}
                  </span>
                )}
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-slate-900">Connecting The Tech With Shop</h2>
        <p className="mt-3 text-center text-slate-500 max-w-2xl mx-auto">A visual snapshot of how we bridge technology and retail operations.</p>

        <div className="mt-8 w-full overflow-hidden">
          <img
            src="/connect.png"
            alt="Connecting the tech with shop"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureShowcaseSection() {
  const badgeGradient = { background: 'linear-gradient(to right, #0C69B6, #1570BD, #4B96E9)' };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Feature Block */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-28">
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md rounded-3xl shadow-2xl bg-slate-900 p-4 transform transition-transform duration-500 hover:scale-105">
              <img src="/V1.png" alt="Product Workflow" className="w-full h-auto object-contain rounded-2xl" />
            </div>
            <div className="absolute -top-4 -right-2 sm:-right-4 text-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2.5 z-10" style={badgeGradient}>
              <Settings className="w-5 h-5" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] opacity-80 font-medium">Workflow</span>
                <span className="text-sm font-semibold">Automate Everything</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0C69B6] via-[#1570BD] to-[#4B96E9]">Product Power</p>
            <h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-[1.15]">
              Visualize and manage your entire lifecycle.
            </h3>
            <p className="mt-2 text-lg text-slate-600 font-body leading-relaxed">
              From the first lead to the final invoice, every touchpoint is captured and optimized. No more guessing where your business stands.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 p-4 border-l-4 border-blue-600">
                <p className="text-sm font-semibold text-slate-900">Track</p>
                <p className="text-xs text-slate-500 mt-1 font-body">Real-time performance metrics</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border-l-4 border-blue-600">
                <p className="text-sm font-semibold text-slate-900">Manage</p>
                <p className="text-xs text-slate-500 mt-1 font-body">Global resource allocation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Block */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0C69B6] via-[#1570BD] to-[#4B96E9]">Smart Intelligence</p>
            <h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-[1.15]">
              Actionable insights, zero manual work.
            </h3>
            <p className="mt-2 text-lg text-slate-600 font-body leading-relaxed">
              Our AI agents monitor your system for bottlenecks and suggest optimizations before problems occur.
            </p>
            <Link to="/contact" className="inline-flex items-center mt-8 text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 group">
              Explore Services
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md rounded-3xl shadow-2xl bg-slate-900 p-4 transform transition-transform duration-500 hover:scale-105">
              <img src="/V2.png" alt="Smart Intelligence" className="w-full h-auto object-contain rounded-2xl" />
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-4 text-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2.5 z-10" style={badgeGradient}>
              <BarChart3 className="w-5 h-5" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] opacity-80 font-medium">Insight</span>
                <span className="text-sm font-semibold">24% Efficiency Gain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthSection() {
  const growthStages = [
    {
      image: '/K1.png',
      title: 'Move at light speed',
      category: 'Innovation',
      description: 'Launch MVPs and pivot operations instantly as you find market fit.',
    },
    {
      image: '/K2.png',
      title: 'Manage multiple clients',
      category: 'Scaling',
      description: 'Centralized operations for managing hundreds of projects simultaneously.',
    },
    {
      image: '/K3.png',
      title: 'Automated Operations',
      category: 'Operations',
      description: 'Replace legacy ERPs with a system that actually likes people.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Built for every stage of growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {growthStages.map((stage, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full border border-slate-600 shadow-sm mb-2">
                  {stage.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-gray-200 text-sm">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "How do you ensure the security of our data?",
      answer: "Data security is a top priority. We prioritise the security of your information by implementing industry-leading security measures. Additionally, all team members are bound by strict confidentiality agreements to ensure your privacy is always protected."
    },
    {
      question: "Do you provide post-development support and maintenance?",
      answer: "Absolutely! We understand the importance of ongoing support. We offer flexible maintenance plans to keep your project running smoothly."
    },
    {
      question: "How quickly can you start a new project?",
      answer: "Initiate your project with ease. Schedule a complimentary consultation through our website. We prioritize prompt communication and will respond within 2-3 business hours to discuss your project confidentially."
    },
    {
      question: "Do you offer refunds?",
      answer: "Refund policies depend on the terms and conditions of the subscription plan."
    },
    {
      question: "How can I request a product demo?",
      answer: "You can request a demo by filling out the demo request form on our website. Lets’s talk form"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            WE BUILD PRODUCTS, BECAUSE WE RUN THEM.
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Explore strategies, guides, and insights on business automation, inventory management, SaaS tools, and scaling operations with modern technology.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Questions
              </h3>
              <p className="text-gray-600 mb-6">
                Have any questions about our services?
                <br />
                You're in the right place.
              </p>
              <Link to="/faq" className="text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200" style={{ background: 'linear-gradient(to right, #0C69B6, #1570BD, #4B96E9)' }}>
                VIEW ALL FAQ
              </Link>
            </div>

            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold text-gray-900 py-2"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="text-blue-600">
                      {openIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

