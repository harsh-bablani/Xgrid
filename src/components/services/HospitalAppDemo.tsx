import { useMemo, useState } from 'react';
import { asset } from '../../lib/asset';

type Doctor = {
  id: string;
  role: string;
  name: string;
  when: string;
  fee: string;
  photo: string;
  bio: string;
};

type Visit = {
  id: string;
  doctorName: string;
  role: string;
  when: string;
  fee: string;
};

type Tab = 'home' | 'appointments' | 'profile';
type Stack = 'home' | 'doctors' | 'detail' | 'booked';

const DOCTORS: Doctor[] = [
  {
    id: 'vikram',
    role: 'Consultant – General Medicine',
    name: 'Dr. Vikram Malhotra',
    when: 'Mon · OPD',
    fee: '600',
    photo: '/services/app/vikram.jpg',
    bio: 'Leads adult medicine OPD for chronic and acute conditions, with clear treatment plans and practical follow-ups.',
  },
  {
    id: 'ishita',
    role: 'Consultant – Paediatrics',
    name: 'Dr. Ishita Banerjee',
    when: 'Tue · OPD',
    fee: '500',
    photo: '/services/app/ishita.jpg',
    bio: 'Paediatric clinics with growth tracking, immunisation schedules and parent counselling.',
  },
  {
    id: 'manav',
    role: 'Consultant – Orthopaedics',
    name: 'Dr. Manav Sharma',
    when: 'Wed · OPD',
    fee: '700',
    photo: '/services/app/manav.jpg',
    bio: 'Joint pain, sports injuries and spine complaints, with rehab coordination.',
  },
  {
    id: 'rahul',
    role: 'Consultant – Cardiology',
    name: 'Dr. Rahul Mehta',
    when: 'Thu · OPD',
    fee: '800',
    photo: '/services/app/rahul.jpg',
    bio: 'Hypertension, ECG-supported evaluation and practical heart-risk counselling.',
  },
  {
    id: 'aisha',
    role: 'Consultant – Obstetrics & Gynaecology',
    name: 'Dr. Aisha Khan',
    when: 'Fri · OPD',
    fee: '650',
    photo: '/services/app/aisha.jpg',
    bio: 'Women’s health consultations, antenatal check-ups and PCOS-focused care.',
  },
];

const DEPTS = [
  { name: 'General Medicine', count: '2 on OPD', img: '/services/app/opd.jpg' },
  { name: 'Paediatrics', count: '1 on OPD', img: '/services/app/lobby.jpg' },
  { name: 'Orthopaedics', count: '1 on OPD', img: '/services/app/care.jpg' },
  { name: 'Diagnostics & Lab', count: '2 on OPD', img: '/services/app/lab.jpg' },
  { name: 'Pharmacy', count: 'In-house', img: '/services/app/pharmacy.jpg' },
];

