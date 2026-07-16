import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { POSTS, Brand } from '../pages/blog-posts';

function SectionHeader({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="text-center mb-10">
      {kicker ? (
        <p className="text-xs tracking-widest uppercase text-blue-700 font-bold mb-3">{kicker}</p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
      {desc ? <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-[15px]">{desc}</p> : null}
    </div>
  );
}

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 md:px-7 py-5 text-left flex items-start justify-between gap-4"
      >
        <span className="font-semibold text-gray-900 text-[15px] leading-snug">{q}</span>
        <span className="shrink-0 text-blue-600 font-bold text-xl leading-none">{open ? '−' : '+'}</span>
      </button>
      {open ? (
        <div className="px-5 md:px-7 pb-6 pt-0 text-gray-600 text-[14px] leading-relaxed">{a}</div>
      ) : null}
    </div>
  );
}

function TCOContent({ faqs, openFaq, setOpenFaq }: { faqs: { q: string; a: string }[]; openFaq: number; setOpenFaq: (idx: number) => void }) {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="THE MOST EXPENSIVE LIE IN INDIAN JEWELLERY RETAIL"
            title="It is already paid for"
            desc="That single sentence echoes through thousands of jewellery showrooms across India, from Karol Bagh in Delhi to Coimbatore in Tamil Nadu, every time someone suggests upgrading the old desktop billing software running on a Windows 7 machine in the back office."
          />

          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-7 md:p-10">
            <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px] prose prose-slate">
              Here is the truth: the purchase price of software is a mirage. In 2026, with mandatory HUID hallmarking now covering 380 districts nationwide, 9K gold pulled under the BIS net since 1 July 2025, and a 5 crore e-invoicing threshold that catches the majority of organised jewellers, the cost of owning a rigid, non-compliant system is exponentially higher than upgrading to a modern jewellery ERP.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-[15px] md:text-[16px] prose prose-slate">
              We ran the numbers. The hidden tax of staying still is quietly bleeding 3 to 7 percent off your annual net margin. Here is the full Total Cost of Ownership breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Sections */}
      <section className="py-10 md:py-16 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader kicker="TOTAL COST OF OWNERSHIP" title="The 5 Hidden Costs of 'Cheap' Software" />

          <div className="space-y-16">
            {/* Cost 1 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Cost 1: The Manual GST and E-Invoicing Penalty</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    Legacy jewellery software that does not auto-push invoices to the IRP, or Invoice Registration Portal, forces your accountant to manually scrape GSTR-2B data, reconcile ITC, and chase missing IRNs. One mismatch on a high-value gold bullion entry can block lakhs in input tax credit for an entire quarter.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate font-semibold">The math is simple:</p>
                  <ul className="mt-4 space-y-2 text-gray-700 text-[15px]">
                    <li>•Typical CA cleanup charge for manual reconciliation: 15,000 to 25,000 rupees per month</li>
                    <li>•Annual cost: 1.8 to 3 lakh rupees per year</li>
                    <li>•Plus invoice rejection risk: businesses above the 5 crore aggregate turnover threshold must generate a valid IRN and QR code, or the invoice is not valid for GST credit. Your B2B customer can refuse payment on an invalid invoice.</li>
                    <li>•Plus the 30-day upload limit now enforced for businesses with 10 crore or more turnover, effective April 2025. Late uploads mean permanent ITC loss.</li>
                  </ul>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    A modern jewellery ERP in India automates this end to end. The IRN is pulled at billing, the QR prints on the invoice, and GSTR-1 is built automatically.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                  <img src="/blogs/jewelbiz/Cost 1.png" alt="GST e-invoice IRN reconciliation flow for jewellery billing software India" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Cost 2 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 md:order-1 order-2">
                <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                  <img src="/blogs/jewelbiz/Cost 2.png" alt="Dead stock analysis in jewellery inventory management" className="w-full h-auto" />
                </div>
              </div>
              <div className="md:col-span-7 md:order-2 order-1">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Cost 2: Opportunity Loss from Dead Inventory</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    Old jewellery software treats a 24 karat bangle and a 22 karat bangle as identical line items. They see stock. They do not analyse velocity, holding cost, or melt value spread.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    When 40 to 60 lakh rupees of capital sits in designs that have not moved in 12 months during a gold rally, you lose the chance to melt and reinvest at a higher gold rate.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate font-semibold">The JewelBiz difference: the dead stock module flags every SKU whose holding cost exceeds its projected margin, with a Melt, Discount, or Re-polish recommendation tied to live MCX and IBJA rates. We do not just track dead stock. We make the decision actionable.</p>
                </div>
              </div>
            </div>

            {/* Cost 3 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Cost 3: The Grandfather Hardware Trap</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    That old jewellery billing software was likely installed on a single Windows 7 PC in 2010. It depends on a specific local server in the back office, a specific printer driver that no longer ships with current Windows, and a specific accountant who knows the workaround for the year-end roll-over.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    If that machine dies the day before Akshaya Tritiya, your business stops. And the support team still charging AMC every year? They are patching a sinking ship. They cannot rewrite the architecture. They can only delay the next failure.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    A cloud-native jewellery ERP eliminates this single point of failure entirely.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                  <img src="/blogs/jewelbiz/Cost 3.png" alt="Cloud jewellery ERP vs single-PC dependency" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Cost 4 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 md:order-1 order-2">
                <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                  <img src="/blogs/jewelbiz/Cost 4.png" alt="Customer experience at a jewellery counter" className="w-full h-auto" />
                </div>
              </div>
              <div className="md:col-span-7 md:order-2 order-1">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Cost 4: Customer Experience Leakage</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    If your jewellery retail software takes 15 seconds to pull up a customer gold scheme history at the counter, your VIP customer feels like a burden, not a regular.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    In luxury retail, a slow interface is a conversion killer. The staff lose a meaningful slice of every day waiting on a loading bar. Time they could spend upselling a stone, closing a scheme renewal, or scheduling a home visit for a wedding family.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    Multiply that by 6 to 8 counter staff and you are paying salary for waiting.
                  </p>
                </div>
              </div>
            </div>

            {/* Cost 5 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Cost 5: The 2026 Compliance Penalty Cliff</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    This is the cost most TCO calculators miss entirely.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700 text-[15px]">
                    <li>•BIS HUID API integration is now required for AHC-linked jewellers. Legacy jewellery software cannot connect.</li>
                    <li>•9K gold has been mandatory HUID since 1 July 2025.</li>
                    <li>•Silver hallmarking is still voluntary in India, but since 1 September 2025, any silver piece a jeweller does choose to hallmark must carry a HUID code under the revised BIS standard IS 2112:2025 — the old four-symbol mark no longer qualifies.</li>
                    <li>•Selling non-hallmarked gold in mandatory districts carries fines up to 5 times the item value, plus possible imprisonment.</li>
                  </ul>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    Your old jewellery management software was compliant for the 2021 rulebook. It is not built for the 2026 one. Every BIS inspection your team cannot answer from a single report is a six-figure regulatory risk.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                  <img src="/blogs/jewelbiz/Cost 5.png" alt="BIS HUID compliance penalty risk 2026 for Indian jewellers" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="CLOUD SAAS VS PERPETUAL LICENCE: THE HONEST MATH"
            title="Old desktop vendors love the one-time payment pitch. But you are buying a frozen snapshot of compliance that will be obsolete inside 18 months."
            desc="Here is the real 3-year TCO comparison for a typical mid-sized jewellery showroom with 4 to 8 crore turnover and 4 billing counters:"
          />

          <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
            <div className="overflow-auto">
              <table className="w-full min-w-[760px]">
                <thead className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                  <tr>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Cost Head</th>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Legacy Desktop Software</th>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">JewelBiz Cloud (Pro)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {[
                    ['Licence or subscription (3 years)', '60,000 plus AMC 15K times 3', '40,000 times 3 = 1,20,000'],
                    ['Server and hardware', '80,000 one-time plus 10K backup drives', 'Zero'],
                    ['GST plus e-invoice reconciliation (CA cleanup)', '2.4L per year times 3 = 7,20,000', 'Included'],
                    ['HUID and BIS compliance retrofits', '50,000 to 1,00,000 one-off', 'Included, pushed automatically'],
                    ['Downtime risk (1 day during festival)', '3 to 5 lakh in lost sales', 'Near zero with multi-device cloud'],
                    ['Staff productivity loss (slow UI)', '1.5L per year times 3 = 4,50,000', 'Negligible'],
                    ['3-year total', '13 to 16 lakh', '1.2 to 1.5 lakh'],
                  ].map((r) => (
                    <tr key={r[0]} className="border-t border-gray-100">
                      <td className="px-5 md:px-8 py-4 font-semibold text-[14px] text-gray-900">{r[0]}</td>
                      <td className="px-5 md:px-8 py-4 text-[14px] text-gray-700">{r[1]}</td>
                      <td className="px-5 md:px-8 py-4 text-[14px] text-gray-700">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-500 max-w-4xl mx-auto">
            Note: Figures above are illustrative estimates based on a typical mid-sized showroom profile. Actual costs depend on store size, location, and turnover. We recommend running the free comparison below with your own numbers before treating this table as a quote.
          </div>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Support Features.png" alt="JewelBiz error prevention features" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">Why JewelBiz Comes In 40 Percent Lower on Support Spend</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Cloud is not the only thing keeping JewelBiz's TCO low. The architecture is built to prevent errors at the point of entry, not catch them at the point of audit:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm list-disc list-inside">
                  <li>Invalid HUID? The bill will not generate.</li>
                  <li>Imbalanced gold weight on issue versus receipt? Karigar entry is blocked.</li>
                  <li>Suspicious discount above policy threshold? Manager OTP required.</li>
                  <li>Missing GSTIN on a B2B invoice above 50,000 rupees? Field is enforced.</li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  This is why several JewelBiz customers — including multi-branch retailers and manufacturing jewellers across Rajasthan, Maharashtra, and West Bengal — run leaner accounting teams than peers on legacy jewellery accounting software.
                </p>
                <p className="mt-2 text-gray-600 text-xs italic">Customer names available on request. Case study details anonymized in this guide pending publication approval.</p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  JewelBiz ERP plans start at 20,000 rupees for the Lite edition, scaling to 40,000 rupees for Pro, 70,000 rupees for Elite, and 1.1 lakh rupees for Enterprise. All plans include published, transparent pricing and compliance updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="FREQUENTLY ASKED"
            title="Questions jewellers ask before upgrading"
            desc="Clear answers to billing safety, migration, thresholds, hardware, and ROI."
          />

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-white border border-gray-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Stop Paying for a System That Has Already Cost You More Than It Saved</h3>
            <p className="mt-4 text-gray-600 text-center leading-relaxed">
              The cheapest jewellery software in your showroom is the one that catches a billing error before it leaves the counter, files a compliant GSTR-1 without manual cleanup, and tells you which 22 karat bangle has been sitting in the case for 14 months.
            </p>
            <p className="mt-4 text-gray-600 text-center leading-relaxed">
              That is not the jewellery billing software you bought in 2010. It is the one built for 2026.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact/#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
              >
                Run your free 5-minute TCO comparison with JewelBiz
              </Link>
              <a href="tel:+919257373668" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold border border-blue-100 hover:bg-blue-50 transition">
                Call +91 92573 73668
              </a>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Call +91 92573 73668, fill out the instant TCO calculator, or visit slatebiz.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function TransformsBusinessContent() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="WHY JEWELLERY BUSINESSES NEED SPECIALISED SOFTWARE"
            title="Running a jewellery business in India is unlike any other retail operation"
            desc="You are managing precious metals that fluctuate by the hour, intricate designs crafted by skilled karigars, custom orders with emotional significance, and a maze of GST regulations that seem to change every quarter. Yet, walk into most jewellery stores across Mumbai, Jaipur, or Surat, and you will still find owners tracking inventory in dusty ledgers and calculating gold rates on calculators."
          />

          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-7 md:p-10">
            <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px] prose prose-slate">
              This is not just inefficient. It is costing you money every single day. In this guide, we will walk through why Indian jewellery businesses face unique challenges, what a specialised jewellery ERP system actually does, and how leading jewellers are using technology to scale without losing the personal touch that makes jewellery special.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="WHY JEWELLERY BUSINESSES NEED SPECIALISED SOFTWARE, NOT GENERIC ERP"
            title="Ask any jeweller who has tried using generic accounting software or a basic POS system, and you will hear the same frustration: it simply does not understand jewellery."
          />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <p className="text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  A clothing retailer sells a shirt for a fixed MRP. A jeweller sells a piece where the price depends on the day's gold rate, the weight in grams and milligrams, the purity such as 22K or 18K, the making charges that vary by design complexity, the wastage percentage, the stone weight and quality, and whether it is a ready piece or a custom order.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate font-semibold">Let us look at the specific challenges that make jewellery management uniquely complex for Indian jewellers:</p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Problem Statement.png" alt="Problem Statement" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Dynamic Gold Rate Management</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                Gold prices change multiple times a day. The rate at 10 AM when the customer places an order is different from the rate at 6 PM when they collect it. A proper jewellery billing software in India must lock the gold rate at order time, calculate provisional billing, adjust for rate differences at delivery, and maintain a clear audit trail. Without this, either the customer or the business loses money on every sale.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Karigar and Job Work Management</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                Your karigar is not an employee punching a clock. They are an independent craftsman who takes raw gold, creates a masterpiece, and returns it with a specific wastage allowance. You need to track gold issued by weight and purity, expected versus actual return weight, wastage percentage, making charges, design specifications, and delivery deadlines. A generic ERP has no concept of a karigar. Jewellery ERP software like JewelBiz treats karigar management as a core module because, for most Indian jewellers, this is where the majority of inventory originates.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">HUID Compliance and Hallmarking</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                Since BIS mandated HUID for all gold jewellery sold in India, compliance is non-negotiable. Every piece must carry a unique six-digit alphanumeric HUID code linked to the BIS database. Your jewellery management software must generate HUID labels, link them to inventory records, and ensure every sale includes correct HUID documentation. Failure to comply can result in heavy penalties.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Multi-Component Pricing</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                A single necklace might include 22K gold, uncut diamonds, ruby stones, and enamel work. Each component has different GST rates and valuation methods. The jewellery accounting software must break down every component, calculate GST correctly at 3% on gold value with separate rates for stones and making charges, and present a clear bill to the customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="WHAT A JEWELLERY ERP ACTUALLY DOES: BREAKING DOWN THE CORE MODULES"
            title="A jewellery-specific ERP is an integrated system where every module talks to every other module."
            desc="When you sell a ring, inventory updates, accounting records revenue, GST calculates tax, and analytics updates your dashboard. Here is what each core module handles:"
          />

          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Inventory Management: Beyond Basic Stock Counts</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                    Jewellery inventory is categorised by metal type, purity, category, weight, stone details, design code, and location. A jewellery inventory management system maintains real-time stock across all branches with SKU-level tracking, auto-alerts for low stock, dead stock identification, and automatic gold rate revaluation. The key difference from generic software is weight-based tracking. Jewellers track grams, milligrams, and carats. The system must handle fractional weights, purity conversions, and metal rate fluctuations without rounding errors that can cost lakhs over a financial year.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                  <img src="/blogs/jewelbiz/FAQ.png" alt="Jewellery ERP dashboard for Indian jewellery businesses" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Billing and Invoicing: GST-Compliant by Design</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                GST for jewellery is notoriously complex. Gold attracts 3% GST, but making charges may be taxed differently. Diamonds and precious stones have separate HSN codes and rates. A proper GST compliant jewellery software automates all of this. It calculates GST line by line, generates e-invoices with QR codes, produces GSTR-1 and GSTR-3B reports ready for filing, and maintains an audit trail that satisfies any tax inspection. For B2B transactions, the system handles GST-exclusive pricing, reverse charge mechanisms, and interstate IGST calculations. For B2C retail, it generates detailed bills with clear breakdowns of gold value, stone value, making charges, and GST.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Karigar Management: From Chaos to Control</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                The karigar module is where jewellery ERPs truly differentiate themselves. You create a job work order specifying the design, gold to be issued, expected weight, wastage percentage, and deadline. The system issues gold to the karigar with a digital receipt. When the finished piece returns, you record actual weight, calculate wastage, and compare against the allowed percentage. If wastage exceeds norms, the system flags it for review. Over time, this data becomes incredibly valuable. You know which karigars deliver on time, whose wastage is high, which designs are profitable, and where quality issues originate.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Customer Relationship and Order Management</h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                Jewellery purchases are deeply personal. A customer buying an engagement ring or wedding necklace is creating a memory, not just making a transaction. The CRM module in a jewellery ERP captures customer preferences, purchase history, family occasions, and order status for custom pieces. Custom order management tracks every stage from design approval to gold issuance to karigar, crafting progress, quality check, polishing, and delivery. The staff should know exactly where every custom order stands without phone calls or checking physical files.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="CLOUD-BASED VS ON-PREMISE: WHAT WORKS FOR JEWELLERS IN 2026"
            title="This is a question we hear constantly from jewellery business owners"
            desc="Particularly those who have been in the industry for decades and are understandably cautious about technology. Let us address the concerns directly."
          />

          <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
            <div className="overflow-auto">
              <table className="w-full min-w-[760px]">
                <thead className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                  <tr>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Factor</th>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">On-Premise Software</th>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Cloud-Based Jewellery ERP</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {[
                    ['Data backup', 'Manual, single location, vulnerable to theft or hardware failure', 'Automatic, redundant across secure servers'],
                    ['Multi-branch visibility', 'Requires phone calls between branches', 'Real-time stock and sales visibility from any location'],
                    ['Updates and compliance', 'Manual patches, often delayed', 'Automatic, pushed centrally'],
                    ['Access', 'Single machine, single location', 'Any device, any location with internet'],
                    ['Upfront cost', 'Higher (hardware, server, install)', 'Lower (subscription-based)'],
                    ['Best suited for', 'Very small single-counter operations with no growth plans', 'Single-store, multi-branch, and wholesale jewellers planning to scale'],
                  ].map((r) => (
                    <tr key={r[0]} className="border-t border-gray-100">
                      <td className="px-5 md:px-8 py-4 font-semibold text-[14px] text-gray-900">{r[0]}</td>
                      <td className="px-5 md:px-8 py-4 text-[14px] text-gray-700">{r[1]}</td>
                      <td className="px-5 md:px-8 py-4 text-[14px] text-gray-700">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Cost 3.png" alt="Cloud vs on-premise jewellery ERP comparison for Indian jewellers" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">The Case for Cloud-Based Jewellery ERP</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Cloud-based jewellery ERP software has become the standard for good reason. Your data is backed up automatically across multiple secure servers. You can access your business dashboard from anywhere, whether at a trade show in Dubai or checking inventory at your second branch. Updates happen automatically. For multi-branch jewellers, cloud is essential. When a customer walks into your Jaipur store asking about a piece in your Delhi branch, staff can check availability in real time and arrange delivery without a phone call. The owner sees consolidated sales, inventory, and profit reports across all branches from one dashboard.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate font-semibold">Addressing Security Concerns</p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  We understand the hesitation. Jewellery data includes customer details, gold inventory values, supplier pricing, and financial records. Reputable cloud ERP providers use bank-grade AES-256 encryption, multi-factor authentication, role-based access controls, and regular security audits. Your data is safer in a professional cloud environment than on a back office computer that could be stolen or damaged. The key is choosing a provider with a proven track record in the jewellery industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="HOW TO CHOOSE THE RIGHT JEWELLERY ERP: A PRACTICAL CHECKLIST"
            title="After speaking with hundreds of jewellers across India, we have distilled the selection process into a practical framework."
            desc="Do not get distracted by fancy features you will never use. Focus on what actually matters for your business."
          />

          <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
            <div className="overflow-auto">
              <table className="w-full min-w-[760px]">
                <thead className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                  <tr>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Business Type</th>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Top Priority</th>
                    <th className="text-left px-5 md:px-8 py-5 font-bold text-[13px]">Recommended Module Focus</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {[
                    ['Single-store retail', 'Billing speed, accurate GST, simple inventory', 'Fast POS billing, offline mode, customer CRM'],
                    ['Multi-branch operations', 'Real-time visibility across locations', 'Inter-branch stock transfer, consolidated reporting, role-based access'],
                    ['Manufacturing and wholesale', 'Karigar and job work tracking', 'Wastage analysis by karigar and design, B2B pricing tiers, export documentation'],
                  ].map((r) => (
                    <tr key={r[0]} className="border-t border-gray-100">
                      <td className="px-5 md:px-8 py-4 font-semibold text-[14px] text-gray-900">{r[0]}</td>
                      <td className="px-5 md:px-8 py-4 text-[14px] text-gray-700">{r[1]}</td>
                      <td className="px-5 md:px-8 py-4 text-[14px] text-gray-700">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Cost 4.png" alt="Business types for jewellery ERP" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">For Single-Store Retail Jewellers</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Your priorities are billing speed, accurate GST calculation, simple inventory tracking, and customer management for repeat business. Look for jewellery retail software that your staff can learn in a day. The system should work during internet outages with offline mode and sync when connectivity returns.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate font-semibold">For Multi-Branch Operations</p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  You need everything the single-store jeweller needs, plus real-time inventory visibility across branches, inter-branch stock transfers, consolidated reporting, role-based access, and franchise management if applicable.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate font-semibold">For Manufacturing and Wholesale Jewellers</p>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Karigar management is your top priority. You need detailed job work tracking, wastage analysis by karigar and by design, bulk order management, B2B pricing tiers, and export documentation if you sell internationally.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">The Vendor Evaluation Checklist</h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
              Before committing to any jewellery ERP in India, ask: How many jewellers use your software? Can you provide references from businesses like mine? What happens to my data if I stop? How often do you release updates? What is your support response time? Do you offer on-site training? Is there a lock-in contract? Beware of vendors who cannot provide specific jewellery industry references or who sell generic ERP with jewellery customisation. Jewellery is too complex for workarounds.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="REAL RESULTS: WHAT JEWELBIZ CUSTOMERS ACHIEVE"
            title="Let us move from theory to reality."
            desc="Here is what JewelBiz customers report after implementing a purpose-built jewellery ERP system."
          />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Cost 5.png" alt="Results achieved by JewelBiz customers" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">Inventory Accuracy Above 99 Percent</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Manual inventory tracking in jewellery typically carries an error rate of 3 to 5 percent. When your inventory is worth crores, that is lakhs of rupees in discrepancies. JewelBiz customers report inventory accuracy above 99 percent after implementation, eliminating stock mismatches and recording errors.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-6">GST Filing Time Reduced by Up to 80 Percent</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Instead of spending 3 to 4 days every month compiling data for GST returns, JewelBiz customers generate automated reports in minutes. GSTR-1, GSTR-3B, and HSN summary reports are ready to export and file.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-6">Customer Wait Times Cut in Half</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  JewelBiz customers using barcode scanning and the platform's billing interface report completing a sale in under two minutes, including GST invoice generation, compared to manual billing where staff flip through rate books and calculate on paper.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-6">Data-Driven Business Decisions</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  One JewelBiz multi-branch customer discovered through the platform's analytics that 60 percent of their inventory investment was tied up in designs accounting for only 15 percent of sales. Reallocating that inventory increased turnover by 40 percent in the following quarter.
                </p>
                <div className="mt-8">
                  <Link
                    to="/contact/#contact-form"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
                  >
                    See what these results could look like for your store
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="GETTING STARTED: IMPLEMENTATION WITHOUT DISRUPTION"
            title="The biggest fear jewellers have is implementation disrupting their business."
            desc="A busy showroom cannot pause operations for a week. Here is how a proper rollout should work:"
          />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Support Features.png" alt="Implementation process for jewellery ERP" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <ul className="space-y-4 text-gray-700 text-[15px]">
                  <li>•Day 1 to 2: Data migration happens in the background. Your stock data, customer records, and supplier information are imported. Operations continue unchanged.</li>
                  <li>•Day 3 to 4: Staff training sessions of 2 to 3 hours covering billing, inventory lookup, and customer management. Training happens during slow hours.</li>
                  <li>•Day 5: Soft launch. The new jewellery billing software runs parallel to your existing process. Staff gain confidence with the old system as a safety net.</li>
                  <li>•Week 2: Full cutover. The old system is retired. Most jewellers are fully comfortable by day 10.</li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  The key is choosing a vendor who understands jewellery operations well enough to configure the system before training day. If the vendor asks basic questions about gold pricing, that is a red flag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="THE BOTTOM LINE"
            title="The Indian jewellery industry is at an inflection point."
            desc="Customer expectations are rising, compliance requirements are tightening, and competition is intensifying from both traditional rivals and online platforms. The jewellers who thrive will be those who combine traditional craftsmanship with modern operational discipline."
          />

          <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-[15px] prose prose-slate">
              A jewellery-specific ERP is not an expense. It is infrastructure. The cost of good jewellery ERP software is typically recovered within the first quarter through reduced errors, faster billing, better inventory management, and insights that drive smarter decisions. The question is not whether you can afford to invest. It is whether you can afford not to.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-[15px] prose prose-slate">
              Curious what switching actually costs versus what you are spending now? See our full 2026 jewellery software cost breakdown for a detailed 3-year comparison.
            </p>
            <div className="mt-8">
              <Link
                to="/blogs/jewelbiz/blog1"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
              >
                See our full 2026 jewellery software cost breakdown
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="ABOUT JEWELBIZ BY SLATEBIZ SOFTWARE"
            title="JewelBiz by SlateBiz Software is a jewellery ERP platform trusted by 1,485+ jewellers across India."
            desc="From single-store retailers to multi-branch chains, JewelBiz handles inventory, billing, GST compliance, karigar management, and customer relationships in one integrated platform."
          />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
                <img src="/blogs/jewelbiz/Support Features.png" alt="Support Features" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 md:p-10 shadow-sm">
                <p className="text-gray-700 leading-relaxed text-[15px] prose prose-slate">
                  Book a free demo at www.slatebiz.com
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contact/#contact-form"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
                  >
                    Book a free demo
                  </Link>
                  <a href="tel:+919257373668" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold border border-blue-100 hover:bg-blue-50 transition">
                    Call +91 92573 73668
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPost() {
  const { brand, slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const post = useMemo(() => {
    const b = (brand ?? '').toLowerCase();
    const s = slug ?? '';
    return POSTS.find((p) => p.brand === (b as Brand) && p.slug === s) ?? null;
  }, [brand, slug]);

  // FAQ content based on slug
  const faqs = useMemo(() => {
    if (post?.slug === 'blog2') {
      return [
        {
          q: 'Is cloud jewellery software safe for billing during internet outages?',
          a: 'Yes. JewelBiz supports offline counter billing with auto-sync once connectivity restores. No sale is ever lost.'
        },
        {
          q: 'Do I have to scrap my existing data to switch?',
          a: 'No. Historical stock, customers, schemes, gold loan ledgers, and karigar records are migrated. Contact our team for the full migration process.'
        },
        {
          q: 'My turnover is below 5 crore. Do I still need e-invoicing?',
          a: 'Not currently mandatory. The GST Council has discussed lowering the threshold to 2 crore at multiple sessions, though as of 2026 this has not been officially notified. Adopting a compliant jewellery ERP now insulates you from the next notification.'
        },
        {
          q: 'Will I need new hardware to run JewelBiz?',
          a: 'No. Any laptop, billing PC, or Android device with a modern browser works. Standard thermal printers and barcode scanners are supported.'
        },
        {
          q: 'What does the 20,000 rupee Lite plan include?',
          a: 'Single counter billing, HUID-mapped inventory, GST and HSN-ready invoices, customer KYC, daily backup, and core reports. Ideal for single-store jewellers in India.'
        },
        {
          q: 'How quickly will I see ROI?',
          a: 'Most JewelBiz customers recover the annual subscription within 3 to 4 months through GST ITC recovery and dead stock liquidation alone, before counting time savings.'
        },
        {
          q: 'Is silver hallmarking mandatory in India in 2026?',
          a: 'No. Silver hallmarking remains voluntary nationwide. What is mandatory, since 1 September 2025, is that any silver piece a jeweller chooses to hallmark must carry a HUID code under the revised BIS standard IS 2112:2025.'
        }
      ];
    }
    // Default FAQ for TCO blog
    return [
      {
        q: 'Is cloud jewellery software safe for billing during internet outages?',
        a: 'Yes. JewelBiz supports offline counter billing with auto-sync once connectivity restores. No sale is ever lost.'
      },
      {
        q: 'Do I have to scrap my existing data to switch?',
        a: 'No. Historical stock, customers, schemes, gold loan ledgers, and karigar records are migrated. Contact our team for the full migration process.'
      },
      {
        q: 'My turnover is below 5 crore. Do I still need e-invoicing?',
        a: 'Not currently mandatory. The GST Council has discussed lowering the threshold to 2 crore at multiple sessions, though as of 2026 this has not been officially notified. Adopting a compliant jewellery ERP now insulates you from the next notification.'
      },
      {
        q: 'Will I need new hardware to run JewelBiz?',
        a: 'No. Any laptop, billing PC, or Android device with a modern browser works. Standard thermal printers and barcode scanners are supported.'
      },
      {
        q: 'What does the 20,000 rupee Lite plan include?',
        a: 'Single counter billing, HUID-mapped inventory, GST and HSN-ready invoices, customer KYC, daily backup, and core reports. Ideal for single-store jewellers in India.'
      },
      {
        q: 'How quickly will I see ROI?',
        a: 'Most JewelBiz customers recover the annual subscription within 3 to 4 months through GST ITC recovery and dead stock liquidation alone, before counting time savings.'
      },
      {
        q: 'Is silver hallmarking mandatory in India in 2026?',
        a: 'No. Silver hallmarking remains voluntary nationwide. What is mandatory, since 1 September 2025, is that any silver piece a jeweller chooses to hallmark must carry a HUID code under the revised BIS standard IS 2112:2025.'
      }
    ];
  }, [post?.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
            <p className="text-gray-600">Blog not found.</p>
            <Link to="/blogs/" className="mt-6 inline-flex items-center text-blue-700 font-bold">Back to Blogs</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="relative overflow-hidden pt-10 pb-10 md:pt-14 md:pb-14">
        <div className="absolute inset-0 opacity-10">
          <img src="/herobg.png" alt="background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link
              to="/blogs/"
              className="inline-flex items-center gap-2 text-blue-700 font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="hidden sm:inline text-gray-400">/</span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-700">{post.categoryLabel}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="mt-8 rounded-[2rem] border border-gray-100 overflow-hidden bg-white shadow-sm">
            {/* Preserve image sizing: no fixed heights; allow natural ratio */}
            <img src={post.heroImage} alt={post.title} className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* Content blocks reuse same assets; images preserve natural size */}
      {post?.slug === 'blog2' ? (
        <TransformsBusinessContent />
      ) : (
        <TCOContent faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      )}

      {/* Footer spacing */}
      <div className="h-10" />
    </div>
  );
}
