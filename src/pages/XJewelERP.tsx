import { TrendingUp, Package, Barcode, ShoppingCart, Users, Building2, Receipt, BarChart3, Store, Wrench, UserPlus, ClipboardCheck, ReceiptText, ShieldCheck, Factory } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function XJewelERP() {
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
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/40"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full text-center">
        {/* Text Section - Constrained for readability */}
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Jewellery Management Software
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Precision-engineered ERP for modern jewellers, manufacturers, and wholesalers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg">
              Get Started
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition">
              Book Demo
            </Link>
          </div>
        </div>

        {/* Dashboard Visualization - Expansive Wide-screen Layout (Now Unconstrained) */}
        <div className="w-full mt-12 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="w-full p-2 md:p-3 bg-white rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-gray-100">
            <div className="w-full overflow-hidden rounded-[1.5rem] bg-gray-50">
              <iframe
                src="/dashboards/jewel.html"
                title="JewelBiz Dashboard"
                className="w-full border-none"
                style={{
                  height: '850px',
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

function ComparisonSection() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            The Old Way vs.{" "}
            <span className="text-blue-600">The Slatebiz Way</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing margins to operational chaos. Upgrade to a system that
            works as flawlessly as the jewellery you sell.
          </p>
        </div>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

          {/* LEFT - Slatebiz */}
          <div className="bg-gradient-to-b from-[#1e5eff] to-[#0d3b75] text-white p-10">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              SLATEBIZ
            </h3>

            <ul className="space-y-5 text-sm">
              {[
                "Real-time, accurate inventory tracking",
                "Live gold & silver rate-based billing",
                "Error-free pricing & calculations",
                "Centralized control across all stores",
                "Fully integrated CRM, billing & inventory",
                "Complete visibility into manufacturing & job work",
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
                "Manual inventory tracking leads to stock mismatches",
                "Pricing errors in gold & diamonds reduce profitability",
                "No real-time visibility across stores",
                "Disconnected tools for billing, CRM, and inventory",
                "Limited control over karigar and production workflows",
                "Slow gold rate updates cause pricing discrepancies",
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
  const [activeTab, setActiveTab] = useState("backoffice");

  const backoffice = [
    ["Jewellery Inventory Management", "Track every piece with precision, from raw materials to finished goods.", Package],
    ["Barcode / RFID Management", "Automate stock taking and billing with advanced barcode and RFID integration.", Barcode],
    ["Procurement Management", "Streamline vendor orders, purchase invoices, and metal rate calculations.", ShoppingCart],
    ["CRM for Jewellery Business", "Build lasting relationships with customer purchase history and preferences.", Users],
    ["Karigar / Job Work Management", "Monitor job status, metal issued, and labor charges for every karigar.", Wrench],
    ["Multi-Branch Management", "Centralize control across all your retail showrooms and manufacturing units.", Building2],
    ["GST, TDS & Tax Management", "Stay compliant with automated GST calculations and tax reporting.", Receipt],
    ["Stock Valuation System", "Get real-time valuation of your inventory based on current market rates.", TrendingUp]
  ];

  const pos = [
    ["Billing", "Fast, accurate quotes and tax-compliant invoices.", Receipt],
    ["Repair Management", "Track customer repairs from receipt to delivery.", Wrench],
    ["Discount Management", "Configurable discount rules and approval workflows.", TrendingUp],
    ["Order Management", "Track custom orders and delivery timelines efficiently.", ShoppingCart],
    ["Customer Checks", "Credit limits and outstanding balance alerts at checkout.", Users],
    ["Buy Back & Exchange", "Handle old gold purchases and exchanges smoothly.", Package],
    ["Smart Pricing Engine", "Handle rate/gm, making %, wastage, and piece-rate charges.", TrendingUp],
    ["Instant KYC", "Integrated verification without scanning documents.", Users]
  ];

  const data = activeTab === "backoffice" ? backoffice : pos;

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Powerful Features for Every Operation
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stop losing margins to operational chaos. Upgrade to a system that works flawlessly.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("backoffice")}
              className={`px-6 py-2 text-sm rounded-full transition ${activeTab === "backoffice"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
                }`}
            >
              Backoffice & Inventory
            </button>

            <button
              onClick={() => setActiveTab("pos")}
              className={`px-6 py-2 text-sm rounded-full transition ${activeTab === "pos"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
                }`}
            >
              POS & Sales
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

function FeaturesGridSection() {
  const features = [
    {
      icon: ClipboardCheck,
      title: "INVENTORY MANAGEMENT",
      desc: "Track loose diamonds, gemstones, and finished jewellery with RFID and barcode support.",
    },
    {
      icon: ReceiptText,
      title: "SMART POS BILLING",
      desc: "Generate GST-compliant invoices instantly with live gold and silver rate calculations.",
    },
    {
      icon: UserPlus,
      title: "CLIENTELING & CRM",
      desc: "Remember anniversaries, track preferences, and build lasting relationships with VIP clients.",
    },
    {
      icon: ShieldCheck,
      title: "MANUFACTURING TRACKING",
      desc: "Monitor karigar (artisan) work, track metal loss, and manage job work seamlessly.",
    },
    {
      icon: Building2,
      title: "MULTI-STORE SYNC",
      desc: "Manage multiple retail outlets and centralize data in real-time from anywhere.",
    },
    {
      icon: BarChart3,
      title: "ADVANCED ANALYTICS",
      desc: "Visualize sales trends, fast-moving stock, and staff performance with custom reports.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Everything you need to run a JEWELLERY EMPIRE
          </h2>
          <p className="text-gray-500 mt-4 text-[15px] max-w-2xl mx-auto">
            A complete suite of tools engineered for the unique complexities of the jewellery industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)] transition"
              >
                {/* ICON BOX (FIXED PERFECTLY) */}
                <div className="w-12 h-12 bg-[#eef4ff] rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#2563eb]" />
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
            );
          })}
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
            src="/J.jpeg"
            alt="Dashboard"
            className="relative rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0d3b75] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-lg">📈</span>
            <div>
              <p className="text-xs opacity-80">Insight</p>
              <p className="text-sm font-medium">24% Efficiency Gain</p>
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
            Best Jewellery Management Software in India
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Managing a jewellery business requires precision. From tracking fluctuating gold and silver rates to maintaining a secure inventory of high-value items, generic retail POS systems fall short.
            <br /><br />
            Slatebiz is engineered from the ground up to be the ultimate jewellery ERP and management software. Whether you run a single boutique or a multi-city retail chain, our cloud-based platform ensures your data is secure, accessible, and actionable.
            <br /><br />
            Features like RFID auditing, karigar management, and integrated accounting make Slatebiz the preferred choice for modern jewellers looking to scale.
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
      q: "How do you ensure the security of our data?",
      a: "Data security is a top priority. We prioritise the security of your information by implementing industry-leading security measures. Additionally, all team members are bound by strict confidentiality agreements to ensure your privacy is always protected.",
    },
    {
      q: "Do you provide post-development support and maintenance?",
      a: "Absolutely! We understand the importance of ongoing support. We offer flexible maintenance plans to keep your project running smoothly.",
    },
    {
      q: "How quickly can you start a new project?",
      a: "Initiate your project with ease. Schedule a complimentary consultation through our website. We prioritize prompt communication and will respond within 2-3 business hours to discuss your project confidentially.",
    },
    {
      q: "Do you offer refunds?",
      a: "Refund policies depend on the terms and conditions of the subscription plan.",
    },
    {
      q: "How can I request a product demo?",
      a: "You can request a demo by filling out the demo request form on our website. Lets’s talk form",
    },
    {
      q: "Does it support RFID integration?",
      a: "Yes, SlateBiz fully supports RFID technology for rapid stock auditing and advanced inventory tracking.",
    },
  ];

  return (
    <section className="w-full">

      {/* 🔵 CTA SECTION */}
      <div className="w-full bg-gradient-to-r from-[#0d3b75] to-[#1e5eff] py-20 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal">
            Ready to Modernize Your Jewellery Business?
          </h2>

          <p className="text-blue-100 mb-8">
            Join hundreds of jewellers who have increased their efficiency by 40% with Slatebiz.
          </p>

          <Link to="/contact" className="bg-white text-[#0d3b75] px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition">
            Book Demo
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
              Have any questions about our gifts? You're in the right place.
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

function BusinessModelSection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-gray-900">
            Built for Every Jewellery Business Model
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Whether you run a single showroom or a massive manufacturing unit, Slatebiz adapts to your workflow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* Retail */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Store className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Retail Showrooms</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Manage multi-store inventory, fast billing, and customer relationships with real-time stock visibility.
            </p>
          </div>

          {/* Wholesalers */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Wholesalers</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Handle bulk inventory, approvals (jangad), B2B orders, and pricing structures efficiently.
            </p>
          </div>

          {/* Manufacturers */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-5">
              <Factory className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Manufacturers</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              Track karigar work, wastage, production stages, and job orders with absolute precision.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