/** Full in-page Curabiz patient app demo — Home / Appointments / Profile + booking. */
export default function HospitalAppDemo() {
  const [tab, setTab] = useState<Tab>('home');
  const [stack, setStack] = useState<Stack>('home');
  const [selected, setSelected] = useState<Doctor | null>(null);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [patientName] = useState('Demo Patient');

  const openDoctors = () => {
    setTab('home');
    setStack('doctors');
  };

  const openDoctor = (doctor: Doctor) => {
    setSelected(doctor);
    setTab('home');
    setStack('detail');
  };

  const confirmBooking = () => {
    if (!selected) return;
    const visit: Visit = {
      id: `CB-${1000 + visits.length + 1}`,
      doctorName: selected.name,
      role: selected.role,
      when: selected.when,
      fee: selected.fee,
    };
    setVisits((prev) => [visit, ...prev]);
    setStack('booked');
  };

  const goHome = () => {
    setTab('home');
    setStack('home');
    setSelected(null);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#F7F9FC] text-[#0F172A]">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {tab === 'home' && stack === 'home' ? (
          <HomePane
            doctors={DOCTORS}
            onSearch={openDoctors}
            onBook={openDoctors}
            onAllDoctors={openDoctors}
            onDoctor={openDoctor}
          />
        ) : null}
        {tab === 'home' && stack === 'doctors' ? (
          <DoctorsPane
            doctors={DOCTORS}
            onBack={() => setStack('home')}
            onDoctor={openDoctor}
          />
        ) : null}
        {tab === 'home' && stack === 'detail' && selected ? (
          <DetailPane
            doctor={selected}
            onBack={() => setStack('doctors')}
            onBook={confirmBooking}
          />
        ) : null}
        {tab === 'home' && stack === 'booked' && selected ? (
          <BookedPane
            doctor={selected}
            visitId={visits[0]?.id ?? 'CB-1001'}
            onHome={goHome}
            onVisits={() => {
              setTab('appointments');
              setStack('home');
            }}
          />
        ) : null}
        {tab === 'appointments' ? (
          <AppointmentsPane visits={visits} onFind={openDoctors} />
        ) : null}
        {tab === 'profile' ? (
          <ProfilePane visits={visits} patientName={patientName} />
        ) : null}
      </div>

      <nav className="shrink-0 border-t border-[#E2E8F0] bg-white">
        <div className="grid h-16 grid-cols-3">
          {(
            [
              { id: 'home' as const, label: 'Home', icon: HomeIcon },
              { id: 'appointments' as const, label: 'Appointments', icon: ApptIcon },
              { id: 'profile' as const, label: 'Profile', icon: ProfileIcon },
            ] as const
          ).map((item) => {
            const active = tab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setTab(item.id);
                  if (item.id === 'home') setStack('home');
                }}
                className={`flex flex-col items-center justify-center gap-1 ${
                  active ? 'text-[#0A2F5C]' : 'text-[#64748B]'
                }`}
              >
                <Icon />
                <span className="text-[11px] font-extrabold">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function HomePane({
  doctors,
  onSearch,
  onBook,
  onAllDoctors,
  onDoctor,
}: {
  doctors: Doctor[];
  onSearch: () => void;
  onBook: () => void;
  onAllDoctors: () => void;
  onDoctor: (d: Doctor) => void;
}) {
  return (
    <div className="px-5 pb-5 pt-9">
      <div className="flex items-end justify-between gap-3">
        <p className="font-serif text-[32px] font-semibold leading-none tracking-tight text-[#0A2F5C]">
          curabiz
        </p>
        <p className="pb-1 text-[12px] font-bold text-[#64748B]">Kalwar Road</p>
      </div>
      <p className="mt-1 text-[14px] font-bold text-[#475569]">Curabiz Hospital</p>

      <button
        type="button"
        onClick={onSearch}
        className="mt-3 flex w-full items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-3.5 py-3 text-left"
      >
        <SearchIcon />
        <span className="text-[14px] font-semibold text-[#64748B]">
          Search a doctor or department
        </span>
      </button>

      <div className="relative mt-3 overflow-hidden rounded-[28px]">
        <img
          src={asset('/services/app/hero.jpg')}
          alt=""
          className="h-[168px] w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,47,92,0.35) 0%, rgba(10,47,92,0.88) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 px-[18px] pb-3.5">
          <p className="font-serif text-[26px] font-semibold leading-[1.05] text-white">
            Expert care
            <span className="block">close to home</span>
          </p>
          <button
            type="button"
            onClick={onBook}
            className="mt-2 inline-flex rounded-full bg-[#0A2F5C] px-4 py-2 text-[13px] font-extrabold text-white"
          >
            Book appointment
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {[
          ['15+', 'Years in Jaipur'],
          ['24×7', 'Emergency desk'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-[18px] border border-[#E2E8F0] bg-white px-3.5 py-3">
            <p className="font-serif text-[22px] font-semibold text-[#0A2F5C]">{value}</p>
            <p className="mt-0.5 text-[12px] font-bold text-[#64748B]">{label}</p>
          </div>
        ))}
      </div>

      <SectionHead eyebrow="Consultants" title="On the OPD list" action="All" onAction={onAllDoctors} />
      <div className="mt-2.5 space-y-2.5">
        {doctors.slice(0, 3).map((d) => (
          <DoctorCard key={d.id} doctor={d} onClick={() => onDoctor(d)} />
        ))}
      </div>

      <SectionHead eyebrow="Departments" title="Specialist care" action="All" onAction={onAllDoctors} />
      <div className="mt-2.5 flex gap-2.5 overflow-x-auto pb-1">
        {DEPTS.map((dept) => (
          <button
            key={dept.name}
            type="button"
            onClick={onAllDoctors}
            className="w-[148px] shrink-0 overflow-hidden rounded-[22px] border border-[#E2E8F0] bg-white text-left"
          >
            <img src={asset(dept.img)} alt="" className="h-14 w-full object-cover" />
            <div className="px-2.5 pb-2 pt-1.5">
              <p className="truncate text-[12px] font-extrabold text-[#0F172A]">{dept.name}</p>
              <p className="mt-0.5 text-[11px] font-bold text-[#64748B]">{dept.count}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function DoctorsPane({
  doctors,
  onBack,
  onDoctor,
}: {
  doctors: Doctor[];
  onBack: () => void;
  onDoctor: (d: Doctor) => void;
}) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return doctors;
    return doctors.filter(
      (d) =>
        d.name.toLowerCase().includes(needle) ||
        d.role.toLowerCase().includes(needle),
    );
  }, [doctors, q]);

  return (
    <div className="px-5 pb-5 pt-9">
      <button type="button" onClick={onBack} className="text-[13px] font-extrabold text-[#0C69B6]">
        ← Home
      </button>
      <p className="mt-2 font-serif text-[28px] font-semibold text-[#0A2F5C]">Doctors</p>
      <p className="mt-1 text-[13px] font-semibold text-[#64748B]">OPD consultants on the list</p>
      <label className="mt-3 flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-3.5 py-3">
        <SearchIcon />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name or specialty"
          className="w-full bg-transparent text-[14px] font-semibold text-[#0F172A] outline-none placeholder:text-[#64748B]"
        />
      </label>
      <div className="mt-3 space-y-2.5">
        {filtered.map((d) => (
          <DoctorCard key={d.id} doctor={d} onClick={() => onDoctor(d)} />
        ))}
      </div>
    </div>
  );
}

function DetailPane({
  doctor,
  onBack,
  onBook,
}: {
  doctor: Doctor;
  onBack: () => void;
  onBook: () => void;
}) {
  return (
    <div className="px-5 pb-6 pt-9">
      <button type="button" onClick={onBack} className="text-[13px] font-extrabold text-[#0C69B6]">
        ← Doctors
      </button>
      <div className="mt-3 flex items-center gap-3 rounded-[22px] border border-[#E2E8F0] bg-white p-3 shadow-[0_10px_24px_rgba(10,47,92,0.08)]">
        <img
          src={asset(doctor.photo)}
          alt=""
          className="h-[84px] w-[84px] rounded-full border-2 border-white object-cover object-[center_30%] shadow"
        />
        <div className="min-w-0">
          <p className="text-[12px] font-extrabold text-[#0C69B6]">{doctor.role}</p>
          <p className="mt-1 text-[18px] font-extrabold leading-tight text-[#0F172A]">
            {doctor.name}
          </p>
          <p className="mt-1 text-[12px] font-semibold text-[#64748B]">{doctor.when}</p>
        </div>
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E2E8F0] bg-white p-4">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0C69B6]">
          About
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-[#475569]">{doctor.bio}</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="font-serif text-[28px] font-semibold text-[#0A2F5C]">₹{doctor.fee}</p>
            <p className="text-[12px] font-bold text-[#64748B]">consultation fee</p>
          </div>
          <button
            type="button"
            onClick={onBook}
            className="rounded-[14px] bg-[#FF641F] px-4 py-3 text-[13px] font-extrabold text-white"
          >
            Book now
          </button>
        </div>
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-[#64748B]">
        Demo booking stays in this preview — open the live hospital site for real appointments.
      </p>
    </div>
  );
}

function BookedPane({
  doctor,
  visitId,
  onHome,
  onVisits,
}: {
  doctor: Doctor;
  visitId: string;
  onHome: () => void;
  onVisits: () => void;
}) {
  return (
    <div className="flex min-h-full flex-col px-5 pb-6 pt-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0C69B6]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12.5 9.5 17 19 7.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mt-4 text-center font-serif text-[30px] font-semibold text-[#0A2F5C]">
        Visit booked
      </p>
      <p className="mt-2 text-center text-[13px] leading-relaxed text-[#475569]">
        Demo booking for {doctor.name}. Booking id {visitId}.
      </p>
      <div className="mt-5 rounded-[22px] border border-[#E2E8F0] bg-white p-4">
        <p className="text-[12px] font-extrabold text-[#0C69B6]">{doctor.role}</p>
        <p className="mt-1 text-[16px] font-extrabold">{doctor.name}</p>
        <p className="mt-2 text-[13px] font-semibold text-[#64748B]">
          {doctor.when} · ₹{doctor.fee}
        </p>
      </div>
      <div className="mt-auto space-y-2 pt-8">
        <button
          type="button"
          onClick={onVisits}
          className="flex h-12 w-full items-center justify-center rounded-[14px] bg-[#FF641F] text-[14px] font-extrabold text-white"
        >
          View appointments
        </button>
        <button
          type="button"
          onClick={onHome}
          className="flex h-12 w-full items-center justify-center rounded-[14px] border border-[#E2E8F0] bg-white text-[14px] font-extrabold text-[#0A2F5C]"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

function AppointmentsPane({ visits, onFind }: { visits: Visit[]; onFind: () => void }) {
  return (
    <div className="px-5 pb-5 pt-9">
      <p className="font-serif text-[32px] font-semibold text-[#0A2F5C]">Your visits</p>
      <p className="mt-1 text-[13px] font-semibold text-[#475569]">
        Bookings confirmed in this demo preview.
      </p>
      {visits.length === 0 ? (
        <div className="mt-8 rounded-[22px] border border-[#E2E8F0] bg-white p-5 text-center">
          <p className="font-serif text-[24px] font-semibold text-[#0A2F5C]">No visits yet</p>
          <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
            Book a consultant from Home — demo visits appear here.
          </p>
          <button
            type="button"
            onClick={onFind}
            className="mt-4 inline-flex rounded-[14px] bg-[#FF641F] px-4 py-3 text-[13px] font-extrabold text-white"
          >
            Find a doctor
          </button>
        </div>
      ) : (
        <div className="mt-4 space-y-2.5">
          {visits.map((v) => (
            <div
              key={v.id}
              className="rounded-[22px] border border-[#E2E8F0] bg-white p-4 shadow-[0_10px_24px_rgba(10,47,92,0.06)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0C69B6]">
                    Confirmed
                  </p>
                  <p className="mt-1 text-[15px] font-extrabold">{v.doctorName}</p>
                  <p className="mt-1 text-[12px] font-semibold text-[#64748B]">{v.role}</p>
                </div>
                <p className="font-serif text-[18px] font-semibold text-[#0A2F5C]">₹{v.fee}</p>
              </div>
              <p className="mt-3 text-[12px] font-bold text-[#475569]">
                {v.when} · {v.id}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProfilePane({ visits, patientName }: { visits: Visit[]; patientName: string }) {
  return (
    <div className="px-5 pb-5 pt-9">
      <p className="font-serif text-[32px] font-semibold text-[#0A2F5C]">Profile</p>
      <div className="mt-4 rounded-[22px] border border-[#E2E8F0] bg-white p-4 shadow-[0_10px_24px_rgba(10,47,92,0.06)]">
        {visits.length === 0 ? (
          <p className="text-[13px] leading-relaxed text-[#475569]">
            After you book, the patient name, phone and UHID from the hospital record show up here.
          </p>
        ) : (
          <>
            <p className="font-serif text-[26px] font-semibold text-[#0A2F5C]">{patientName}</p>
            <p className="mt-1 text-[13px] font-extrabold text-[#0C69B6]">UHID DEMO-2048</p>
            <p className="mt-3 text-[13px] font-bold">+91 925 737 3668</p>
            <p className="text-[13px] text-[#475569]">info@slatebiz.com</p>
            <p className="mt-2 text-[11px] font-semibold text-[#64748B]">
              From the latest booking stored in this preview.
            </p>
          </>
        )}
      </div>

      <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0C69B6]">
        Hospital desk
      </p>
      <div className="mt-2 rounded-[22px] border border-[#E2E8F0] bg-white p-4">
        <p className="text-[15px] font-extrabold">Curabiz Hospital</p>
        <p className="mt-2 text-[12px] leading-relaxed text-[#475569]">
          DH-079, 1st Floor, Ansal Sushant City-1, Kalwar Road, Jaipur, Rajasthan 303706
        </p>
        <p className="mt-2 text-[12px] font-semibold text-[#64748B]">
          Mon – Sat: 9:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM
        </p>
        <p className="mt-3 text-[13px] font-extrabold text-[#0C69B6]">+91 925 737 3668</p>
      </div>
    </div>
  );
}

function DoctorCard({ doctor, onClick }: { doctor: Doctor; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-[22px] border border-[#E2E8F0] bg-white p-3 text-left shadow-[0_10px_24px_rgba(10,47,92,0.08)]"
    >
      <img
        src={asset(doctor.photo)}
        alt=""
        className="h-[64px] w-[64px] shrink-0 rounded-full border-2 border-white object-cover object-[center_30%] shadow-[0_4px_12px_rgba(10,47,92,0.16)]"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-extrabold text-[#0C69B6]">{doctor.role}</p>
        <p className="mt-0.5 text-[15px] font-extrabold leading-[1.2] text-[#0F172A]">
          {doctor.name}
        </p>
        <p className="mt-1 text-[12px] font-semibold text-[#64748B]">{doctor.when}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="font-serif text-[20px] font-semibold text-[#0A2F5C]">₹{doctor.fee}</p>
        <p className="text-[11px] font-bold text-[#64748B]">consult</p>
      </div>
    </button>
  );
}

function SectionHead({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow: string;
  title: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="mt-4 flex items-end justify-between">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0C69B6]">
          {eyebrow}
        </p>
        <p className="mt-1 font-serif text-[24px] font-semibold leading-none text-[#0A2F5C]">
          {title}
        </p>
      </div>
      <button
        type="button"
        onClick={onAction}
        className="pb-0.5 text-[13px] font-extrabold text-[#0C69B6]"
      >
        {action}
      </button>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="#0A2F5C" strokeWidth="2" />
      <path d="M16 16l4 4" stroke="#0A2F5C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3.2 3.5 10.2V21a.9.9 0 0 0 .9.9h5.1v-5.8h5v5.8h5.1a.9.9 0 0 0 .9-.9v-10.8L12 3.2Z" />
    </svg>
  );
}

function ApptIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.5v3M16 3.5v3M3.5 9.5h17" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="8.2" r="3.6" />
      <path d="M4.5 19.2c1.6-3.2 4.1-4.8 7.5-4.8s5.9 1.6 7.5 4.8" />
    </svg>
  );
}
