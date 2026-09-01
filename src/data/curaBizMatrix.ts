import {
  Users,
  Calendar,
  BedDouble,
  ClipboardList,
  Pill,
  TestTube,
  Flower2,
  Package,
  Receipt,
  Shield,
} from 'lucide-react';
import type { ProductModule } from './productMatrix';

export const curaBizModules: ProductModule[] = [
  {
    id: 'patient',
    number: '01',
    title: 'Patient Management',
    description:
      'UHID, KYC, case files, guarantors, and communication preferences — one patient identity across OPD, IPD, and pharmacy.',
    icon: Users,
    features: [
      {
        title: 'Patient master & KYC',
        description:
          'Core patient record with Aadhaar, PAN, and ABHA-ready identity fields plus change history.',
      },
      {
        title: 'UHID & visit numbering',
        description:
          'Unique Hospital ID and visit numbers with daily UHID reset so reception stops maintaining paper registers.',
      },
      {
        title: 'Patient case file',
        description:
          'A master case folder linking encounters, diagnoses, investigations, and reports for every patient.',
      },
      {
        title: 'Guarantor tracking',
        description:
          'Capture the financially responsible person — parent, spouse, or employer — with the admission.',
      },
      {
        title: 'Communication preferences',
        description:
          'SMS, WhatsApp, and email opt-ins stored per patient for reminders and Rx sharing.',
      },
      {
        title: 'Allergies & history capture',
        description:
          'Record allergies, reactions, and quick clinical history at the counter before the doctor sees the patient.',
      },
    ],
  },
  {
    id: 'opd',
    number: '02',
    title: 'OPD & Appointments',
    description:
      'Token-based OPD, doctor slots, consultation fees, and online/offline booking with fewer no-shows.',
    icon: Calendar,
    features: [
      {
        title: 'OPD registration & tokens',
        description:
          'Daily OPD entry with token generation for orderly queues during evening rush.',
      },
      {
        title: 'Appointment scheduling',
        description:
          'Doctor slot booking with consultation fee capture from one screen — online and offline.',
      },
      {
        title: 'Doctor visit notes',
        description:
          'Per-visit consultation notes and charges that feed billing without a second entry.',
      },
      {
        title: 'OPD clinical history',
        description:
          'Quick capture of medical, family, social history, and allergies at the OPD counter.',
      },
      {
        title: 'Reminders via SMS & WhatsApp',
        description:
          'Automatic appointment reminders that reduce no-shows without extra staff calls.',
      },
      {
        title: 'Multi-doctor polyclinic flow',
        description:
          'Each doctor works their own queue while reception keeps a single front-desk view.',
      },
    ],
  },
  {
    id: 'ipd',
    number: '03',
    title: 'IPD, Beds & Critical Care',
    description:
      'Admission, ward/ICU beds, nursing charts, ventilator logs, and discharge summaries for full hospitals.',
    icon: BedDouble,
    features: [
      {
        title: 'IPD & day-care admission',
        description:
          'Admission entry for IPD and day care with controlled admission number series.',
      },
      {
        title: 'Ward, room & bed masters',
        description:
          'Live occupancy across wards, rooms, and beds — including transfers and upgrades mid-stay.',
      },
      {
        title: 'ICU register',
        description:
          'ICU bed-level detail so critical occupancy is visible to nursing and admin at once.',
      },
      {
        title: 'NICU medication charting',
        description:
          'Neonatal ICU drug charts with dedicated numbering for high-care environments.',
      },
      {
        title: 'Ventilator & blood gas logs',
        description: 'Ventilator settings with ABG/VBG values tied to the patient course.',
      },
      {
        title: 'Intake–output & vitals',
        description:
          'Fluid balance plus BP, pulse, temperature, and SpO2 charting for nursing handover.',
      },
      {
        title: 'Hospital course & discharge',
        description:
          'Treatment narrative during stay and at discharge that feeds a professional discharge summary.',
      },
      {
        title: 'Visitor & ambulance support',
        description:
          'Visitor pass logs and vehicle/route masters for attendant control and ambulance coordination.',
      },
    ],
  },
  {
    id: 'emr',
    number: '04',
    title: 'Clinical EMR / EHR',
    description:
      'Longitudinal records — diagnosis, HOPI, examination, paediatrics, immunisation, and investigation history.',
    icon: ClipboardList,
    features: [
      {
        title: 'ICD-linked diagnosis',
        description:
          'Provisional and final diagnoses mapped to disease masters for cleaner analytics and audits.',
      },
      {
        title: 'HOPI & on examination',
        description:
          'History of present illness and systemic examination findings in the digital case file.',
      },
      {
        title: 'Past, family & social history',
        description:
          'Longitudinal history kept separate from quick OPD capture so nothing is overwritten.',
      },
      {
        title: 'Paediatric perinatal & development',
        description:
          'Antenatal, birth, postnatal, and milestone history for paediatric practices.',
      },
      {
        title: 'Growth charts (0–2 years)',
        description:
          'Built-in paediatric growth charts so mothers see proper digital tracking instead of photocopies.',
      },
      {
        title: 'Immunisation schedule',
        description:
          'Vaccine schedule and administration log inside the same patient record.',
      },
      {
        title: 'Investigation orders & reports',
        description:
          'Order investigations and attach uploaded reports back to the EHR in one click.',
      },
      {
        title: 'Medication history',
        description:
          'Running list of drugs the patient is on — visible before the next prescription.',
      },
    ],
  },
  {
    id: 'erx',
    number: '05',
    title: 'e-Prescription',
    description:
      'Drug database, schedule classification, favourites, copy-previous-Rx, and printable/shareable prescriptions.',
    icon: Pill,
    features: [
      {
        title: 'Prescription with drugs & labs',
        description:
          'One Rx master that captures medicines and lab tests together for the visit.',
      },
      {
        title: 'Drug master & schedules',
        description:
          'Drug list with Schedule H, H1, and X classification for compliant dispensing.',
      },
      {
        title: 'Route of administration',
        description:
          'Oral, IV, IM and other routes standardised so nursing and pharmacy read the same order.',
      },
      {
        title: 'Favourite drugs & lab panels',
        description:
          'Doctor-level saved medicines and lab sets for one-click reuse in busy OPDs.',
      },
      {
        title: 'Copy previous prescription',
        description:
          'Review the last visit, copy the Rx, tweak if needed — follow-ups in seconds.',
      },
      {
        title: 'Print & WhatsApp share',
        description:
          'Share clear digital prescriptions with patients — less handwriting confusion at the pharmacy.',
      },
    ],
  },
  {
    id: 'lab',
    number: '06',
    title: 'Laboratory',
    description:
      'Test masters, sample numbers, result entry, and billing in the same clinical loop as the doctor order.',
    icon: TestTube,
    features: [
      {
        title: 'Lab test & parameter masters',
        description:
          'Define tests and per-parameter normal ranges once for consistent reporting.',
      },
      {
        title: 'OPD & IPD lab orders',
        description:
          'Orders from the doctor screen with sample number generation for OPD and IPD alike.',
      },
      {
        title: 'Result entry against parameters',
        description:
          'Enter results parameter-wise and attach them to the patient EHR automatically.',
      },
      {
        title: 'Lab billing linkage',
        description:
          'Payment capture for lab orders so clinical work and revenue stay reconciled.',
      },
      {
        title: 'Prior report access',
        description:
          'Old investigation reports available in one click during follow-up visits.',
      },
    ],
  },
  {
    id: 'panchkarma',
    number: '07',
    title: 'Panchkarma & AYUSH',
    description:
      'Therapy courses, day-wise schedules, medicines used, and billing — built for Ayurveda clinics.',
    icon: Flower2,
    features: [
      {
        title: 'Panchkarma case file',
        description:
          'Course of Ayurvedic therapy tracked as a structured case against the patient.',
      },
      {
        title: 'Day-wise therapy schedule',
        description:
          'Plan therapies across days so the therapy room and Vaidya stay aligned.',
      },
      {
        title: 'Therapy & medicine items',
        description:
          'Record therapies and medicines used during the course for clinical and stock clarity.',
      },
      {
        title: 'Diet plan with patient record',
        description:
          'Save diet plans with the patient so follow-ups carry the full Ayurveda context.',
      },
      {
        title: 'Course fee collection',
        description:
          'Collect Panchkarma course fees without a separate ledger outside the HIMS.',
      },
    ],
  },
  {
    id: 'pharmacy',
    number: '08',
    title: 'Pharmacy & Procurement',
    description:
      'Rx-linked dispensing, batch/expiry, purchase orders, breakage, and GST-ready stock valuation.',
    icon: Package,
    features: [
      {
        title: 'Prescription-linked dispensing',
        description:
          "Doctor's Rx appears on the pharmacy screen — stock and billing update without retyping.",
      },
      {
        title: 'Drug & consumable masters',
        description:
          'Item, brand, HSN, alternate UOM, and kit assembly for hospital pharmacy reality.',
      },
      {
        title: 'Batch & expiry control',
        description:
          'Batch opening balances and expiry alerts that protect high-value drug inventory.',
      },
      {
        title: 'Stock register & valuation',
        description:
          'Item and value ledgers with period-end closing and valuation reports.',
      },
      {
        title: 'Purchase order to GRN',
        description:
          'PO, purchase invoice, returns, and freight loading into landed cost.',
      },
      {
        title: 'Breakage & loss write-off',
        description:
          'Expiry, damage, and pilferage vouchers with clear auditability.',
      },
      {
        title: 'Goods in transit',
        description:
          'Track inter-branch stock that has left but not yet been received.',
      },
      {
        title: 'OTC & schedule H1 KYC sales',
        description:
          'Counter sales with KYC where schedule rules require it — separate from full tax invoices when needed.',
      },
    ],
  },
  {
    id: 'billing',
    number: '09',
    title: 'Billing, Insurance & Finance',
    description:
      'OPD/IPD billing without accounting expertise, insurance panels, GST/TDS, and day-end close.',
    icon: Receipt,
    features: [
      {
        title: 'OPD & IPD billing',
        description:
          'Bills connected to clinical actions so front desk can close without chasing accounts staff.',
      },
      {
        title: 'Insurance & TPA panels',
        description:
          'Insurer masters and patient policy details with cashless status tagged to UHID.',
      },
      {
        title: 'Claims-ready documentation',
        description:
          'Keep cashless cases inside the HIMS instead of a separate Excel trail.',
      },
      {
        title: 'Receipts, payments & day book',
        description:
          'Daily inflow/outflow, cash vouchers, and day-end with period freeze.',
      },
      {
        title: 'Full ledger accounting',
        description:
          'Chart of accounts, journals, FY open/close, P&L, and depreciation for your CA.',
      },
      {
        title: 'GST, TDS, TCS & RCM',
        description:
          'Tax masters and postings aligned with hospital pharmacy and service billing.',
      },
      {
        title: 'Consent & LAMA / refusal',
        description:
          'Signed consent for procedures and treatment refusal / LAMA records for NABH-style documentation.',
      },
      {
        title: 'Approvals workflow',
        description:
          'Maker–checker for discounts, credit, and write-offs before they hit the ledger.',
      },
    ],
  },
  {
    id: 'platform',
    number: '10',
    title: 'Platform, Security & Reporting',
    description:
      'RBAC, audit logs, backups, dashboards, and configuration for clinics through multi-specialty hospitals.',
    icon: Shield,
    features: [
      {
        title: 'Role-based access control',
        description:
          'Receptionists, nurses, doctors, and admins see only what their role allows.',
      },
      {
        title: 'Audit trail & encryption',
        description:
          'Row-level change history and encrypted handling for regulated patient data.',
      },
      {
        title: 'Automatic backup & cloud access',
        description:
          'Cross-platform access with backup continuity for 24/7 hospital hours.',
      },
      {
        title: 'Visit, disease & revenue dashboards',
        description:
          'See which conditions are rising, which doctors are busy, and where revenue lands.',
      },
      {
        title: 'Specialty & free-field config',
        description:
          'Medical specialties, custom fields, and grid personalisation without a one-size template.',
      },
      {
        title: 'Cron jobs & system logs',
        description:
          'Scheduled job status, error logs, and build version visibility for IT teams.',
      },
      {
        title: 'Barcode / asset tagging',
        description:
          'Tag numbering for assets and consumables that need physical control.',
      },
      {
        title: 'ABDM & NABH-oriented readiness',
        description:
          'ABHA-aligned pathways and documentation habits oriented toward NABH-style audits.',
      },
    ],
  },
];
