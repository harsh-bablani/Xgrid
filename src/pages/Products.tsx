import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Innovating Tomorrow, Building Today";

  useEffect(() => {
    // setIsVisible(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/herobg.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            {/* Animated Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              {animatedText}
              <span className="inline-block w-1 h-12 bg-blue-600 ml-1 animate-pulse"></span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              All-in-one business management software combining CRM, inventory, billing, and AI-powered automation — built for modern companies ready to scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                START SCALING TODAY
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                BOOK A DEMO
              </Link>
            </div>

            {/* Second Headline */}
            <div className="pt-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                One Platform, Endless Control
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Run Your Entire Business from One Powerful Platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Feature Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              One Platform, Endless Control
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Run Your Entire Business from One Powerful Platform
            </p>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Left Card - Zero-Latency Operations */}
            <div className="bg-white rounded-xl p-6 shadow-sm" style={{ borderRadius: '12px' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#e6f0ff' }}>
                <div className="w-6 h-6 rounded" style={{ backgroundColor: '#0d3b75' }}></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Zero-Latency Operations
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Experience lightning-fast performance even with large databases exceeding 100,000+ SKUs. Our cloud-native architecture ensures real-time processing and uninterrupted workflows.
              </p>
            </div>

            {/* Middle Card - Customer Relationship Management */}
            <div className="bg-white rounded-xl p-6 shadow-sm" style={{ borderRadius: '12px' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#e6f0ff' }}>
                <div className="w-6 h-6 rounded" style={{ backgroundColor: '#0d3b75' }}></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Customer Relationship Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Build stronger customer relationships with integrated CRM tools, purchase history tracking, and intelligent engagement insights.
              </p>

              {/* Skeleton Loading UI */}
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded" style={{ width: '100%' }}></div>
                <div className="h-2 bg-gray-200 rounded" style={{ width: '80%' }}></div>
                <div className="h-2 bg-gray-200 rounded" style={{ width: '60%' }}></div>
                <div className="h-16 bg-gray-100 rounded mt-3"></div>
              </div>
            </div>

            {/* Right Card - GST Billing & Accounting Software (Highlighted) */}
            <div className="rounded-xl p-6 shadow-lg text-white" style={{ backgroundColor: '#0d3b75', borderRadius: '12px' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded bg-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                GST Billing & Accounting Software
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Simplify financial operations with automated GST calculations, invoicing, and expense tracking — fully compliant with Indian tax systems.
              </p>

              {/* Dashboard UI Mock - Taller */}
              <div className="h-48 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="h-8 bg-white/10 rounded"></div>
                    <div className="h-8 bg-white/10 rounded"></div>
                    <div className="h-8 bg-white/10 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/20 rounded" style={{ width: '100%' }}></div>
                    <div className="h-3 bg-white/20 rounded" style={{ width: '85%' }}></div>
                    <div className="h-3 bg-white/20 rounded" style={{ width: '70%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-20 bg-white/10 rounded"></div>
                    <div className="h-20 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Bottom Left - Inventory Management System */}
            <div className="bg-white rounded-xl p-6 shadow-sm" style={{ borderRadius: '12px' }}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#e6f0ff', color: '#0d3b75' }}>
                GST-READY
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Inventory Management System
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Stay ahead with real-time stock tracking, automated alerts, batch management, and smart reordering systems designed for growing businesses.
              </p>
            </div>

            {/* Bottom Middle - Dashboard Image */}
            <div className="rounded-xl shadow-sm overflow-hidden" style={{ borderRadius: '12px' }}>
              <div className="h-full bg-gray-900 p-6">
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-2 bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-700 rounded"></div>
                    <div className="h-2 bg-blue-500 rounded"></div>
                  </div>
                  <div className="h-32 bg-gray-800 rounded"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-gray-800 rounded"></div>
                    <div className="h-16 bg-gray-800 rounded"></div>
                    <div className="h-16 bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Feature Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - Dashboard Image with Floating Elements */}
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{ borderRadius: '16px' }}>
                <img
                  src="/Dashboard.png"
                  alt="Jewellery Management Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card on Left */}
              <div className="hidden sm:block absolute top-8 left-2 md:-left-4 bg-white rounded-xl shadow-md p-4" style={{ borderRadius: '12px' }}>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '120px' }}></div>
                  <div className="h-2 bg-gray-100 rounded" style={{ width: '80px' }}></div>
                  <div className="h-16 bg-gray-50 rounded mt-2"></div>
                </div>
              </div>

              {/* Vertical Workflow Card on Right */}
              <div className="hidden sm:block absolute top-1/2 right-2 md:-right-4 -translate-y-1/2 bg-white rounded-xl shadow-md p-4" style={{ borderRadius: '12px' }}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm max-w-[calc(100%-1rem)]" style={{ background: 'linear-gradient(to right, #1e5eff, #0d3b75)' }}>
                <span className="text-xs font-medium">Insight</span>
                <span className="text-sm font-medium">24% Efficiency Gain</span>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div className="space-y-6">
              {/* Label */}
              <div className="uppercase tracking-widest text-xs font-semibold" style={{ color: '#2563eb', fontFamily: 'Inter, system-ui, sans-serif' }}>
                JEWELLERY MANAGEMENT SOFTWARE
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight" style={{ color: '#111', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Jewellery Store Management Software
              </h2>

              {/* Description */}
              <p className="text-lg leading-relaxed" style={{ color: '#6b7280', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '80%' }}>
                Complete jewellery management solution with inventory tracking, billing, karigar management, and retail analytics. Streamline your operations with our comprehensive ERP system designed specifically for jewellery businesses.
              </p>

              {/* CTA */}
              <Link to="/xjewel-erp" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group" style={{ color: '#2563eb', fontFamily: 'Inter, system-ui, sans-serif' }}>
                LEARN MORE
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second SaaS Feature Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - Content (Reversed Layout) */}
            <div className="space-y-6">
              {/* Label */}
              <div className="uppercase tracking-widest text-xs font-semibold" style={{ color: '#2563eb', fontFamily: 'Inter, system-ui, sans-serif' }}>
                HOSPITAL MANAGEMENT SOFTWARE
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight" style={{ color: '#111', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Complete Healthcare Management System
              </h2>

              {/* Description */}
              <p className="text-lg leading-relaxed" style={{ color: '#6b7280', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '80%' }}>
                Comprehensive hospital management solution with patient records, pharmacy management, billing, appointments, and operational dashboards. Transform your healthcare facility with our integrated HMS platform.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Multi-Store Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>POS Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Customer Loyalty</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/xcurabiz-hms" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group" style={{ color: '#2563eb', fontFamily: 'Inter, system-ui, sans-serif' }}>
                EXPLORE FEATURES
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* RIGHT SIDE - Dashboard Image with Floating Elements */}
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{ borderRadius: '16px' }}>
                <img
                  src="/Dashboard.png"
                  alt="Hospital Management Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card on Left */}
              <div className="hidden sm:block absolute top-8 left-2 md:-left-4 bg-white rounded-xl shadow-md p-4" style={{ borderRadius: '12px' }}>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '120px' }}></div>
                  <div className="h-2 bg-gray-100 rounded" style={{ width: '80px' }}></div>
                  <div className="h-16 bg-gray-50 rounded mt-2"></div>
                </div>
              </div>

              {/* Vertical Workflow Card on Right */}
              <div className="hidden sm:block absolute top-1/2 right-2 md:-right-4 -translate-y-1/2 bg-white rounded-xl shadow-md p-4" style={{ borderRadius: '12px' }}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm max-w-[calc(100%-1rem)]">
                <span className="text-xs font-medium">Success Rate</span>
                <span className="text-sm font-medium">98.5%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third SaaS Feature Showcase Section - Copy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - Dashboard Image with Floating Elements */}
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{ borderRadius: '16px' }}>
                <img
                  src="/Dashboard.png"
                  alt="Management Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card on Left */}
              <div className="hidden sm:block absolute top-8 left-2 md:-left-4 bg-white rounded-xl shadow-md p-4" style={{ borderRadius: '12px' }}>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '120px' }}></div>
                  <div className="h-2 bg-gray-100 rounded" style={{ width: '80px' }}></div>
                  <div className="h-16 bg-gray-50 rounded mt-2"></div>
                </div>
              </div>

              {/* Vertical Workflow Card on Right */}
              <div className="hidden sm:block absolute top-1/2 right-2 md:-right-4 -translate-y-1/2 bg-white rounded-xl shadow-md p-4" style={{ borderRadius: '12px' }}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded" style={{ width: '60px' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm max-w-[calc(100%-1rem)]" style={{ background: 'linear-gradient(to right, #1e5eff, #0d3b75)' }}>
                <span className="text-xs font-medium">Insight</span>
                <span className="text-sm font-medium">24% Efficiency Gain</span>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div className="space-y-6">
              {/* Label */}
              <div className="uppercase tracking-widest text-xs font-semibold" style={{ color: '#2563eb', fontFamily: 'Inter, system-ui, sans-serif' }}>
                RETAIL MANAGEMENT SOFTWARE
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight" style={{ color: '#111', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Complete Retail Management Solution
              </h2>

              {/* Description */}
              <p className="text-lg leading-relaxed" style={{ color: '#6b7280', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '80%' }}>
                Comprehensive retail management system with inventory tracking, POS integration, customer loyalty programs, and multi-store management. Transform your retail operations with our integrated platform.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Patient Records Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Pharmacy & Inventory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Billing & Insurance</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/xretail-erp" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group" style={{ color: '#2563eb', fontFamily: 'Inter, system-ui, sans-serif' }}>
                LEARN MORE
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#0d3b75] to-[#1e5eff] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Run Your Business Smarter with One <br className="hidden md:block" />
            Powerful System
          </h2>

          {/* Subtext */}
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the hundreds of businesses scaling their operations with
            precision and ease. Ready for a walkthrough?
          </p>

          {/* Button */}
          <Link to="/contact" className="bg-white text-[#0d3b75] font-medium px-8 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
            Book Demo
          </Link>

        </div>
      </section>
    </div>
  );
}
