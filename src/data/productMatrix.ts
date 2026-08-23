import type { LucideIcon } from 'lucide-react';
import {
  LayoutGrid,
  ShoppingCart,
  ShoppingBag,
  Package,
  Wrench,
  BookOpen,
  Landmark,
  FileText,
  Gem,
  BarChart3,
} from 'lucide-react';

export interface ProductModule {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
  }[];
}

export const modules: ProductModule[] = [
  {
    id: 'core',
    number: '01',
    title: 'Core Platform',
    description:
      'Multi-year books, role-based access, audit trails, and offline-ready operations for showroom reliability.',
    icon: LayoutGrid,
    features: [
      {
        title: 'Multi-financial year',
        description: 'Run and close books across financial years without breaking history.',
      },
      {
        title: 'Role-based access control',
        description: 'Give counter, accounts, and owner teams only the screens they need.',
      },
      {
        title: 'Audit trail & logs',
        description: 'Every critical change is traceable for internal and GST audits.',
      },
      {
        title: 'Data freeze / period lock',
        description: 'Lock closed periods so past vouchers stay audit-clean.',
      },
      {
        title: 'Day-end processing',
        description: 'Structured day close for stock, cash, and billing reconciliation.',
      },
      {
        title: 'Multi-printer setup',
        description: 'Barcode, regular, and thermal printer routing for counter workflows.',
      },
      {
        title: 'Cron job scheduler',
        description: 'Automate recurring jobs so nightly and compliance tasks do not depend on memory.',
      },
      {
        title: 'Offline mode capability',
        description: 'Keep billing and stock moving when the internet drops.',
      },
      {
        title: 'Multi-company architecture',
        description: 'Operate multiple business entities from one controlled platform.',
      },
    ],
  },
  {
    id: 'sales',
    number: '02',
    title: 'Sales & POS',
    description:
      'Retail and wholesale billing with barcode POS, multi-payment modes, old gold exchange, and e-invoice readiness.',
    icon: ShoppingCart,
    features: [
      {
        title: 'Retail sales billing',
        description: 'Fast counter billing for walk-in jewellery retail.',
      },
      {
        title: 'Wholesale sales billing',
        description: 'Party-wise wholesale invoices with commercial terms.',
      },
      {
        title: 'Cash & credit sales',
        description: 'Walk-in cash sale and outstanding credit in one flow.',
      },
      {
        title: 'Sales return',
        description: 'Clean return documents linked back to the original sale.',
      },
      {
        title: 'Order management (advance)',
        description: 'Take advances and convert customer orders into delivery.',
      },
      {
        title: 'Goods on approval',
        description: 'Track Jangad / approval stock with aging and return matching.',
      },
      {
        title: 'Delivery challan',
        description: 'Dispatch finished goods with proper challan control.',
      },
      {
        title: 'Barcode POS scanning',
        description: 'Scan tagged pieces and bill without manual weight entry errors.',
      },
      {
        title: 'Multi-payment POS',
        description: 'Collect across cash, UPI, card, cheque, and credit modes.',
      },
      {
        title: 'UPI QR generation',
        description: 'Generate QR at the counter for instant digital collection.',
      },
      {
        title: 'Card / EDC integration',
        description: 'Connect card machines into settlement workflows.',
      },
      {
        title: 'Old gold exchange',
        description: 'Exchange old metal with purity control in the same bill.',
      },
      {
        title: 'e-Invoice (IRN & QR)',
        description: 'Signed IRN and QR at the moment of billing.',
      },
      {
        title: 'Salesperson tracking',
        description: 'Attribute bills to staff for targets and accountability.',
      },
      {
        title: 'Rate settlement',
        description: 'Settle metal rates with parties without spreadsheet chaos.',
      },
      {
        title: 'Gift voucher & loyalty',
        description: 'Run schemes that bring customers back to the counter.',
      },
    ],
  },
  {
    id: 'purchase',
    number: '03',
    title: 'Purchase',
    description:
      'Registered and unregistered purchases, returns, reverse charge, TDS, and piece-wise metal intake.',
    icon: ShoppingBag,
    features: [
      {
        title: 'Purchase entry',
        description: 'Capture registered and unregistered dealer purchases accurately.',
      },
      {
        title: 'Purchase return (debit note)',
        description: 'Raise debit notes and keep supplier ledgers clean.',
      },
      {
        title: 'Direct expenses on purchase',
        description: 'Load freight and related costs into landed metal value.',
      },
      {
        title: 'TDS on purchases',
        description: 'Apply TDS where jewellery purchase compliance requires it.',
      },
      {
        title: 'Reverse charge mechanism',
        description: 'Auto-handle RCM liability on unregistered purchases.',
      },
      {
        title: 'Piece-wise purchase tracking',
        description: 'Track intake at the piece level, not just bulk weight.',
      },
      {
        title: 'Capital goods purchase',
        description: 'Record capital purchases separately from trading stock.',
      },
      {
        title: 'Purchase-sale linkage',
        description: 'Connect purchase and sale flows for clearer costing.',
      },
    ],
  },
  {
    id: 'inventory',
    number: '04',
    title: 'Inventory & Stock',
    description:
      'Gram-to-gram control across purity, diamond 4C, barcode history, valuation, and daily stock status.',
    icon: Package,
    features: [
      {
        title: 'Weight-based stock',
        description: 'Track GWT, NWT, and fine weight with multi-purity masters.',
      },
      {
        title: 'Real-time stock',
        description: 'See live availability across counters and locations.',
      },
      {
        title: 'Closing valuation',
        description: 'Value stock correctly for day-end and audit views.',
      },
      {
        title: 'Daily rate & barcode history',
        description: 'Maintain rate context and full tag movement history.',
      },
      {
        title: 'Stock journal',
        description: 'Adjust, transfer, and correct stock with voucher control.',
      },
      {
        title: 'Item group hierarchy',
        description: 'Organise designs and categories the way your shop thinks.',
      },
      {
        title: 'Diamond 4C tracking',
        description: 'Capture cut, colour, clarity, and carat for stone inventory.',
      },
      {
        title: 'Stone certificate tracking',
        description: 'Keep certificate references with high-value stones.',
      },
      {
        title: 'WIP group mapping',
        description: 'Map work-in-progress groups for manufacturing clarity.',
      },
      {
        title: 'Daily stock status summary',
        description: 'One morning view of what moved and what is stuck.',
      },
    ],
  },
  {
    id: 'manufacturing',
    number: '05',
    title: 'Manufacturing & Karigar',
    description:
      'Issue metal, receive finished goods, track WIP wastage, job costing, and artisan accountability.',
    icon: Wrench,
    features: [
      {
        title: 'Karigar master',
        description: 'Maintain artisan profiles, rates, and accountability.',
      },
      {
        title: 'Issue / receipt vouchers',
        description: 'Issue metal and receive finished goods against job work.',
      },
      {
        title: 'Manufacturing voucher',
        description: 'Record melting, casting, setting, and process output.',
      },
      {
        title: 'WIP auto-update',
        description: 'Keep work-in-progress updated as jobs move through stages.',
      },
      {
        title: 'Metal & stone issue control',
        description: 'Track metal commission, stone issue, and returns.',
      },
      {
        title: 'Raw material & conversion',
        description: 'Convert raw metal into finished stock with clear ledgers.',
      },
      {
        title: 'Job costing',
        description: 'Know making cost per job, not just final selling price.',
      },
      {
        title: 'Piece-wise manufacturing',
        description: 'Follow manufacturing at the piece level for high-value designs.',
      },
    ],
  },
  {
    id: 'accounting',
    number: '06',
    title: 'Financial Accounting',
    description:
      'Daybook, journals, receipts, payments, interest, depreciation, and year-end close on one ledger.',
    icon: BookOpen,
    features: [
      {
        title: 'Daybook & journals',
        description: 'Complete voucher accounting with stock journal support.',
      },
      {
        title: 'Receipts & payments',
        description: 'Track money in and out against parties and ledgers.',
      },
      {
        title: 'FY open / close',
        description: 'Open and close financial years with controlled carry-forward.',
      },
      {
        title: 'Account maintenance',
        description: 'Maintain party and ledger masters for jewellery trade.',
      },
      {
        title: 'P&L auto-transfer',
        description: 'Move closing profit and loss cleanly at year end.',
      },
      {
        title: 'Interest calculation',
        description: 'Compute interest on credit and specialised jewellery accounts.',
      },
      {
        title: 'Depreciation chart',
        description: 'Maintain depreciation schedules for fixed assets.',
      },
      {
        title: 'Round-off & auto journal',
        description: 'Reduce manual corrections with automated journal helpers.',
      },
    ],
  },
  {
    id: 'banking',
    number: '07',
    title: 'Banking & Payments',
    description:
      'Multi-bank setup, UPI QR, cheque clearing, EDC machines, and card settlement batches.',
    icon: Landmark,
    features: [
      {
        title: 'Multi-bank accounts',
        description: 'Operate multiple bank ledgers from one finance desk.',
      },
      {
        title: 'UPI QR & payment masters',
        description: 'Standardise digital collection methods across counters.',
      },
      {
        title: 'Cheque clearing house',
        description: 'Track issued and received cheques through clearing.',
      },
      {
        title: 'EDC machine support',
        description: 'Map card machines into daily settlement routines.',
      },
      {
        title: 'Card commission auto-deduct',
        description: 'Account for MDR and card charges without spreadsheet patches.',
      },
      {
        title: 'Card settlement batch',
        description: 'Batch settle card collections cleanly against bank credits.',
      },
    ],
  },
  {
    id: 'taxation',
    number: '08',
    title: 'Taxation & Compliance',
    description:
      'HSN mapping, GST on metal-making-stone, GSTR readiness, TDS masters, and e-invoice API logs.',
    icon: FileText,
    features: [
      {
        title: 'GST rate & HSN masters',
        description: 'Map HSN and GST rates at item master level.',
      },
      {
        title: 'GST on metal, making & stone',
        description: 'Split tax correctly at billing — not reconstructed later.',
      },
      {
        title: 'Zero GST handling',
        description: 'Support exempt and special jewellery tax cases where applicable.',
      },
      {
        title: 'GSTR-1 / 3B ready',
        description: 'Generate filing-ready outputs from live billing data.',
      },
      {
        title: 'Cash limit warnings',
        description: 'Warn teams before cash compliance thresholds are breached.',
      },
      {
        title: 'TDS masters',
        description: 'Maintain TDS rules for purchase and payment compliance.',
      },
      {
        title: 'E-invoice API logs',
        description: 'Trace IRN generation success, pending, and retry states.',
      },
      {
        title: 'GST API authentication',
        description: 'Secure connectivity for compliance integrations.',
      },
    ],
  },
  {
    id: 'specialised',
    number: '09',
    title: 'Specialised Jewellery',
    description:
      'Girvi, MCX, Kitty schemes, HUID, design masters, making rates, and old metal summaries.',
    icon: Gem,
    features: [
      {
        title: 'Girvi (pledge) management',
        description: 'Track pledged gold, interest, guarantors, and overdue alerts.',
      },
      {
        title: 'MCX purchase / sale / P&L',
        description: 'Connect metal trading positions to jewellery operations.',
      },
      {
        title: 'Kitty / gold saving schemes',
        description: 'Enrol customers, track instalments, and redeem into jewellery.',
      },
      {
        title: 'HUID support',
        description: 'Align tagging and compliance workflows with hallmarking practice.',
      },
      {
        title: 'Design master & making rates',
        description: 'Standardise designs and making charges across the catalogue.',
      },
      {
        title: 'Rate stamp master',
        description: 'Control stamped rates used across billing and purchase.',
      },
      {
        title: 'Account rates per customer',
        description: 'Rate-specific commercial rates without rewriting masters daily.',
      },
      {
        title: 'Old metal summary',
        description: 'See old gold intake, purity, and conversion in one place.',
      },
    ],
  },
  {
    id: 'analytics',
    number: '10',
    title: 'Analytics & Reporting',
    description:
      'Operational reports, sales and inventory analytics, exports, and custom report building.',
    icon: BarChart3,
    features: [
      {
        title: 'Basic operational reports',
        description: 'Daybooks, stock, sales, and party reports out of the box.',
      },
      {
        title: 'Sales analytics',
        description: 'Understand what sold, who sold it, and which categories win.',
      },
      {
        title: 'Inventory analytics',
        description: 'Spot dead stock, purity mix, and reorder pressure early.',
      },
      {
        title: 'Karigar analytics',
        description: 'Measure artisan output, wastage, and job turnaround.',
      },
      {
        title: 'Custom report builder',
        description: 'Shape reports around the questions your owners ask every Monday.',
      },
      {
        title: 'Excel / PDF export',
        description: 'Share board-ready exports without retyping numbers.',
      },
    ],
  },
];
