import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzOCEjlBOkstShveVk9E_bDU2_99SmlC3UWznAlQ77v29jDH5UvNWngHTGqGHyPNc5_/exec';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full min-h-[48px] rounded-[10px] border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0C69B6] focus:ring-2 focus:ring-[#0C69B6]/20';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    product: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.startsWith('PASTE_')) {
      setStatus('error');
      console.warn('Google Script URL not set in Contact.tsx');
      return;
    }

    setStatus('submitting');

    try {
      const body = new URLSearchParams();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      setStatus('success');
      setForm({ firstName: '', product: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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

        <div className="relative mx-auto max-w-[720px] px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
              Contact
            </span>
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
          </div>

          <h1 className="font-serif font-normal text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-slate-900">
            Let&apos;s talk about your{' '}
            <em className="mt-1 block font-serif italic text-[#FF641F]">business software.</em>
          </h1>

          <p className="mx-auto mt-4 max-w-[540px] text-[14.5px] leading-relaxed text-slate-600 sm:text-[15.5px]">
            Tell us what you run — jewellery, healthcare, retail, or a custom workflow — and we&apos;ll
            route you to the right team. We typically respond within 48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section id="contact-form" className="scroll-mt-header bg-[#F7F8FC] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,25,35,0.06)]">
            <div className="grid lg:grid-cols-12">
              {/* Left panel */}
              <div
                className="relative flex flex-col justify-between gap-8 border-b border-slate-100 px-6 py-8 sm:px-8 sm:py-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:px-9 lg:py-12"
                style={{
                  background: 'linear-gradient(160deg, #E8F2FB 0%, #F7F8FC 55%, #FBEDE6 100%)',
                }}
              >
                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
                      Enquiry
                    </span>
                  </div>
                  <h2 className="font-serif font-normal text-[clamp(1.45rem,2.5vw,1.9rem)] leading-[1.2] tracking-[-0.02em] text-slate-900">
                    Send us a message
                  </h2>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                    Tell us about your business and we&apos;ll route you to the right team — usually
                    within 48 hours.
                  </p>
                </div>

                <div className="space-y-4 text-left">
                  <a
                    href="tel:+919257373668"
                    className="flex items-start gap-3 text-[13.5px] text-slate-700 transition hover:text-[#0C69B6]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
                      <Phone className="h-3.5 w-3.5 text-[#0C69B6]" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                        Call
                      </span>
                      +91 925 737 3668
                    </span>
                  </a>
                  <a
                    href="mailto:info@slatebiz.com"
                    className="flex items-start gap-3 text-[13.5px] text-slate-700 transition hover:text-[#0C69B6]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
                      <Mail className="h-3.5 w-3.5 text-[#0C69B6]" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                        Email
                      </span>
                      info@slatebiz.com
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-[13.5px] text-slate-700">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
                      <MapPin className="h-3.5 w-3.5 text-[#FF641F]" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                        Office
                      </span>
                      Jaipur, Rajasthan
                    </span>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="lg:col-span-8 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="contact-firstName"
                        className="mb-1.5 block text-[12px] font-medium text-slate-700"
                      >
                        First name *
                      </label>
                      <input
                        id="contact-firstName"
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-[12px] font-medium text-slate-700"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-[12px] font-medium text-slate-700"
                      >
                        Phone *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-product"
                        className="mb-1.5 block text-[12px] font-medium text-slate-700"
                      >
                        Which product? *
                      </label>
                      <select
                        id="contact-product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                        required
                      >
                        <option value="" disabled>
                          Select a product
                        </option>
                        <option value="XCuraBiz HMS">CuraBiz</option>
                        <option value="XJewel ERP">JewelBiz</option>
                        <option value="XRetail ERP">RetailBiz</option>
                        <option value="Custom Solution">Custom Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="mb-1.5 block text-[12px] font-medium text-slate-700"
                      >
                        Company / organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-[12px] font-medium text-slate-700"
                    >
                      Anything else we should know?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClass} min-h-[110px] resize-none`}
                    />
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-2 rounded-[10px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Thanks! Your message has been recorded. We&apos;ll get back within 48 hours.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong. Please try again or email info@slatebiz.com.
                    </div>
                  )}

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex h-[48px] min-w-[170px] items-center justify-center gap-2 rounded-[10px] bg-[#FF641F] px-8 text-[14px] font-semibold text-white transition hover:bg-[#E55A18] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
                      {status === 'submitting' ? 'Sending…' : 'Submit enquiry'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="border-t border-slate-100 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C69B6]">
              Get in touch
            </span>
            <span className="h-0.5 w-7 rounded bg-[#0C69B6]" />
          </div>
          <h2 className="font-serif font-normal text-[clamp(1.5rem,3vw,2.1rem)] tracking-[-0.02em] text-slate-900">
            Visit, call, or write to us
          </h2>
          <p className="mx-auto mt-3 mb-10 max-w-2xl text-[14.5px] leading-relaxed text-slate-500">
            Questions about a product demo, support, or partnerships — we&apos;re here.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.2304730461025!2d75.6672628!3d26.9767916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d2f20964fa5%3A0x9e6e24ba9b015028!2sSlateBiz%20Softwares!5e0!3m2!1sen!2sin!4v1775850586187!5m2!1sen!2sin"
            className="mb-12 h-[320px] w-full rounded-2xl border border-slate-200 sm:h-[420px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SlateBiz Softwares location"
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-slate-100 bg-[#F7F8FC] px-5 py-7 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
                <Phone className="h-5 w-5 text-[#0C69B6]" />
              </div>
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                Call us
              </div>
              <div className="text-[14px] font-medium leading-relaxed text-slate-900">
                Sales: +91 925 737 3668
                <br />
                Support: +91 993 093 9903
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#F7F8FC] px-5 py-7 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
                <Mail className="h-5 w-5 text-[#0C69B6]" />
              </div>
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                Email
              </div>
              <a
                href="mailto:info@slatebiz.com"
                className="text-[14px] font-medium text-[#0C69B6] underline-offset-2 hover:underline"
              >
                info@slatebiz.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#F7F8FC] px-5 py-7 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
                <MapPin className="h-5 w-5 text-[#FF641F]" />
              </div>
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                Visit us
              </div>
              <div className="text-[14px] font-medium leading-relaxed text-slate-900">
                DH-079, 1st Floor Ansal Sushant City -1,
                <br />
                Kalwar Road, Jaipur, Rajasthan 303706
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
