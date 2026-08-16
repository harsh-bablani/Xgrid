import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
      <AccreditationSection />
      <StepsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}


function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat min-h-[620px] md:min-h-[720px] flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
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
    <div className="relative z-20 py-12 bg-[#F7F7F5] w-full overflow-hidden">
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
  const [reduced, setReduced] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const products = [
    {
      id: 'jewelbiz',
      title: 'JewelBiz ERP',
      badge: 'Primary Product',
      tagline: 'Your karigar, your stock, your GST. One system. Nothing missed.',
      description: 'One system for the retail counter, the wholesale desk, and the karigar workshop. Sales, stock, manufacturing, accounts, and compliance on a single ledger — from metal purchase to a signed GST invoice.',
      tags: ['HUID and BIS compliance', 'Karigar WIP tracking', 'MCX live gold rates', 'GSTR-1 and 3B auto-ready', 'Old gold exchange', 'Ohm / pawn register', 'Multi-branch real-time sync', 'On-premise and cloud'],
      tagClass: 'bg-[#FFF7ED] text-[#9A3412]',
      image: '/JM.png',
      imageAlt: 'JewelBiz ERP',
      link: '/jewelbiz/',
      linkText: 'Explore JewelBiz',
      imageLeft: false
    },
    {
      id: 'curabiz',
      title: 'CuraBiz HIMS',
      badge: 'Primary Product',
      tagline: 'Every patient. Every prescription. Every rupee. One system.',
      description: 'Full hospital information management with integrated pharmacy, OPD, IPD, e-prescriptions, and patient records. Built for clinics and hospitals — including Ayurveda practices with Panchkarma scheduling and WhatsApp patient communication.',
      tags: ['OPD and IPD', 'Integrated pharmacy', 'e-Prescription', 'Panchkarma scheduler', 'ABDM readiness', 'WhatsApp API'],
      tagClass: 'bg-[#DBEAFE] text-[#1E40AF]',
      image: '/HM.png',
      imageAlt: 'CuraBiz HIMS',
      link: '/curabiz/',
      linkText: 'Explore CuraBiz',
      imageLeft: true
    },
    {
      id: 'retailbiz',
      title: 'RetailBiz ERP',
      badge: null,
      tagline: 'Built for your retail. Not adapted from someone else\'s.',
      description: 'Specialized ERP for retail verticals where generic software cannot be forced to fit. Built around your industry rules, compliance needs, and operational workflows.',
      tags: ['Specialized vertical ERP', 'GST-compliant billing', 'Multi-branch support', 'Industry-specific workflows'],
      tagClass: 'bg-[#F1F5F9] text-[#334155]',
      image: '/RM%20(2).png',
      imageAlt: 'RetailBiz ERP',
      link: '/retailbiz/',
      linkText: 'Explore RetailBiz ERP',
      imageLeft: false
    }
  ];

  type Product = typeof products[number];

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const lerp = (start: number, end: number, progress: number) =>
    start + (end - start) * progress;

  const getCardStyle = (index: number): React.CSSProperties => {
    const n = products.length;
    if (n === 0) return {};
    if (n === 1) return { transform: 'translate3d(0, 0, 0)', opacity: 1, zIndex: 10 };

    /*
     * 0.00 → 0.33 : Card 1 → Card 2
     * 0.33 → 0.66 : Card 2 → Card 3
     * 0.66 → 1.00 : Card 3 active, then section releases
     */

    const effective = scrollProgress <= 2 / 3
      ? scrollProgress / (2 / 3)
      : 1;

    const transitionCount = n - 1;
    const exactPosition = effective * transitionCount;
    const currentIndex = Math.min(Math.floor(exactPosition), n - 1);
    const localProgress =
      currentIndex >= n - 1 ? 1 : exactPosition - currentIndex;

    if (index === currentIndex) {
      if (currentIndex === n - 1) {
        return { transform: 'translate3d(0, 0%, 0)', opacity: 1, zIndex: 20 };
      }
      const y = lerp(0, -100, localProgress);
      return { transform: `translate3d(0, ${y}%, 0)`, opacity: 1, zIndex: 20 };
    }

    if (index === currentIndex + 1 && currentIndex < n - 1) {
      const y = lerp(100, 0, localProgress);
      return { transform: `translate3d(0, ${y}%, 0)`, opacity: 1, zIndex: 30 };
    }

    if (index < currentIndex) {
      return { transform: 'translate3d(0, -100%, 0)', opacity: 0, zIndex: 1 };
    }

    return { transform: 'translate3d(0, 100%, 0)', opacity: 0, zIndex: 1 };
  };

  const Card = ({
    product,
    className,
    style
  }: {
    product: Product;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <div
      className={`bg-white rounded-[10px] p-3 md:p-5 shadow-sm will-change-transform ${className || ''}`}
      style={style}
    >
      <div className="grid md:grid-cols-2 gap-4 items-center h-full">
        <div className={product.imageLeft ? 'order-1' : 'order-2 md:order-1'}>
          <img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-[180px] md:h-[380px] object-contain rounded-2xl"
          />
        </div>
        <div className={product.imageLeft ? 'order-2' : 'order-1 md:order-2'}>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-[22px] font-bold text-[#171717]">{product.title}</h3>
            {product.badge && (
              <span className="bg-[#FF641F] text-white text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>
          <p className="text-[#0C69B6] italic text-[14px] mb-3">
            “{product.tagline}”
          </p>
          <p className="text-[#4B5563] text-[13px] leading-[1.5] mb-5">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {product.tags.map((tag) => (
              <span key={tag} className={`${product.tagClass} text-[11px] font-medium px-3 py-1.5 rounded-md`}>
                {tag}
              </span>
            ))}
          </div>
          <Link to={product.link} className="inline-flex items-center justify-center h-[30px] px-4 rounded-md bg-[#FF641F] text-white text-[13px] font-medium hover:bg-[#E55A18] transition-colors">
            {product.linkText}
          </Link>
        </div>
      </div>
    </div>
  );

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
    if (reduced || !sectionRef.current) return;

    const section = sectionRef.current;
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      const distanceScrolled = clamp(-rect.top, 0, scrollableDistance);
      setScrollProgress(clamp(distanceScrolled / scrollableDistance, 0, 1));
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#EBF0F1] ${reduced ? 'pt-14 pb-16 overflow-hidden' : 'h-[340vh] md:h-[300vh]'}`}
    >
      <div
        className={`w-full ${reduced ? '' : 'sticky top-0 h-screen overflow-hidden flex items-center'}`}
      >
        <div
          className={`w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 ${reduced ? '' : 'h-full flex flex-col justify-center pt-10 pb-10'}`}
        >
          <div className="text-center mb-8">
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

          {reduced ? (
            <div className="flex flex-col gap-4">
              {products.map((product) => (
                <Card key={product.id} product={product} className="w-full" />
              ))}
            </div>
          ) : (
            <div className="relative w-full h-[480px] md:h-[620px] max-w-[1120px] mx-auto overflow-hidden">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  product={product}
                  className="absolute top-0 left-0 w-full h-full"
                  style={getCardStyle(index)}
                />
              ))}
            </div>
          )}
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
    <section className="w-full bg-[#F7F7F5] pt-16 pb-20 overflow-hidden">
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

        <div className="relative overflow-hidden">
          <div className="testimonial-marquee gap-6 items-stretch">
            {testimonials.map((testimonial, index) => (
              <div
                key={`a-${index}`}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm flex-shrink-0 w-[300px] sm:w-[340px] flex flex-col justify-between"
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
            {testimonials.map((testimonial, index) => (
              <div
                key={`b-${index}`}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm flex-shrink-0 w-[300px] sm:w-[340px] flex flex-col justify-between"
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
        </div>

        <style>{`
          @keyframes testimonial-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonial-marquee {
            display: inline-flex;
            animation: testimonial-marquee 80s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
}

function AccreditationSection() {
  const items = [
    'BIS hallmarking & HUID readiness',
    'E-Way Bill aligned dispatch',
    'Enterprise security architecture',
    'PCI-oriented payment controls',
    'ABDM & NABH-ready healthcare pathways',
    'Financial audit freeze & logs',
    'TDS / TCS & reverse charge',
    'Data residency & deployment choice',
  ];

  return (
    <section className="w-full bg-[#EAECEF] pt-16 pb-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        <span className="inline-block mb-6 px-3 py-1.5 bg-white text-[#4B5563] text-[11px] font-medium tracking-wide rounded-full">
          Accreditation
        </span>
        <h2 className="font-sans font-medium leading-[1.05] tracking-[-0.03em] text-[#171717]">
          <span className="block text-[38px] md:text-[46px] lg:text-[54px] whitespace-normal md:whitespace-nowrap">
            Built on Java and Oracle — ready for
          </span>
          <span className="block text-[38px] md:text-[46px] lg:text-[54px] font-medium italic text-[#FF641F] whitespace-normal md:whitespace-nowrap">
            India&apos;s compliance stack.
          </span>
        </h2>
        <p className="mt-6 text-[14px] leading-[1.7] text-[#4B5563] max-w-[780px]">
          ERP buyers in India do not only ask for features. They ask whether the platform can survive GST audits, hallmarking rules, e-invoice mandates, and healthcare data expectations. SlateBiz is engineered on the same Java and Oracle foundation used across enterprise and banking systems — with product workflows aligned to the accreditations and controls that matter in our verticals.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="bg-white rounded-lg border-l-2 border-[#0C69B6] p-5 shadow-sm mb-2">
              <h3 className="text-[15px] font-semibold text-[#171717]">
                GST & e-Invoicing (IRP / IRN)
              </h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#4B5563]">
                See how Aeropuertos Argentina unifies weather data and automation to improve safety, increase runway availability, and cut emissions.
              </p>
            </div>
            <ul className="space-y-1 mt-2">
              {items.map((item) => (
                <li key={item} className="text-[14px] text-[#4B5563] py-2.5 border-b border-slate-200/60 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/java.png"
              alt="Java and Oracle compliance stack"
              className="w-full max-w-[620px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const steps = [
    {
      number: '1',
      title: 'Demo on your own stock and rate structure',
      description: 'A 60-minute walkthrough configured with your item masters, purity structure, making rates, and GST setup — on your business, not a sample dataset.'
    },
    {
      number: '2',
      title: 'Choose deployment model',
      description: 'On-premise or cloud — your call. Scope and commercial terms confirmed in writing before any work begins.'
    },
    {
      number: '3',
      title: 'Go live in 24 hours',
      description: 'Opening stock, party ledgers, and karigar balances migrated before your first live transaction. Staff trained in parallel.'
    }
  ];

  return (
    <section className="w-full bg-[#F7F7F5] pt-16 pb-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF641F] mb-5">
              Why we exist
            </p>
            <h2 className="font-sans font-medium leading-[1.1] tracking-[-0.03em] text-[#171717] text-[36px] md:text-[42px] mb-4">
              Three steps from today to live
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#4B5563] mb-10 whitespace-nowrap">
              You call us today. You&apos;re live tomorrow. Here is exactly how it works.
            </p>

            <div>
              {steps.map((step, index) => (
                <div key={step.number} className={`py-6 ${index > 0 ? 'border-t border-slate-200/60' : ''}`}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0C69B6] text-white flex items-center justify-center text-[14px] font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#171717] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-[#4B5563]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/steps.png"
              alt="Implementation steps"
              className="w-full h-[400px] md:h-[520px] object-cover rounded-2xl"
            />
          </div>
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
    <section className="w-full bg-[#F7F7F5] py-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#171717] leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#4B5563] mb-8">
              Have any questions about our services?
              <br />
              You&apos;re in the right place.
            </p>
            <Link
              to="/faq"
              className="w-full sm:w-[160px] h-[50px] inline-flex items-center justify-center rounded-[10px] bg-[#0C69B6] text-white text-[12px] font-semibold uppercase tracking-wide hover:bg-[#0C69B6]/90 transition-colors"
            >
              VIEW ALL FAQ
            </Link>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-slate-200 py-5"
              >
                <button
                  className="flex items-start gap-4 w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-[#4B5563] text-[18px] font-light w-4 flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                  <span className="text-[15px] font-medium text-[#171717]">
                    {faq.question}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-3 pl-8 text-[13px] leading-[1.6] text-[#4B5563]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
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
        <span className="inline-block mb-7 px-4 py-2 bg-blue-50 text-slate-800 text-[13px] font-medium tracking-wide rounded-full">
          Get started
        </span>

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

