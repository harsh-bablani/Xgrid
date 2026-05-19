import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: 'Are there any options to lower my costs?',
    answer:
      'If your organization handles repetitive tasks or accounting workflows, we can help automate them—saving time, reducing human effort, and lowering costs.',
  },
  {
    question: 'How do you ensure the security of our data?',
    answer:
      'Data security is a top priority. We prioritise the security of your information by implementing industry-leading security measures. Additionally, all team members are bound by strict confidentiality agreements to ensure your privacy is always protected.',
  },
  {
    question: 'Do you provide post-development support and maintenance?',
    answer:
      'Absolutely! We understand the importance of ongoing support. We offer flexible maintenance plans to keep your project running smoothly.',
  },
  {
    question: 'How quickly can you start a new project?',
    answer:
      'Initiate your project with ease. Schedule a complimentary consultation through our website. We prioritize prompt communication and will respond within 2-3 business hours to discuss your project confidentially.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Refund policies depend on the terms and conditions of the subscription plan.',
  },
  {
    question: 'How can I request a product demo?',
    answer: (
      <>
        You can request a demo by filling out the demo request form on our website.{' '}
        <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          Let&apos;s talk form
        </Link>
      </>
    ),
  },
  {
    question: 'Can businesses partner with your company?',
    answer:
      'Yes, we offer partnership and reseller programs for interested businesses.',
  },
  {
    question: 'Do you provide enterprise solutions?',
    answer:
      'Yes, we provide custom enterprise solutions tailored to large organizations.',
  },
  {
    question: 'What are your support hours?',
    answer:
      'Standard support is available during regular business hours (Monday–Friday). Extended availability may apply for Premium / Priority Support plans—contact us for details specific to your subscription.',
  },
  {
    question: 'How long does it take to resolve issues?',
    answer:
      'Resolution times depend on your support tier: Basic Support typically responds within 24–48 hours; Standard Support within 8–24 hours; Premium / Priority Support offers immediate response for critical issues.',
  },
  {
    question: 'What is the demo version of the product?',
    answer: (
      <div className="space-y-3">
        <p>
          We provide a demo machine on remote desktop that allows users to test the software and explore
          its features before purchasing the full version.
        </p>
        <p>
          Submit a form to{' '}
          <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            book a demo slot
          </Link>
          .
        </p>
        <p>
          Client-side demo installation will cost 10% of the product price. If the customer buys, 10% will
          be reduced from the final bill.
        </p>
      </div>
    ),
  },
  {
    question: 'What Are the Support Types and Pricing?',
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">1. Basic Support (Free / Included)</p>
          <ul className="list-disc list-inside mt-1 space-y-0.5">
            <li>Email support</li>
            <li>Standard response time (24–48 hours)</li>
            <li>Pricing: Usually included free with the product subscription</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">2. Standard Support</p>
          <ul className="list-disc list-inside mt-1 space-y-0.5">
            <li>Email + chat support</li>
            <li>Basic troubleshooting</li>
            <li>Priority response time (8–24 hours)</li>
            <li>Pricing: Provided based on license / installation model</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">3. Premium / Priority Support</p>
          <ul className="list-disc list-inside mt-1 space-y-0.5">
            <li>Immediate response time</li>
            <li>Pricing: Provided based on license / installation model</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'Does the product work offline or online?',
    answer:
      'Our product supports both online and offline modes to provide flexibility for users.',
  },
  {
    question: 'Can I transfer data from my current software?',
    answer:
      'Yes, in most cases you can transfer your existing business data to our Software. The software provides data import options to help move information from your previous system.',
  },
  {
    question: 'Will customer support be available during government holidays?',
    answer:
      'Support availability may be limited during government holidays due to reduced staffing. However, critical issues will still be addressed promptly.',
  },
];

function FaqAnswer({ children }: { children: ReactNode }) {
  return <div className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">{children}</div>;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900 pb-16">
      <section className="bg-gradient-to-r from-[#003B91] to-[#0071C5] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] font-semibold mb-5 tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[15px] sm:text-[17px] text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Find answers to common questions about our products, services, support, and partnerships.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white text-[15px] sm:text-base leading-snug">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-gray-100 dark:border-gray-700 pt-4">
                  <FaqAnswer>
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </FaqAnswer>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
            Still have questions? We&apos;re here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[13px] tracking-widest uppercase rounded-lg shadow-md shadow-indigo-200/50 dark:shadow-none transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
