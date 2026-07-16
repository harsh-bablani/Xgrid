export type Brand = 'jewelbiz' | 'curabiz' | 'retailbiz';

export type BlogPost = {
  id: string;
  brand: Brand;
  slug: string;
  categoryLabel: string;
  title: string;
  description: string;
  heroImage: string;
};

export const POSTS: BlogPost[] = [
  {
    id: 'jewelbiz-cheap-jewellery-software-cost-2026',
    brand: 'jewelbiz',
    slug: 'blog1',
    categoryLabel: 'JewelBiz by Slatebiz',
    title: 'The Real Cost of Cheap Jewellery Software',
    description: 'A 2026 Total Cost of Ownership breakdown built on real GST, HUID and compliance reality — plus the hidden costs most calculators miss.',
    heroImage: '/blogs/jewelbiz/FAQ.png',
  },
  {
    id: 'jewelbiz-jewellery-erp-transforms-business',
    brand: 'jewelbiz',
    slug: 'blog2',
    categoryLabel: 'JewelBiz by Slatebiz',
    title: 'How the Right Jewellery ERP Transforms Your Business',
    description: 'A Complete Guide to Inventory, Billing, GST Compliance, and Karigar Management for Indian Jewellers',
    heroImage: '/blogs/jewelbiz/Hero.png',
  },
  // ... more posts can be added here later
];