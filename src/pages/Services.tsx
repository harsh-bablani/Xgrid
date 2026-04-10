import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ShieldCheck, Cloud, Zap, Users, Truck } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesAboutSection />
      <ProcessSection />
      <WhyChooseSection />
      {/* More sections will be added here later */}
    </div>
  );
}

function WhyChooseSection() {
  const features = [
    {
      icon: Briefcase,
      title: "Industry-Specific ERP Expertise",
      desc: "Deep domain knowledge tailored across multiple sectors.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliance-Ready",
      desc: "Built with enterprise-grade security standards you can trust.",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Solutions",
      desc: "Flexible platforms designed to grow seamlessly with your business.",
    },
    {
      icon: Zap,
      title: "High Performance & Analytics",
      desc: "Instant, actionable insights for faster decision-making.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Long-term partnership—we are committed to being with you every step of the way.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-4">
            What makes SlateBiz different from the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                {/* ICON BOX */}
                <div className="w-12 h-12 bg-[#f3f0ff] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {React.createElement(item.icon, { className: "w-5 h-5 text-[#6d5cff]" })}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
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

function ServicesHero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'From Idea to Scalable Product — We Build What Your Business Needs';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-28 px-4 relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/herobg.png)' }}
      />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight min-h-[90px] md:min-h-[120px]">
          {displayedText}
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
          From idea validation to full-scale deployment, SlateBiz delivers scalable digital solutions across SaaS,
          retail, healthcare, and enterprise systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          {/* Primary */}
          <Link to="/contact" className="bg-[#2563eb] text-white px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition">
            START YOUR PROJECT
          </Link>

          {/* Secondary */}
          <Link to="/contact" className="border border-blue-300 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
            BOOK A DEMO
          </Link>

        </div>

      </div>
    </section>
  );
}

function ServicesAboutSection() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
            Not Just Development. We <br />
            Solve Business Problems.
          </h2>

          <p className="text-gray-600 mb-4">
            At SlateBiz, we partner with businesses to transform ideas into scalable digital products.
          </p>

          <p className="text-gray-600 mb-4">
            From initial concept and UX design to full-stack development and deployment, we build systems that are reliable, secure, and built for growth.
          </p>

          <p className="text-gray-600">
            Our approach focuses on solving real business problems — ensuring every product we build is optimized for performance, usability, and long-term scalability.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* IMAGE (barcode.png) */}
          <div className="w-full max-w-[420px] h-auto rounded-xl overflow-hidden shadow-md relative">
            <img
              src="/barcode.png"
              alt="Barcode Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-5 flex flex-col items-center text-center w-[220px]">
            
            {/* Icon */}
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-3">
              <Truck className="w-5 h-5 text-white" />
            </div>

            {/* Text */}
            <h4 className="font-semibold text-gray-900 text-sm">
              Seamless
            </h4>
            <p className="text-gray-500 text-xs mt-1">
              Unified
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "IDENTIFY WHAT'S ACTUALLY BROKEN",
      desc: "We deep-dive into your current operations to uncover inefficiencies, bottlenecks, and missed opportunities. Whether it's inventory gaps, poor customer tracking, or disconnected systems — we define the real problem before building anything.",
    },
    {
      number: "02",
      title: "TURN PROBLEMS INTO SCALABLE SOLUTIONS",
      desc: "Once problem is clear, we design a solution tailored to your business. This includes defining workflows, features, and system architecture that align with your long-term goals.",
    },
    {
      number: "03",
      title: "PLAN FOR SCALE, NOT JUST LAUNCH",
      desc: "We create a detailed execution plan covering timelines, tech stack, integrations, and scalability. Every decision is made to ensure your system grows with your business.",
    },
    {
      number: "04",
      title: "DESIGN SYSTEMS THAT PEOPLE ACTUALLY USE",
      desc: "We design intuitive, user-friendly interfaces that simplify complex workflows — ensuring your team and customers can use the system effortlessly.",
    },
    {
      number: "05",
      title: "BUILD ROBUST, SCALABLE SYSTEMS",
      desc: "Our engineering team develops high-performance systems with secure architecture, seamless integrations, and optimized performance.",
    },
    {
      number: "06",
      title: "LAUNCH, OPTIMIZE, AND SCALE",
      desc: "After deployment, we continuously monitor, optimize, and enhance your system — helping you scale operations without friction.",
      cta: true,
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-base md:text-lg tracking-widest font-semibold text-blue-800 mb-3 uppercase">
            OUR PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Approach: From Problem to Scale
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2"></div>

          <div className="space-y-20">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-10 items-center relative"
                >

                  {/* LEFT SIDE */}
                  {isLeft ? (
                    <>
                      {/* TEXT */}
                      <div className="text-right md:pr-12">
                        <p className="text-gray-900 text-3xl font-semibold mb-2">
                          {step.number}
                        </p>
                        <h3 className="text-blue-600 font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {step.desc}
                        </p>

                        {step.cta && (
                          <Link to="/contact" className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-md inline-block">
                            START SCALING TODAY
                          </Link>
                        )}
                      </div>

                      {/* IMAGE */}
                      <div className="md:pl-12">
                        <img
                          src={`/S${i + 1}.png`}
                          alt="process"
                          className="rounded-lg shadow-md w-full max-w-[420px]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* IMAGE */}
                      <div className="md:pr-12 order-2 md:order-1">
                        <img
                          src={`/S${i + 1}.png`}
                          alt="process"
                          className="rounded-lg shadow-md w-full max-w-[420px]"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="text-left md:pl-12 order-1 md:order-2">
                        <p className="text-gray-900 text-3xl font-semibold mb-2">
                          {step.number}
                        </p>
                        <h3 className="text-blue-600 font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {step.desc}
                        </p>

                        {step.cta && (
                          <Link to="/contact" className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-md inline-block">
                            START SCALING TODAY
                          </Link>
                        )}
                      </div>
                    </>
                  )}

                  {/* DOT */}
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow"></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
