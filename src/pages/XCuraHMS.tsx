import ProductFeaturesSection from '../components/ProductFeaturesSection';
import { curaBizModules } from '../data/curaBizMatrix';
import { Building, Microscope, Stethoscope, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function XCuraHMS() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BusinessModelSection />
      <ComparisonSection />
      <ProductFeaturesSection
        modules={curaBizModules}
        theme="blue"
        subtitle="Capabilities drawn from the CuraBiz HIMS product matrix — organised by how clinics and hospitals actually run. Ask for a demo to see which modules fit your facility."
      />
      <FeaturesGridSection />
      <FeatureHighlightSection />
      <CTAFAQSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/herobg.png)' }}
      />
      <div className="absolute inset-0 bg-white/40" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full text-center">
        {/* Text Section - Constrained for readability */}
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Hospital Management Software
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Next-gen healthcare ecosystems for clinics, diagnostic centers, and multi-specialty hospitals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg">
              Start Scaling Today
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition">
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Dashboard — scaled preview on mobile, full height on desktop */}
        <div className="w-full mt-8 sm:mt-12 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="w-full p-1.5 sm:p-2 md:p-3 bg-white rounded-2xl md:rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-gray-100">
            <div className="w-full overflow-hidden rounded-xl md:rounded-[1.5rem] bg-gray-50 relative">
              <div className="md:hidden w-full overflow-x-auto overflow-y-hidden">
                <iframe
                  src="/dashboards/hospital.html"
                  title="CuraBiz Hospital Dashboard"
                  className="border-none block"
                  style={{ width: 1100, height: 620, maxWidth: 'none' }}
                />
              </div>
              <iframe
                src="/dashboards/hospital.html"
                title="CuraBiz Hospital Dashboard"
                className="hidden md:block w-full border-none h-[850px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessModelSection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Built for Every Healthcare Model
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Whether you run a multi-specialty hospital or a diagnostic lab, CuraBiz adapts to your workflow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* Multi-Specialty Hospitals */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Specialty Hospitals</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Centralized operations, multi-branch visibility, and clinical analytics for complex healthcare environments.
            </p>
          </div>

          {/* Diagnostic Labs */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnostic Labs</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Sample lifecycle, machine integration, reporting, and billing automation for laboratory operations.
            </p>
          </div>

          {/* Clinics & Day Care */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinics & Day Care</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Fast OPD, smart queues, pharmacy, and diagnostics for outpatient care centers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1020px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em] text-slate-900">
            <span className="block text-[34px] md:text-[40px] lg:text-[44px]">
              Generic software versus
            </span>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Generic / legacy tools</span>
            </div>
            <div className="bg-[#0C69B6] h-[52px] px-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white">CuraBiz HIMS</span>
            </div>
          </div>

          {[
            ['Patient file speed', 'Slow pulls; hangs on large databases', 'Seconds across 70–80k+ records'],
            ['UHID at reception', 'Thick paper register each day', 'Daily UHID auto-reset in software'],
            ['Doctor follow-ups', 'Retype prescriptions every visit', 'Favourites + copy previous Rx'],
            ['Paediatrics', 'Photocopied growth charts', '0–2yr charts & immunisation log'],
            ['Pharmacy linkage', 'Handwritten Rx re-entered at counter', 'Rx → stock → bill in one loop'],
            ['Ayurveda workflows', 'Forced into generic procedure slots', 'Panchkarma schedule + diet plan'],
            ['Insurance / cashless', 'Separate Excel for claims', 'Policy tagged to patient UHID'],
            ['24/7 reliability', 'Crash-prone local installs', 'Cloud backup & cross-device access'],
          ].map(([cap, generic, cura], i) => (
            <div
              key={i}
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
              If your current system still needs Excel for beds, cashless cases, or pharmacy stock — that gap is
              exactly what CuraBiz closes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGridSection() {
  const features = [
    {
      icon: "🏥",
      title: "PATIENT MANAGEMENT",
      desc: "Complete EMR system with patient registration, medical history, and visit tracking.",
    },
    {
      icon: "📅",
      title: "APPOINTMENT BOOKING",
      desc: "Online appointment scheduling with smart queue management and patient portal.",
    },
    {
      icon: "🧪",
      title: "LABORATORY INTEGRATION",
      desc: "Integrated LIS with sample tracking, automated reports, and machine connectivity.",
    },
    {
      icon: "💊",
      title: "PHARMACY MANAGEMENT",
      desc: "Complete pharmacy operations with inventory, billing, and prescription management.",
    },
    {
      icon: "🏢",
      title: "MULTI-LOCATION SUPPORT",
      desc: "Manage multiple hospitals and clinics from a single centralized platform.",
    },
    {
      icon: "📊",
      title: "ADVANCED ANALYTICS",
      desc: "Real-time dashboards, custom reports, and KPI tracking for better decision making.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Everything you need to run a HEALTHCARE EMPIRE
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A complete suite of tools engineered for the unique complexities of the healthcare industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              {/* ICON BOX (THIS IS IMPORTANT FIX) */}
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 text-xl">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-semibold text-gray-900 tracking-wide mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureHighlightSection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - Dashboard */}
        <div className="relative flex justify-center">

          {/* Background Glow */}
          <div className="absolute w-[90%] h-[90%] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-3xl opacity-40"></div>

          {/* Main Image */}
          <img
            src="/H.jpeg"
            alt="Dashboard"
            className="relative rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-3 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-[#0d3b75] text-white px-3 sm:px-6 py-2.5 sm:py-4 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 max-w-[calc(100%-1rem)]">
            <span className="text-base sm:text-lg shrink-0">📈</span>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs opacity-80">Insight</p>
              <p className="text-xs sm:text-sm font-medium truncate">40% Efficiency Gain</p>
            </div>
          </div>

        </div>

        {/* RIGHT - Content */}
        <div>

          {/* Label */}
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            FEATURES
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
            Best Hospital Management Software in India
          </h2>

          {/* Description */}
          <div className="text-gray-600 text-[15px] leading-relaxed">
            <p className="mb-4">Managing a healthcare facility requires precision. From tracking patient records to maintaining secure medical data, generic hospital management systems fall short.</p>

            <p className="mb-4">CuraBiz is engineered from the ground up to be the ultimate hospital ERP and management software. Whether you run a single clinic or a multi-city hospital chain, our cloud-based platform ensures your data is secure, accessible, and actionable.</p>

            <p>Features like integrated EMR, laboratory management, and financial control make CuraBiz the preferred choice for modern healthcare providers looking to scale.</p>
          </div>

        </div>

      </div>
    </section>
  );
}


function CTAFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is CuraBiz suitable for small clinics?",
      a: "Yes, CuraBiz scales from single clinics to large multi-specialty hospitals with flexible modules and pricing.",
    },
    { q: "Does it support laboratory integration?", a: "" },
    { q: "What about data security and compliance?", a: "" },
    { q: "Can it handle multiple locations?", a: "" },
    { q: "Is training and support included?", a: "" },
    { q: "Is there a mobile app for doctors?", a: "" },
  ];

  return (
    <section className="w-full">

      {/* 🔵 CTA SECTION */}
      <div className="w-full bg-gradient-to-r from-[#0d3b75] to-[#1e5eff] py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Modernize Your Operations?
          </h2>

          <p className="text-blue-100 mb-8">
            Join leading hospitals who have increased their efficiency by 40% with CuraBiz.
          </p>

          <Link to="/contact" className="bg-white text-[#0d3b75] px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition">
            Request Demo
          </Link>

        </div>
      </div>

      {/* ⚪ FAQ SECTION */}
      <div className="w-full bg-[#f3f6fb] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>

            <p className="text-gray-500 mb-6">
              Have any questions about our hospital management system? You're in the right place.
            </p>

            <Link to="/contact" className="bg-[#0d3b75] text-white px-5 py-2 rounded-md text-sm inline-block">
              VIEW ALL FAQ
            </Link>
          </div>

          {/* RIGHT SIDE (Accordion) */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-gray-300 pb-4"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? -1 : i)
                  }
                  className="w-full flex justify-between items-center text-left gap-4 min-h-[48px] py-3"
                >
                  <span className="text-gray-800 font-medium">
                    {item.q}
                  </span>
                  <span className="text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {openIndex === i && item.a && (
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {item.a}
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
