import React from 'react';
import { Shield, Database, Globe, FileText, Users, Package, ShoppingCart, Building2, Receipt, BarChart3, Store, TrendingUp, Smartphone, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function XRetailERP() {
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
            Retail Management Software
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            A complete suite of tools to scale your retail empire and unify operations.
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
                src="/dashboards/retail.html"
                title="RetailBiz Dashboard"
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
            Built for Every Retail Business Model
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Whether you run a single boutique or a multi-chain retail empire, our software adapts to your workflow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

          {/* Multi-Chain Retailers */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Store className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Multi-Chain Retailers</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Centralized operations, multi-store visibility, and inventory analytics for complex retail environments.
            </p>
          </div>

          {/* E-commerce Stores */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">E-commerce Stores</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Online inventory management, order processing, and integration with marketplaces and shipping platforms.
            </p>
          </div>

          {/* Boutiques & Specialty Stores */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Boutiques & Specialty Stores</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Fast POS, customer management, and specialized inventory for boutique retail operations.
            </p>
          </div>

          {/* HR Consultancy Firms */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">HR Consultancy Firms</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Workforce management, payroll processing, and recruitment solutions for scaling retail networks.
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
            <span className="text-blue-600">The Modern Retail Way</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing sales to operational chaos. Upgrade to a system that works as flawlessly as your retail business.
          </p>
        </div>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

          {/* LEFT - Modern Retail */}
          <div className="bg-gradient-to-b from-[#1e5eff] to-[#0d3b75] text-white p-10">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              MODERN RETAIL ERP
            </h3>

            <ul className="space-y-5 text-sm">
              {[
                "Real-time, accurate inventory tracking",
                "Integrated POS and online sales channels",
                "Automated reordering and stock alerts",
                "Centralized customer management",
                "Complete sales analytics and reporting",
                "Multi-store inventory synchronization",
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

          {/* RIGHT - Traditional */}
          <div className="bg-white p-10">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 tracking-wide">
              TRADITIONAL METHODS
            </h3>

            <ul className="space-y-5 text-sm text-gray-600">
              {[
                "Manual inventory leads to stockouts and overstocking",
                "Disconnected POS and online systems",
                "No real-time visibility across stores",
                "Limited customer insights and tracking",
                "Manual reporting and data entry errors",
                "Siloed operations across locations",
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
  const [activeTab, setActiveTab] = useState("operations");

  const operations = [
    ["Point of Sale (POS)", "Fast, reliable POS system with barcode scanning, multiple payment methods, and receipt printing.", ShoppingCart],
    ["Inventory Management", "Real-time stock tracking, automated reordering, and multi-location inventory control.", Package],
    ["Customer Management", "Complete customer profiles, purchase history, loyalty programs, and targeted marketing.", Users],
    ["Supplier Management", "Vendor relationships, purchase orders, and automated procurement workflows.", Building2],
    ["Multi-Store Operations", "Manage multiple retail locations from a single dashboard with centralized control.", Store],
    ["E-commerce Integration", "Seamless integration with online stores, marketplaces, and shipping platforms.", Globe],
    ["Reporting & Analytics", "Sales reports, inventory analytics, customer insights, and business intelligence.", BarChart3],
    ["Mobile App Support", "Access your retail operations on-the-go with our mobile management app.", Smartphone],
  ];

  const financial = [
    ["Sales & Revenue Tracking", "Complete sales tracking, revenue analysis, and performance metrics across all channels.", Receipt],
    ["Financial Control", "Expense management, profit analysis, and comprehensive financial reporting.", TrendingUp],
    ["Tax Management", "Automated tax calculations, multi-tax support, and compliance reporting.", FileText],
    ["Payroll Integration", "Staff scheduling, payroll processing, and performance management.", Users],
    ["Cost Analysis", "Detailed cost tracking, margin analysis, and profitability insights.", BarChart3],
    ["Budget Planning", "Annual budgeting, forecast planning, and financial goal tracking.", Database],
    ["Audit Trails", "Complete transaction history, audit logs, and compliance documentation.", Shield],
    ["Payment Processing", "Multiple payment gateways, secure transactions, and automated reconciliation.", CreditCard],
  ];

  const data = activeTab === "operations" ? operations : financial;

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Powerful Features for Every Retail Operation
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing efficiency to operational chaos. Upgrade to a system that works flawlessly.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("operations")}
              className={`px-6 py-2 text-sm rounded-full transition ${activeTab === "operations"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
                }`}
            >
              Operations & Sales
            </button>

            <button
              onClick={() => setActiveTab("financial")}
              className={`px-6 py-2 text-sm rounded-full transition ${activeTab === "financial"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
                }`}
            >
              Financial & Analytics
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

                  {/* ICON */}
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
                    {React.createElement(Icon, { className: "w-5 h-5 text-blue-600" })}
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

function FeaturesGridSection() {
  const features = [
    {
      icon: "🛍️",
      title: "POINT OF SALE",
      desc: "Advanced POS system with barcode scanning, multiple payment options, and instant receipt generation.",
    },
    {
      icon: "📦",
      title: "INVENTORY CONTROL",
      desc: "Real-time stock tracking, automated reordering, and multi-location inventory management.",
    },
    {
      icon: "👥",
      title: "CUSTOMER CRM",
      desc: "Complete customer relationship management with loyalty programs and purchase history.",
    },
    {
      icon: "📊",
      title: "SALES ANALYTICS",
      desc: "Comprehensive sales reporting, trend analysis, and business intelligence dashboard.",
    },
    {
      icon: "🏪",
      title: "MULTI-STORE SUPPORT",
      desc: "Manage multiple retail locations from a single centralized platform.",
    },
    {
      icon: "🌐",
      title: "E-COMMERCE INTEGRATION",
      desc: "Seamless integration with online stores and marketplace platforms.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Everything you need to run a RETAIL EMPIRE
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A complete suite of tools engineered for the unique complexities of the retail industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              {/* ICON BOX */}
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
            src="/R.jpeg"
            alt="Dashboard"
            className="relative rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0d3b75] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-lg">📈</span>
            <div>
              <p className="text-xs opacity-80">Insight</p>
              <p className="text-sm font-medium">45% Sales Growth</p>
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
            Best Retail Management Software in India
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Managing a retail business requires precision. From tracking inventory to managing customer relationships, generic retail systems fall short.
            <br /><br />
            Our Retail ERP is engineered from the ground up to be the ultimate retail management solution. Whether you run a single boutique or a multi-city retail chain, our cloud-based platform ensures your data is secure, accessible, and actionable.
            <br /><br />
            Features like integrated POS, inventory management, and customer CRM make our software the preferred choice for modern retailers looking to scale.
          </p>

        </div>

      </div>
    </section>
  );
}

function CTAFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is your retail software suitable for small boutiques?",
      a: "Yes, our software scales from single boutiques to large multi-chain retail stores with flexible modules and pricing.",
    },
    { q: "Does it support e-commerce integration?", a: "" },
    { q: "What about multi-store inventory management?", a: "" },
    { q: "Can it handle multiple payment methods?", a: "" },
    { q: "Is training and support included?", a: "" },
    { q: "Does it support barcode generation and scanning?", a: "" },
  ];

  return (
    <section className="w-full">

      {/* CTA SECTION */}
      <div className="w-full bg-gradient-to-r from-[#0d3b75] to-[#1e5eff] py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Modernize Your Retail Operations?
          </h2>

          <p className="text-blue-100 mb-8">
            Join leading retailers who have increased their sales by 45% with our Retail ERP.
          </p>

          <Link to="/contact" className="bg-white text-[#0d3b75] px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition">
            Request Demo
          </Link>

        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-full bg-[#f3f6fb] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>

            <p className="text-gray-500 mb-6">
              Have any questions about our retail management system? You're in the right place.
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
