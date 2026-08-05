import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Cloud, Zap, Users, Twitter, Linkedin, Layers } from 'lucide-react';

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

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900 pb-12">
      {/* Top Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 text-[11px] font-semibold text-gray-900 uppercase tracking-widest mb-8">
              About Us
            </div>

            <h1 className="text-[38px] sm:text-[44px] lg:text-[50px] font-semibold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              Building Intelligent Digital Ecosystems for Modern Businesses
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 pb-6 leading-relaxed border-b border-gray-200">
              SlateBiz is a premium enterprise software and digital transformation company. We deliver intelligent, scalable, and secure technology solutions designed to simplify your operations, improve efficiency, and accelerate your growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white leading-none">
                  <CountUp end={10} suffix="+" />
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Year Old Company</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white leading-none">
                  <CountUp end={20} suffix="+" />
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Years Client Experience in Jewellery</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white leading-none">
                  <CountUp end={1.5} suffix="L+" decimals={1} />
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Invoices Handled</p>
              </div>
            </div>
          </div>

          <img
            src="/ab.png"
            alt="Business Ecosystem"
            className="w-full h-full min-h-[450px] sm:min-h-[550px] lg:h-[600px] rounded-[2rem] shadow-sm object-cover object-center"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src="/who.png"
            alt="About Team"
            className="w-full h-full min-h-[450px] sm:min-h-[550px] lg:h-[600px] rounded-[2rem] shadow-sm object-cover object-center"
          />

          {/* Right Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 text-[11px] font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-widest mb-4">
              Who We Are
            </div>

            <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 dark:text-white leading-[1.2] mb-6 tracking-tight">
              Who We Are
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              We specialize in building industry-specific Enterprise Resource Planning (ERP) systems and digital platforms.
              With a strong foundation in innovation and deep domain expertise, SlateBiz creates powerful software ecosystems.
              We help organizations streamline their workflows, manage data intelligently, and make faster, smarter business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-sm my-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
            What makes SlateBiz different from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
          {/* Card 1 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Building2 className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Industry-Specific ERP Expertise</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Deep domain knowledge tailored across multiple sectors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Shield className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure & Compliance-Ready</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Built with enterprise-grade security standards you can trust.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Cloud className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Scalable Cloud Solutions</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Flexible platforms designed to grow seamlessly with your business.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">High Performance & Analytics</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Instant, actionable insights for faster decision-making.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Users className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dedicated Support</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Long-term partnership—we are committed to being with you every step of the way.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Layers className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Seamless Integration</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Effortlessly connect with your favorite third-party tools and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* The Founders Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Images (Founders) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col h-full">
              <img
                src="/Umang Garg.png"
                alt="Umang Garg"
                className="w-full h-full min-h-[400px] sm:min-h-[500px] object-cover rounded-2xl shadow-sm"
                style={{ objectPosition: 'center top' }}
              />
              <div className="text-center mt-4">
                <span className="text-lg font-medium text-gray-900 dark:text-white">Umang Garg</span>
                <div className="flex justify-center items-center gap-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/garg-umang/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/Lokesh Sharma.png"
                alt="Lokesh Verma"
                className="w-full h-full min-h-[400px] sm:min-h-[500px] object-cover rounded-2xl shadow-sm"
                style={{ objectPosition: 'center top' }}
              />
              <div className="text-center mt-4">
                <span className="text-lg font-medium text-gray-900 dark:text-white">Lokesh Verma</span>
                <div className="flex justify-center items-center gap-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/lokesh-verma01/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <h2 className="text-[32px] sm:text-[38px] font-semibold text-gray-900 dark:text-white leading-[1.2] mb-6 tracking-tight">
              The Founders.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              We specialize in building industry-specific Enterprise Resource Planning (ERP) systems and digital platforms. With a strong foundation in innovation and deep domain expertise, SlateBiz creates powerful software ecosystems. We help organizations streamline their workflows, manage data intelligently, and make faster, smarter business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Passionate Team Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 dark:text-white leading-[1.2] mb-6 tracking-tight">
            Meet Our Passionate Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
            The talented individuals who drive our success and bring expertise to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-[1240px] mx-auto">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <img
                src="/Anil Chaudhary.png"
                alt="Anil Chaudhary"
                className="w-48 h-48 rounded-2xl shadow-lg object-contain mb-6"
              />
              <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white mb-2">
                Anil Chaudhary
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                Business Development Manager
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <img
                src="/Kunal Mathur.png"
                alt="Kuntal Mathur"
                className="w-48 h-48 rounded-2xl shadow-lg object-contain mb-6"
              />
              <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white mb-2">
                Kuntal Mathur
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                Project Manager
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <img
                src="/Urja Ramanandi.png"
                alt="Urja Ramanandi"
                className="w-48 h-48 rounded-2xl shadow-lg object-contain mb-6"
              />
              <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white mb-2">
                Urja Ramanandi
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24 bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-sm my-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
            What makes SlateBiz different from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
          {/* Card 1 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Building2 className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Industry-Specific ERP Expertise</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Deep domain knowledge tailored across multiple sectors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Shield className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure & Compliance-Ready</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Built with enterprise-grade security standards you can trust.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Cloud className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Scalable Cloud Solutions</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Flexible platforms designed to grow seamlessly with your business.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">High Performance & Analytics</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Instant, actionable insights for faster decision-making.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Users className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dedicated Support</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Long-term partnership—we are committed to being with you every step of the way.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#fcfdfd] border border-gray-100 dark:border-gray-700 dark:bg-gray-900/50 p-8 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center mb-6 text-indigo-500">
              <Layers className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Seamless Integration</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Effortlessly connect with your favorite third-party tools and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black overflow-hidden">
        {/* Background image & overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center text-white py-24 sm:py-32">
          <h2 className="text-[36px] sm:text-[42px] font-semibold mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Partner with SlateBiz to modernize your operations, enhance your customer
            experience, and achieve long-term success with a future-ready digital
            ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#0C69B6] border-2 border-[#0C69B6] hover:bg-blue-50 font-semibold text-[14px] tracking-widest uppercase rounded-lg shadow-sm transition-all transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
