import { Globe, Users, Package, Receipt, BarChart3, Stethoscope, Building, Syringe, Pill, TestTube, Microscope, Ambulance, Calendar, TrendingUp, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function XCuraHMS() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BusinessModelSection />
      <ComparisonSection />
      <FeaturesSection />
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

        {/* Dashboard Visualization - Expansive Wide-screen Layout (Now Unconstrained) */}
        <div className="w-full mt-12 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="w-full p-2 md:p-3 bg-white rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-gray-100">
            <div className="w-full overflow-hidden rounded-[1.5rem] bg-gray-50">
              <iframe
                src="/dashboards/hospital.html"
                title="CuraBiz Hospital Dashboard"
                className="w-full border-none h-[1200px] md:h-[850px]"
                style={{
                  display: 'block'
                }}
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Multi-Specialty Hospitals</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Centralized operations, multi-branch visibility, and clinical analytics for complex healthcare environments.
            </p>
          </div>

          {/* Diagnostic Labs */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Diagnostic Labs</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Sample lifecycle, machine integration, reporting, and billing automation for laboratory operations.
            </p>
          </div>

          {/* Clinics & Day Care */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Clinics & Day Care</h3>
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
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            The Old Way vs.{" "}
            <span className="text-blue-600">The CuraBiz Way</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing efficiency to operational chaos. Upgrade to a system that works as flawlessly as your healthcare facility.
          </p>
        </div>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

          {/* LEFT - CuraBiz */}
          <div className="bg-gradient-to-b from-[#1e5eff] to-[#0d3b75] text-white p-10">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              CURABIZ
            </h3>

            <ul className="space-y-5 text-sm">
              {[
                "Real-time, accurate patient tracking",
                "Live appointment scheduling and queue management",
                "Error-free billing and insurance processing",
                "Centralized control across all departments",
                "Fully integrated EMR, billing & pharmacy",
                "Complete visibility into lab and radiology workflows",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    ✓
                  </span>
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - Competitors */}
          <div className="bg-white p-10">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 tracking-wide">
              COMPETITORS
            </h3>

            <ul className="space-y-5 text-sm text-gray-600">
              {[
                "Manual patient records lead to data mismatches",
                "Scheduling errors reduce patient satisfaction",
                "No real-time visibility across departments",
                "Disconnected tools for billing, EMR, and pharmacy",
                "Limited control over lab and radiology workflows",
                "No automated backup leading to data security risks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("clinical");

  const clinical = [
    ["Patient Management", "Complete registration, EMR, vitals, pediatric growth charts, and visit history.", Users],
    ["Appointment & Queue System", "Online booking, smart token management, patient portal, SMS & email alerts.", Calendar],
    ["OPD Management", "Consultation billing, diagnostics, and daily transaction tracking.", Stethoscope],
    ["IPD Management", "ADT (Admission-Discharge-Transfer), bed & ward control, package billing, insurance cycles.", Building],
    ["Laboratory & Diagnostics", "Integrated LIS, sample tracking, automated PDF reports, and radiology workflows.", TestTube],
    ["Pharmacy Management", "Inventory control, batch & expiry tracking, billing, and multi-store pharmacy operations.", Pill],
    ["Emergency & Ambulance", "Emergency care management, ambulance tracking, and critical care workflows.", Ambulance],
    ["Doctor Workflows", "Specialized workflows for different departments, prescription management, and clinical notes.", Syringe]
  ];

  const administrative = [
    ["Billing & Insurance", "Integrated billing, insurance claims, GST, receivables, and doctor payouts.", Receipt],
    ["Financial Control", "Complete accounting, ledgers, expense tracking, and financial reporting.", TrendingUp],
    ["Staff Management", "Employee records, scheduling, payroll, and performance tracking.", Users],
    ["Inventory Management", "Medical supplies, equipment tracking, and automated reordering.", Package],
    ["Compliance & Security", "HIPAA compliance, data security, audit trails, and regulatory reporting.", Shield],
    ["Multi-Location Support", "Manage multiple facilities from a single platform with centralized control.", Building],
    ["Analytics & Reporting", "Custom reports, dashboards, KPI tracking, and business intelligence.", BarChart3],
    ["Integration APIs", "HL7, FHIR, and third-party system integrations for seamless data flow.", Globe]
  ];

  const data = activeTab === "clinical" ? clinical : administrative;

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Powerful Features for Every Operation
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing efficiency to operational chaos. Upgrade to a system that works flawlessly.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("clinical")}
              className={`px-6 py-2 text-sm rounded-full transition ${activeTab === "clinical"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
                }`}
            >
              Clinical & Patient Care
            </button>

            <button
              onClick={() => setActiveTab("administrative")}
              className={`px-6 py-2 text-sm rounded-full transition ${activeTab === "administrative"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
                }`}
            >
              Administrative & Financial
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map(([itemTitle, itemDesc, itemIcon], i) => {
            const Title = itemTitle as string;
            const Desc = itemDesc as string;
            const Icon = itemIcon as any;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">

                  {/* ICON (FIXED) */}
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap truncate" title={Title}>{Title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{Desc}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

{/* ... redundant components removed for brevity ... */ }

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
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0d3b75] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-lg">📈</span>
            <div>
              <p className="text-xs opacity-80">Insight</p>
              <p className="text-sm font-medium">40% Efficiency Gain</p>
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
                  className="w-full flex justify-between items-center text-left"
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
