import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Shield,
  Cloud,
  Zap,
  Users,
  Layers,
  Linkedin,
  Search,
  PenTool,
  Code2,
  Rocket,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function CountUp({
  end,
  duration = 1800,
  suffix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
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
      { threshold: 0.2 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(end * ease);
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(end);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const whyChoose: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Building2,
    title: 'Industry-specific ERP',
    desc: 'Deep domain knowledge across jewellery, healthcare, and retail.',
  },
  {
    icon: Shield,
    title: 'Secure & compliance-ready',
    desc: 'Enterprise-grade security standards you can trust.',
  },
  {
    icon: Cloud,
    title: 'Scalable cloud solutions',
    desc: 'Flexible platforms designed to grow with your business.',
  },
  {
    icon: Zap,
    title: 'Performance & analytics',
    desc: 'Actionable insights for faster decision-making.',
  },
  {
    icon: Users,
    title: 'Dedicated support',
    desc: 'A long-term partnership — with you at every step.',
  },
  {
    icon: Layers,
    title: 'Seamless integration',
    desc: 'Connect effortlessly with the tools you already use.',
  },
];

const processSteps: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'We map your workflows, bottlenecks, and goals before writing a line of code.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Clear product blueprints and interfaces shaped around how your team works.',
  },
  {
    icon: Code2,
    title: 'Build',
    desc: 'Industry-ready modules engineered for reliability, speed, and scale.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Guided rollout, training, and go-live support so adoption sticks.',
  },
  {
    icon: Headphones,
    title: 'Support',
    desc: 'Ongoing partnership with upgrades, fixes, and continuous improvement.',
  },
];

const founders = [
  {
    name: 'Lokesh Kumar',
    role: 'Founder',
    image: '/Lokesh Sharma.png',
    linkedin: 'https://www.linkedin.com/in/lokesh-verma01/',
  },
  {
    name: 'Umang Garg',
    role: 'Co-Founder',
    image: '/Umang Garg.png',
    linkedin: 'https://www.linkedin.com/in/garg-umang/',
  },
];

