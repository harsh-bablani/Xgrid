import { useState } from 'react';
import { asset } from '../../lib/asset';
import HospitalAppDemo from './HospitalAppDemo';
import { useLiveLink } from './LiveLinkModal';

const HOSPITAL_LIVE = 'https://hospital-erp-ten.vercel.app/';
const BRAND_LIVE = 'https://www.blhissaria.com/';

/** Interactive hospital website demo — deeper actions open the live-link gate. */
export function HospitalDesktopScreen() {
  const { askLiveLink } = useLiveLink();
  const [page, setPage] = useState<'home' | 'departments' | 'doctors'>('home');

  const deeper = (reason: string) =>
    askLiveLink({
      url: HOSPITAL_LIVE,
      product: 'Curabiz Hospital',
      reason,
    });

  const nav = (
    <div className="flex items-center justify-between">
      <button type="button" onClick={() => setPage('home')} className="shrink-0">
        <img
          src={asset('/services/curabiz-logo-white.png')}
          alt="curabiz"
          className="h-7 w-auto object-contain"
        />
      </button>
      <div className="hidden items-center gap-3 text-[10px] font-medium text-white/85 sm:flex">
        {(
          [
            ['departments', 'Departments'],
            ['doctors', 'Doctors'],
            ['services', 'Services'],
            ['about', 'About'],
            ['contact', 'Contact'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              if (key === 'departments' || key === 'doctors') setPage(key);
              else
                deeper(
                  `${label} continues on the live Curabiz hospital site — this preview stays light for performance.`,
                );
            }}
            className={
              (key === 'departments' || key === 'doctors') && page === key
                ? 'text-[#FF8A4C]'
                : 'hover:text-white'
            }
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          onClick={() =>
            deeper('Booking and calendar sync run on the live hospital site.')
          }
          className="rounded-full bg-[#FF641F] px-3 py-1.5 text-[10px] font-bold text-white"
        >
          Book appointment
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0B1C2C] text-white">
      {page === 'home' ? (
        <>
          <img
            src={asset('/services/hospital-hero.webp')}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/88 via-[#0B1C2C]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/55 via-transparent to-[#0B1C2C]/25" />
          <div className="relative flex h-full flex-col px-7 py-5">
            {nav}
            <div className="mt-auto max-w-[58%] pb-8 pt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF8A4C]">
                Private multi-specialty · Jaipur
              </p>
              <h3 className="mt-2 font-serif text-[28px] font-semibold leading-[1.08] tracking-tight sm:text-[34px]">
                One patient journey. Registration to discharge.
              </h3>
              <p className="mt-3 max-w-md text-[12px] leading-relaxed text-white/88">
                Advanced OPD to discharge care — specialists, diagnostics and pharmacy under one
                organised roof.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    deeper('WhatsApp consultation continues on the live Curabiz site.')
                  }
                  className="inline-flex items-center rounded-full bg-[#25D366] px-3.5 py-2 text-[10px] font-bold"
                >
                  WhatsApp consultation
                </button>
                <button
                  type="button"
                  onClick={() => setPage('doctors')}
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3.5 py-2 text-[10px] font-bold backdrop-blur-md"
                >
                  Find a specialist
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="relative flex h-full flex-col bg-[#F7F9FC] text-[#0F172A]">
          <div className="bg-[#0A2F5C] px-7 py-4 text-white">{nav}</div>
          <div className="min-h-0 flex-1 overflow-y-auto px-7 py-5">
            {page === 'departments' ? (
              <>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0C69B6]">
                  Departments
                </p>
                <h3 className="mt-1 font-serif text-[26px] font-semibold text-[#0A2F5C]">
                  Specialist care under one roof
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ['General Medicine', '/services/app/opd.jpg'],
                    ['Diagnostics & Lab', '/services/app/lab.jpg'],
                    ['Pharmacy', '/services/app/pharmacy.jpg'],
                    ['Orthopaedics', '/services/app/care.jpg'],
                    ['Paediatrics', '/services/app/lobby.jpg'],
                    ['IPD wards', '/services/app/ipd.jpg'],
                  ].map(([name, img]) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() =>
                        deeper(`Full ${name} details and booking live on the hospital site.`)
                      }
                      className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white text-left"
                    >
                      <img src={asset(img)} alt="" className="h-16 w-full object-cover" />
                      <p className="px-2.5 py-2 text-[11px] font-extrabold">{name}</p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0C69B6]">
                  Doctors
                </p>
                <h3 className="mt-1 font-serif text-[26px] font-semibold text-[#0A2F5C]">
                  Consultants on the OPD list
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ['Dr. Vikram Malhotra', 'General Medicine', '/services/app/vikram.jpg'],
                    ['Dr. Ishita Banerjee', 'Paediatrics', '/services/app/ishita.jpg'],
                    ['Dr. Manav Sharma', 'Orthopaedics', '/services/app/manav.jpg'],
                    ['Dr. Rahul Mehta', 'Cardiology', '/services/app/rahul.jpg'],
                  ].map(([name, role, img]) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() =>
                        deeper('Doctor schedules and live booking open on the hospital website.')
                      }
                      className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-3 text-left"
                    >
                      <img
                        src={asset(img)}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover object-[center_30%]"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-extrabold">{name}</p>
                        <p className="text-[10px] font-semibold text-[#64748B]">{role}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
            <button
              type="button"
              onClick={() =>
                deeper('Open the live Curabiz hospital site for the complete patient journey.')
              }
              className="mt-5 text-[12px] font-extrabold text-[#0C69B6]"
            >
              See more on live site →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Full interactive Flutter-style patient app running inside the Services page. */
export function HospitalAppScreen() {
  return <HospitalAppDemo />;
}

export function BrandDesktopScreen() {
  const { askLiveLink } = useLiveLink();
  const deeper = (reason: string) =>
    askLiveLink({ url: BRAND_LIVE, product: 'B.L. Hissaria', reason });

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0B1C14] text-[#F4F0E6]">
      <img
        src={asset('/services/brand-hero.webp')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C14]/92 via-[#0B1C14]/55 to-[#0B1C14]/15" />

      <div className="relative flex h-full flex-col px-7 py-5">
        <div className="flex items-center justify-between">
          <p className="font-serif text-[13px] tracking-wide text-[#E8D5A8]">
            B.L. Hissaria Jewellers
          </p>
          <div className="hidden gap-4 text-[10px] uppercase tracking-[0.14em] text-[#F4F0E6]/80 sm:flex">
            <span className="text-[#C6A15B]">Home</span>
            {['Collections', 'About Us', 'Contact'].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() =>
                  deeper(`${label} and full brand storytelling continue on blhissaria.com.`)
                }
                className="hover:text-[#C6A15B]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto max-w-[52%] pb-10 pt-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#F4F0E6]/75">
            Timeless by Generations
          </p>
          <h3 className="mt-3 font-serif text-[32px] leading-[1.05] text-[#F4F0E6] sm:text-[38px]">
            Jewellery that
            <span className="block">tells your story.</span>
          </h3>
          <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-[#F4F0E6]/65">
            Exquisite designs. Unwavering quality. A legacy of trust for generations.
          </p>
          <button
            type="button"
            onClick={() => deeper('Collections, lookbooks and showroom booking live on blhissaria.com.')}
            className="mt-5 inline-flex bg-[#C6A15B] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#0B1C14]"
          >
            Explore Our Collections →
          </button>

          <div className="mt-8 flex gap-8 border-t border-[#C6A15B]/35 pt-4">
            {[
              ['50+', 'Years of Trust'],
              ['1L+', 'Happy Customers'],
              ['100%', 'Hallmarked'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-serif text-[22px] text-[#C6A15B]">{v}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#F4F0E6]/55">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EcommerceDesktopScreen() {
  const { askLiveLink } = useLiveLink();
  const deeper = (reason: string) =>
    askLiveLink({ url: BRAND_LIVE, product: 'B.L. Hissaria boutique', reason });

  const products = [
    { name: 'Bridal Necklace', img: '/services/product-bridal-necklace.webp', price: '₹2,48,000' },
    { name: 'Diamond Studs', img: '/services/product-diamond-studs.webp', price: '₹86,500' },
    { name: 'Gold Kada', img: '/services/product-gold-kada.webp', price: '₹64,200' },
    { name: 'Mangalsutra', img: '/services/product-mangalsutra.webp', price: '₹52,800' },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#F7F4EF] text-[#0B1C14]">
      <div className="relative min-h-[58%] overflow-hidden bg-[#0B1C14]">
        <img
          src={asset('/services/ecom-hero.webp')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C14]/90 via-[#0B1C14]/55 to-[#0B1C14]/20" />
        <div className="relative flex h-full flex-col justify-between px-6 py-4 text-[#F4F0E6]">
          <div className="flex items-center justify-between">
            <p className="font-serif text-[12px] text-[#E8D5A8]">B.L. Hissaria · Boutique</p>
            <div className="flex gap-3 text-[9px] uppercase tracking-[0.14em] text-[#F4F0E6]/75">
              <span>Shop</span>
              <button type="button" onClick={() => deeper('Bridal paths continue on the live boutique.')}>
                Bridal
              </button>
              <button type="button" onClick={() => deeper('Cart and checkout open on the live boutique.')}>
                Cart (2)
              </button>
            </div>
          </div>
          <div className="pb-3 pt-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#C6A15B]">Online Boutique</p>
            <h3 className="mt-2 max-w-md font-serif text-[28px] leading-[1.05]">
              Jewellery that tells your story.
            </h3>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => deeper('Full catalogue browsing continues on the live boutique.')}
                className="bg-[#C6A15B] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#0B1C14]"
              >
                Shop All →
              </button>
              <button
                type="button"
                onClick={() => deeper('Bridal collection opens on the live boutique.')}
                className="border border-[#F4F0E6]/35 px-3 py-2 text-[9px] uppercase tracking-[0.14em]"
              >
                Bridal Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.16em] text-[#C6A15B]">Featured</p>
            <p className="font-serif text-[16px]">Chosen for this season</p>
          </div>
          <button
            type="button"
            onClick={() => deeper('See the complete featured edit on the live boutique.')}
            className="text-[9px] uppercase tracking-[0.14em] text-[#0B1C14]/50"
          >
            View all →
          </button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {products.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => deeper(`${p.name} product detail and purchase live on the boutique.`)}
              className="overflow-hidden bg-white text-left"
            >
              <img src={asset(p.img)} alt="" className="aspect-square w-full object-cover" />
              <div className="px-1.5 py-1.5">
                <p className="truncate text-[9px] font-medium">{p.name}</p>
                <p className="text-[9px] text-[#C6A15B]">{p.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CHAT_REPLIES: Record<string, string> = {
  'Just browsing':
    'Of course — take your time. I can point you to bridal, everyday gold, or diamond favourites whenever you’re ready.',
  'I want to buy / visit':
    'Wonderful. Share a preferred date and city showroom, and our team will confirm on WhatsApp.',
  'Store timings':
    'We’re open Mon–Sat 11:00 AM – 8:00 PM, Sunday 11:00 AM – 6:00 PM. Walk-ins welcome.',
  Address:
    'Visit us at our Jaipur showroom — full map and directions open on the live site.',
  'Gold rate':
    'Today’s indicative 22K rate is shown on the live site and updated by the team each morning.',
};

export function ChatbotScreen() {
  const { askLiveLink } = useLiveLink();
  const [messages, setMessages] = useState<
    { from: 'bot' | 'user'; text: string }[]
  >([
    {
      from: 'bot',
      text: "Namaste! I'm Sunehri from B.L. Hissaria. I can answer quick questions — and if you're seriously looking for jewellery, I'll take a few details so our team can help.",
    },
  ]);

  const send = (q: string) => {
    const reply =
      CHAT_REPLIES[q] ??
      'I can help with browsing, buying, timings, address and gold rate in this preview.';
    setMessages((prev) => [...prev, { from: 'user', text: q }, { from: 'bot', text: reply }]);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#F7F4EF] text-[#0B1C14]">
      <div className="flex items-center justify-between bg-[#0B1C14] px-3 pb-3 pt-8 text-[#F4F0E6]">
        <div className="flex items-center gap-2">
          <img
            src={asset('/services/chatbot-avatar.webp')}
            alt=""
            className="h-8 w-8 rounded-full object-cover ring-1 ring-[#C6A15B]/50"
          />
          <div>
            <p className="font-serif text-[13px] leading-tight">Sunehri</p>
            <p className="text-[9px] tracking-wide text-[#F4F0E6]/55">B.L. Hissaria · online</p>
          </div>
        </div>
        <span className="text-[#F4F0E6]/70">✕</span>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3 py-3">
        {messages.map((m, i) => (
          <div
            key={`${m.from}-${i}`}
            className={`max-w-[92%] px-3 py-2 text-[11px] leading-relaxed ${
              m.from === 'bot'
                ? 'border border-[#0B1C14]/10 bg-[#EFE9DF]/80'
                : 'ml-auto bg-[#0B1C14] text-[#F4F0E6]'
            }`}
          >
            {m.text}
          </div>
        ))}
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(CHAT_REPLIES).map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => send(q)}
              className="rounded-full border border-[#C6A15B]/40 px-2.5 py-1 text-[9px] tracking-wide text-[#0B1C14]/80"
            >
              {q}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() =>
              askLiveLink({
                url: BRAND_LIVE,
                product: 'Sunehri chatbot',
                reason: 'WhatsApp handoff continues on the live B.L. Hissaria site.',
              })
            }
            className="border border-[#0B1C14]/15 py-1.5 text-center text-[9px] uppercase tracking-[0.12em]"
          >
            WhatsApp
          </button>
          <button
            type="button"
            onClick={() =>
              askLiveLink({
                url: BRAND_LIVE,
                product: 'Sunehri chatbot',
                reason: 'Visit booking and lead capture continue on the live site.',
              })
            }
            className="bg-[#0B1C14] py-1.5 text-center text-[9px] uppercase tracking-[0.12em] text-[#F4F0E6]"
          >
            Book visit
          </button>
        </div>
      </div>

      <div className="flex border-t border-[#0B1C14]/10">
        <span className="flex-1 px-3 py-3 text-[12px] text-[#0B1C14]/40">Type your message…</span>
        <span className="px-3 py-3 text-[#C6A15B]">➤</span>
      </div>
    </div>
  );
}

