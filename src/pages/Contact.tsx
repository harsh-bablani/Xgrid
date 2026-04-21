import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Blue Hero Section */}
      <section className="bg-gradient-to-r from-[#003B91] to-[#0071C5] text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[40px] font-semibold mb-4 tracking-tight uppercase">
            Contact Us
          </h1>
          <p className="text-[14px] sm:text-[15px] font-medium text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore strategies, guides, and insights on business automation, inventory management, SaaS tools, and scaling operations with modern technology.
          </p>
        </div>
      </section>

      {/* Form Section - MOVED ABOVE */}
      <section id="contact-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#D3E1E8] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-black uppercase tracking-tight mb-4">
            Not Sure Who To Contact?
          </h2>
          <p className="text-[12px] sm:text-[13px] text-gray-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Fill out our general enquiry form and we'll get your message to the right people. due to large amount of inquiries, please give our team 48 hours to respond.
          </p>

          <form className="space-y-6 text-left max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-medium text-gray-800 uppercase tracking-wide mb-2">First Name *</label>
                <input
                  type="text"
                  className="w-full bg-white border-none rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A2F4C]"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-800 uppercase tracking-wide mb-2">Which Product? *</label>
                <select
                  className="w-full bg-white border-none rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A2F4C] cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select a product</option>
                  <option value="xcurabiz-hms">XCuraBiz HMS</option>
                  <option value="xjewel-erp">XJewel ERP</option>
                  <option value="xretail-erp">XRetail ERP</option>
                  <option value="custom">Custom Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-medium text-gray-800 uppercase tracking-wide mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full bg-white border-none rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A2F4C]"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-800 uppercase tracking-wide mb-2">Phone *</label>
                <input
                  type="tel"
                  className="w-full bg-white border-none rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A2F4C]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-800 uppercase tracking-wide mb-2">Company/Organization</label>
              <input
                type="text"
                className="w-full bg-white border-none rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A2F4C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-800 uppercase tracking-wide mb-2">Is there any additional information you would like to add?</label>
              <textarea
                rows={3}
                className="w-full bg-white border-none rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A2F4C] resize-none"
              ></textarea>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-[#1A2F4C] text-white px-10 py-3 text-[12px] font-medium tracking-widest uppercase rounded hover:bg-[#112035] transition-colors"
              >
                Visit Us
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Get In Touch Section - MOVED DOWN */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-[26px] sm:text-[32px] font-semibold text-black mb-4 uppercase tracking-tight">
          Get In Touch
        </h2>
        <p className="text-[14px] sm:text-[15px] text-gray-500 font-medium mb-12 max-w-2xl mx-auto">
          Questions about our blends? Want to host an event? Or just want to say hi? Drop us your query.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.2304730461025!2d75.6672628!3d26.9767916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d2f20964fa5%3A0x9e6e24ba9b015028!2sSlateBiz%20Softwares!5e0!3m2!1sen!2sin!4v1775850586187!5m2!1sen!2sin"
          className="w-full h-[400px] sm:h-[450px] rounded-lg border-0 mb-12"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Contact Info (Icons properly stacked with centered text below) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 text-center">
          <div className="flex flex-col items-center">
            <Phone className="w-6 h-6 text-[#1A2F4C] mb-4" />
            <div className="text-[11px] text-gray-500 font-medium uppercase mb-1">Call Us:</div>
            <div className="text-[14px] font-medium text-black">
              Sales: +91 925 737 3668<br />
              Support: +91 993 093 9903
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="w-6 h-6 text-[#1A2F4C] mb-4" />
            <div className="text-[11px] text-gray-500 font-medium uppercase mb-1">Email:</div>
            <div className="text-[14px] font-medium text-black border-b border-black pb-0.5">info@slatebiz.com</div>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-6 h-6 text-[#1A2F4C] mb-4" />
            <div className="text-[11px] text-gray-500 font-medium uppercase mb-1">Visit Us:</div>
            <div className="text-[14px] font-medium text-black">
              DH-079, 1st Floor Ansal Sushant City -1,<br />
              Kalwar Road, Jaipur, Rajasthan 303706, India
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