const team = [
  {
    name: 'Sumit Goyal',
    role: 'Chartered Accountant',
    image: '/sumit-goyal.png',
  },
  {
    name: 'Kuntal Mathur',
    role: 'Project Manager',
    image: '/Kunal Mathur.png',
  },
  {
    name: 'Urja Ramanandi',
    role: 'Project Manager',
    image: '/Urja Ramanandi.png',
  },
  {
    name: 'Yash Bansal',
    role: 'Business Development Manager',
    image: '/Yash Bansal.jpeg',
  },
  {
    name: 'Anil Chaudhary',
    role: 'Business Development Manager',
    image: '/Anil Chaudhary.png',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-100"
        style={{
          background: 'linear-gradient(115deg, #E8F2FB 0%, #F7F8FC 45%, #FBEDE6 100%)',
        }}
      >
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#0C69B6]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-[#FF641F]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                About SlateBiz
              </span>
            </div>

            <h1 className="font-serif font-normal text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-slate-900">
              Intelligent software for
              <em className="mt-1 block font-serif italic text-[#0C69B6]">
                modern businesses.
              </em>
            </h1>

            <p className="mt-4 max-w-[460px] text-[14.5px] leading-relaxed text-slate-600 sm:text-[15.5px]">
              SlateBiz builds scalable, secure enterprise platforms that simplify operations,
              sharpen decisions, and accelerate growth — with deep domain expertise in jewellery,
              healthcare, and retail.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-6">
              <div>
                <p className="font-serif text-[1.65rem] leading-none tracking-tight text-slate-900 sm:text-[1.85rem]">
                  <CountUp end={10} suffix="+" />
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500">
                  Years building
                </p>
              </div>
              <div>
                <p className="font-serif text-[1.65rem] leading-none tracking-tight text-slate-900 sm:text-[1.85rem]">
                  <CountUp end={20} suffix="+" />
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500">
                  Jewellery expertise
                </p>
              </div>
              <div>
                <p className="font-serif text-[1.65rem] leading-none tracking-tight text-slate-900 sm:text-[1.85rem]">
                  <CountUp end={1.5} suffix="L+" decimals={1} />
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500">
                  Invoices handled
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border-[3px] border-white shadow-[0_20px_50px_rgba(15,25,35,0.1)] ring-1 ring-slate-200/80">
              <img
                src="/ab.png"
                alt="SlateBiz digital ecosystems"
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-slate-100 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="order-2 overflow-hidden rounded-3xl border-[3px] border-white shadow-sm ring-1 ring-slate-200/80 lg:order-1">
            <img
              src="/who.png"
              alt="SlateBiz team"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                Who we are
              </span>
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.1rem)] leading-snug tracking-[-0.02em] text-slate-900">
              Industry ERPs, built with intent.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-600 sm:text-[15.5px]">
              We specialize in industry-specific ERP systems and digital platforms. With a strong
              foundation in innovation and deep domain expertise, SlateBiz creates software
              ecosystems that help organizations streamline workflows, manage data intelligently,
              and make faster, smarter decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#F7F9FC] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                Why SlateBiz
              </span>
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] text-slate-900">
              What sets us apart
            </h2>
            <p className="mt-2 text-[14.5px] text-slate-500">
              Practical strengths that show up in every engagement.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 bg-white p-5 transition hover:border-[#0C69B6]/20 hover:shadow-sm"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F2FB] text-[#0C69B6]">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-b border-slate-100 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                The founders
              </span>
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] text-slate-900">
              The people behind SlateBiz
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-slate-500">
              Building industry software with clarity, craft, and long-term vision.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[640px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {founders.map((person) => (
              <div key={person.name} className="group text-center">
                <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border-[4px] border-white bg-slate-50 shadow-[0_12px_32px_rgba(15,25,35,0.1)] ring-2 ring-[#0C69B6]/20 sm:h-[240px] sm:w-[240px]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-5 font-serif text-[18px] font-normal tracking-[-0.01em] text-slate-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#0C69B6]">
                  {person.role}
                </p>
                {person.linkedin ? (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex text-slate-400 transition hover:text-[#0C69B6]"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F7F9FC] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                Our team
              </span>
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] text-slate-900">
              Meet the team
            </h2>
            <p className="mt-2 text-[14.5px] text-slate-500">
              The people who deliver every project with care and clarity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-[120px] w-[120px] overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_8px_24px_rgba(15,25,35,0.08)] ring-2 ring-slate-200/90 sm:h-[140px] sm:w-[140px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-3 text-[13.5px] font-semibold text-slate-900 sm:text-[14.5px]">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[12px] leading-snug text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-slate-100 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                How we work
              </span>
              <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            </div>
            <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.1rem)] tracking-[-0.02em] text-slate-900">
              Our process
            </h2>
            <p className="mt-2 text-[14.5px] text-slate-500">
              A clear path from discovery to lasting support.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative rounded-xl border border-slate-100 bg-[#F7F9FC] p-4 sm:p-5">
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0C69B6] text-[11px] font-semibold text-white">
                  {index + 1}
                </span>
                <div className="mb-2 text-[#0C69B6]">
                  <step.icon className="h-4 w-4" />
                </div>
                <h3 className="text-[14px] font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background: 'linear-gradient(120deg, #0C69B6 0%, #095a9d 55%, #0a4d86 100%)',
        }}
      >
        <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[#FF641F]/20 blur-2xl" />

        <div className="relative mx-auto max-w-[700px] px-4 text-center sm:px-6">
          <h2 className="font-serif font-normal text-[clamp(1.7rem,3.5vw,2.35rem)] tracking-[-0.02em] text-white">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-blue-100">
            Partner with SlateBiz to modernize operations and build a future-ready digital
            ecosystem.
          </p>
          <Link
            to="/contact/"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[13.5px] font-semibold text-[#0C69B6] shadow-lg transition hover:bg-blue-50"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
