import {
  ShoppingCart,
  Package,
  Users,
  Store,
  BarChart3,
  Receipt,
  TrendingUp,
  FileText,
  Shield,
  Database,
} from 'lucide-react';
import type { ProductModule } from './productMatrix';

export const retailBizModules: ProductModule[] = [
  {
    id: 'pos',
    number: '01',
    title: 'Sales & POS',
    description: 'Fast counter billing and mobile access for retail teams on the shop floor.',
    icon: ShoppingCart,
    features: [
      {
        title: 'Point of Sale (POS)',
        description: 'Fast, reliable POS system with barcode scanning, multiple payment methods, and receipt printing.',
      },
      {
        title: 'Mobile App Support',
        description: 'Access your retail operations on-the-go with our mobile management app.',
      },
    ],
  },
  {
    id: 'inventory',
    number: '02',
    title: 'Inventory & Suppliers',
    description: 'Real-time stock control, procurement, and vendor management across locations.',
    icon: Package,
    features: [
      {
        title: 'Inventory Management',
        description: 'Real-time stock tracking, automated reordering, and multi-location inventory control.',
      },
      {
        title: 'Supplier Management',
        description: 'Vendor relationships, purchase orders, and automated procurement workflows.',
      },
    ],
  },
  {
    id: 'customer',
    number: '03',
    title: 'Customer Management',
    description: 'Profiles, purchase history, loyalty programs, and targeted marketing in one CRM.',
    icon: Users,
    features: [
      {
        title: 'Customer Management',
        description: 'Complete customer profiles, purchase history, loyalty programs, and targeted marketing.',
      },
    ],
  },
  {
    id: 'multistore',
    number: '04',
    title: 'Multi-Store & E-commerce',
    description: 'Unified operations across physical stores and online sales channels.',
    icon: Store,
    features: [
      {
        title: 'Multi-Store Operations',
        description: 'Manage multiple retail locations from a single dashboard with centralized control.',
      },
      {
        title: 'E-commerce Integration',
        description: 'Seamless integration with online stores, marketplaces, and shipping platforms.',
      },
    ],
  },
  {
    id: 'analytics',
    number: '05',
    title: 'Reporting & Analytics',
    description: 'Sales reports, inventory analytics, and business intelligence for better decisions.',
    icon: BarChart3,
    features: [
      {
        title: 'Reporting & Analytics',
        description: 'Sales reports, inventory analytics, customer insights, and business intelligence.',
      },
    ],
  },
  {
    id: 'revenue',
    number: '06',
    title: 'Sales & Revenue',
    description: 'Channel-wise sales tracking and performance metrics across every outlet.',
    icon: Receipt,
    features: [
      {
        title: 'Sales & Revenue Tracking',
        description: 'Complete sales tracking, revenue analysis, and performance metrics across all channels.',
      },
    ],
  },
  {
    id: 'financial',
    number: '07',
    title: 'Financial Control',
    description: 'Expense management, profit analysis, and comprehensive financial reporting.',
    icon: TrendingUp,
    features: [
      {
        title: 'Financial Control',
        description: 'Expense management, profit analysis, and comprehensive financial reporting.',
      },
    ],
  },
  {
    id: 'tax',
    number: '08',
    title: 'Tax & Payroll',
    description: 'Automated tax calculations, compliance reporting, and staff payroll workflows.',
    icon: FileText,
    features: [
      {
        title: 'Tax Management',
        description: 'Automated tax calculations, multi-tax support, and compliance reporting.',
      },
      {
        title: 'Payroll Integration',
        description: 'Staff scheduling, payroll processing, and performance management.',
      },
    ],
  },
  {
    id: 'planning',
    number: '09',
    title: 'Cost & Budget Planning',
    description: 'Margin analysis, cost tracking, and forecast planning for growing retail networks.',
    icon: Database,
    features: [
      {
        title: 'Cost Analysis',
        description: 'Detailed cost tracking, margin analysis, and profitability insights.',
      },
      {
        title: 'Budget Planning',
        description: 'Annual budgeting, forecast planning, and financial goal tracking.',
      },
    ],
  },
  {
    id: 'compliance',
    number: '10',
    title: 'Audit & Payments',
    description: 'Transaction history, compliance documentation, and secure payment reconciliation.',
    icon: Shield,
    features: [
      {
        title: 'Audit Trails',
        description: 'Complete transaction history, audit logs, and compliance documentation.',
      },
      {
        title: 'Payment Processing',
        description: 'Multiple payment gateways, secure transactions, and automated reconciliation.',
      },
    ],
  },
];
