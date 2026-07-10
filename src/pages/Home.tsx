import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, ShieldCheck, BarChart3, Users, Link as LinkIcon, Settings, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <CompanyLogosSection />
      <ProductsSection />
      <OutcomeSection />
      <LaunchStepsSection />
      <AboutCompanySection />
      <ConnectSection />
      <FeatureShowcaseSection />
      <ReviewsSection />
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
      className="relative w-full overflow-hidden bg-[#f8faff] flex flex-col lg:block"
    >
      {/* Mobile Image: Shown first on small screens */}
      <img
        src="/BGDB.png"
        alt="Hero Visual"
        className="w-full h-auto block lg:hidden"
      />

      {/* Desktop Background Image - Sets the aspect ratio and provides the backdrop */}
      <img
        src="/BGDB.png"
        alt="Hero Background"
        className="hidden lg:block w-full h-auto select-none pointer-events-none"
      />

      {/* Content Overlay - Static on mobile (below image), Absolute on desktop (over image) */}
      <div className="relative lg:absolute lg:inset-0 z-20 flex items-center py-10 lg:py-0">
        <div className="max-w-7xl mx-auto lg:ml-[5%] lg:mr-auto px-4 sm:px-6 lg:pl-0 lg:pr-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left-aligned Text content shifted more to the right */}
            <div className="lg:col-span-6 space-y-3.5 lg:space-y-5 text-slate-900">
              <h1 className="text-[31px] sm:text-[37px] lg:text-[45px] font-bold leading-[1.2] tracking-tight text-slate-900">
                <span className="block">Secure Ecosystems.</span>
                <span className="block">Seamless Operations.</span>
                <span className="block">Scalable Growth.</span>
              </h1>
              <p className="text-[14.5px] sm:text-[16.5px] text-slate-600 max-w-md font-body leading-relaxed">
                We engineer scalable software, cloud infrastructure, and interconnected systems for modern companies ready to scale.
              </p>

              <div className="pt-2">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#3b82f6] text-white font-medium rounded-md shadow-md hover:bg-[#2563eb] transition-all font-subtitle text-[13px] tracking-wider uppercase">
                  Get Started
                </Link>
              </div>
            </div>
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
    '/GS Bihani Jeweller.jpeg',
    '/b l hissaria jewellers.png',
    '/Bhagwati Ayurveda & Panchakarma Research Centre.jpeg',
    '/Parmeshwari Newborn & Children Hospital - Abohar.jpeg',
    '/Skyy High Placement.jpeg',
    '/Shiv General Store.jpeg',
  ];

  return (
    <div className="relative z-20 py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 w-full mx-auto">
        <div className="overflow-hidden">
          <div className="company-marquee flex gap-12 items-center">
            {logos.map((src, idx) => (
              <div key={`logo-a-${idx}`} className="flex items-center justify-center shrink-0 bg-white rounded-xl shadow-sm border border-slate-100 p-3 w-40 h-20">
                <img src={src} alt="Client logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
            ))}
            {logos.map((src, idx) => (
              <div key={`logo-b-${idx}`} className="flex items-center justify-center shrink-0 bg-white rounded-xl shadow-sm border border-slate-100 p-3 w-40 h-20">
                <img src={src} alt="Client logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
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

function ProductsSection() {
  const cards = [
    {
      title: 'Jewellery Management Software',
      description: 'End-to-end jewellery ERP: inventory, billing, karigar management, and retail analytics to scale your jewellery business.',
      image: '/JM.png',
      href: '/jewelbiz/',
    },
    {
      title: 'Hospital Management Software',
      description: 'Complete hospital & clinic management with patient records, pharmacy, billing, appointments, and operational dashboards.',
      image: '/HM.png',
      href: '/curabiz/',
    },
    {
      title: 'Retail Management Software',
      description: 'Retail-centric ERP for omni-channel stores with stock control, POS integration, customer loyalty and analytics.',
      image: '/RM.png',
      href: '/retailbiz/',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900">Our Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            We engineer scalable software, cloud infrastructure, and interconnected systems for modern companies ready to scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link to={card.href} key={card.title} className="group block rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 bg-slate-100 relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-subtitle text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 mb-5 text-sm leading-relaxed font-body">{card.description}</p>
                <span className="font-subtitle text-blue-600 group-hover:text-blue-700">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
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
        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900">Engineered For Outcome</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to automate a modern enterprise without enterprise pricing.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="relative rounded-3xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 flex flex-col items-center text-center">
                <div className="mb-5 h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-subtitle text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{item.description}</p>
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
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto font-body">
            Speed is your unfair advantage. Stop waiting on developers and start running your business.
          </p>
        </div>

        <div className="relative h-[500px] lg:h-[600px]">
          {steps.map((step, index) => {
            const position = getPosition(index);
            const common = 'absolute w-full h-[460px] lg:h-[560px] rounded-3xl shadow-2xl transition-all duration-500 ease-in-out transform overflow-hidden';

            const props = {
              front: 'top-0 left-0 z-30 bg-blue-600 text-white scale-100 opacity-100 translate-x-0',
              next: 'top-4 left-6 z-20 bg-slate-100 text-slate-900 scale-95 opacity-80 translate-x-10',
              back1: 'top-8 left-12 z-10 bg-slate-100 text-slate-600 scale-90 opacity-50 translate-x-20',
              back2: 'top-12 left-16 z-0 bg-slate-100 text-slate-500 scale-85 opacity-20 translate-x-28',
            };

            const animationClass = isAnimating && position === 'front' ? ' -translate-x-10 opacity-0' : '';

            return (
              <div
                key={step.title}
                className={`${common} ${props[position]} ${animationClass}`}
              >
                <div className="h-full grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side - Text Content */}
                  <div className="relative z-10 p-10 flex flex-col justify-between bg-gradient-to-r from-black/90 via-black/70 to-transparent">
                    <div>
                      <h3 className="mt-3 text-3xl font-semibold leading-snug">{step.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-white/95 md:text-lg font-body">{step.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-subtitle border border-white/30">Advanced</span>
                      <span className="text-sm text-white/80 font-body">Progressing...</span>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                    {/* Subtle overlay on right side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
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
              <img src="/H1.jpeg" alt="About company main" className="w-full h-[400px] object-cover" />
            </div>

            {/* Floating Secondary Image */}
            <div className="absolute -bottom-8 -left-4 w-2/3 overflow-hidden rounded-2xl shadow-lg border-4 border-white">
              <img src="/H2.jpeg" alt="About company secondary" className="w-full h-[200px] object-cover" />
              {/* Purple Badge Overlay */}
              <div className="absolute bottom-3 right-3 bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                1,485 + Trusted Clients
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-sm text-blue-700 font-medium">About Company</p>
            <h2 className="text-4xl font-semibold text-slate-900 leading-[1.1]">Building Future-Ready Software for Modern Enterprises</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-body mt-2">At SlateBiz Softwares, we specialize in developing intelligent, scalable ERP solutions that transform businesses. With over a decade of experience, we've helped hundreds of companies across jewellery, healthcare, and retail industries streamline their operations and achieve remarkable growth.</p>
            <p className="text-lg text-slate-600 leading-relaxed font-body">Our expert team combines cutting-edge technology with deep industry knowledge to deliver custom software solutions that drive efficiency, reduce costs, and accelerate your business growth. From concept to deployment, we're your trusted partner in digital transformation.</p>

            {/* Feature Blocks */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Trusted Partner</h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">500+ businesses trust us for their critical operations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Fast Implementation</h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">Go live in weeks, not months with our rapid deployment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Proven Results</h3>
                  <p className="text-sm text-slate-600 mt-1 font-body">Average 45% efficiency improvement for our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Horizontal Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              {/* NUMBER */}
              <h3 className="text-5xl lg:text-6xl font-semibold text-blue-800 leading-none">
                <CountUp end={item.value} suffix={item.suffix} decimals={item.decimals || 0} />
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-gray-700 text-lg font-medium">
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
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Feature Block */}
        <div className="lg:flex lg:items-center lg:justify-between mb-24">
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <div className="relative w-full max-w-md rounded-3xl shadow-2xl bg-slate-800 p-4 transform transition-transform duration-500 hover:scale-105">
              <img src="/V1.png" alt="Product Workflow" className="w-full h-auto object-contain rounded-2xl" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span className="font-subtitle">Workflow Automate Everything</span>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:pl-16">
            <h3 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Visualize and manage your entire lifecycle.
            </h3>
            <p className="mt-4 text-lg text-slate-600 font-body">
              From the first lead to the final invoice, every touchpoint is captured and optimized. No more guessing where your business stands.
            </p>
          </div>
        </div>

        {/* Second Feature Block */}
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-16">
            <h3 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Actionable insights, zero manual work.
            </h3>
            <p className="mt-4 text-lg text-slate-600 font-body">
              Our AI agents monitor your system for bottlenecks and suggest optimizations before problems occur.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-subtitle rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                Explore Services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 relative flex justify-center items-center">
            <div className="relative w-full max-w-md rounded-3xl shadow-2xl bg-slate-800 p-4 transform transition-transform duration-500 hover:scale-105">
              <img src="/V2.png" alt="Smart Intelligence" className="w-full h-auto object-contain rounded-2xl" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-5 py-2 rounded-full shadow-lg flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span className="font-subtitle">Insight 24% Efficiency Gain</span>
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
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
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
              <Link to="/faq" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200">
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

function ReviewsSection() {
  const testimonials = [
    {
      text: "From procurement to sales, everything is streamlined. Highly recommended for any growing jewellery business.",
      name: "Kalpit Hissaria",
      brand: "Hissaria Art Palace Pvt Ltd"
    },
    {
      text: "The reporting features give us deep insights into our business performance. A must-have tool for modern jewellers.",
      name: "Mudit Hissaria",
      brand: "Hissaria Gems Private Limited", logo: "/hissaria gems private limited.jpeg"
    },
    {
      text: "JewelBiz is intuitive and powerful. It has significantly reduced our manual errors and improved operational efficiency.",
      name: "Abhishek Jain",
      brand: "BTR & SONS", logo: "/BTR.png"
    },
    {
      text: "Security and reliability were our top priorities, and JewelBiz delivers on both fronts perfectly.",
      name: "Manoj Bansal",
      brand: "Mahalaxmi Refinery", logo: "/Mahalaxmi.png"
    },
    {
      text: "JewelBiz has revolutionized our inventory tracking. The precision and ease of use are unmatched in the industry.",
      name: "Rajesh Hissaria",
      brand: "B.L.Hissaria Jewellers Pvt. Ltd.", logo: "/b l hissaria jewellers.png"
    },
    {
      text: "Managing multiple branches has never been easier. Real-time data synchronization keeps us ahead of the competition.",
      name: "Sandeep Hissaria",
      brand: "B.L.Hissaria Jewellers Pvt. Ltd.", logo: "/b l hissaria jewellers.png"
    },
    {
      text: "The karigar management module is a game-changer. We now have complete visibility over our gold wastage and job work.",
      name: "Sachin Hissaria",
      brand: "B.L.Hissaria Jewellers Pvt. Ltd.", logo: "/b l hissaria jewellers.png"
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

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Don't just take our word for it. See what real customers say.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 hover:text-blue-600 shadow-sm"
              aria-label="Previous reviews"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 hover:text-blue-600 shadow-sm"
              aria-label="Next reviews"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="mb-8 relative">
                <p className="text-slate-700 text-lg leading-relaxed font-body italic relative z-10">{testimonial.text}</p>
              </div>

              <div className="flex items-center">
                {testimonial.logo ? (
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-inner p-1 border border-slate-100">
                    <img src={testimonial.logo} alt={testimonial.brand} className="max-w-full max-h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <h3 className="text-blue-700 font-semibold text-xl">{testimonial.name.charAt(0)}</h3>
                  </div>
                )}
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm font-semibold text-blue-600">{testimonial.brand}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
