import type { BlogPost } from '../types/blog';

export type { Brand, BlogPost } from '../types/blog';

export const POSTS: BlogPost[] = [
  {
    id: 'jewelbiz-cheap-jewellery-software-cost-2026',
    brand: 'jewelbiz',
    slug: 'blog1',
    categoryLabel: 'JewelBiz by Slatebiz',
    title: 'The Real Cost of Cheap Jewellery Software',
    description:
      'A 2026 Total Cost of Ownership breakdown built on real GST, HUID and compliance reality — plus the hidden costs most calculators miss.',
    heroImage: '/blogs/jewelbiz/FAQ.png',
    imageAlt: 'Jewellery accounting and compliance challenges FAQ illustration',
    author: 'SlateBiz Editorial',
    tags: ['jewellery erp', 'gst', 'huid', 'tco'],
    date: '24 JUN 2026',
    readTime: '2 MIN READ',
    isStatic: true,
  },
  {
    id: 'jewelbiz-jewellery-erp-transforms-business',
    brand: 'jewelbiz',
    slug: 'blog2',
    categoryLabel: 'JewelBiz by Slatebiz',
    title: 'How the Right Jewellery ERP Transforms Your Business',
    description:
      'A Complete Guide to Inventory, Billing, GST Compliance, and Karigar Management for Indian Jewellers',
    heroImage: '/blogs/jewelbiz/Hero.png',
    imageAlt: 'JewelBiz jewellery ERP dashboard and showroom operations',
    author: 'SlateBiz Editorial',
    tags: ['jewellery erp', 'inventory', 'karigar', 'billing'],
    date: '24 JUN 2026',
    readTime: '2 MIN READ',
    isStatic: true,
  },
];
