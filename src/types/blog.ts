import { resolveMediaUrl } from '../lib/media';

export type Brand = 'jewelbiz' | 'curabiz' | 'retailbiz';

export type BlogSubsection = {
  id: string;
  title: string;
  body: string;
};

export type BlogSection = {
  id: string;
  title: string;
  desc?: string;
  image?: string;
  imageAlt?: string;
  /** H3 heading shown after the section image (matches live blog layout) */
  afterImageTitle?: string;
  whiteBg?: boolean;
  body: string;
  subsections: BlogSubsection[];
  faqs: { q: string; a: string }[];
};

export type ContentBlock =
  | {
      id: string;
      type: 'section';
      kicker?: string;
      title: string;
      desc?: string;
      variant?: 'default' | 'white';
      blocks: ContentBlock[];
    }
  | { id: string; type: 'paragraph'; content: string; bold?: boolean }
  | { id: string; type: 'heading'; content: string; level: 2 | 3 }
  | { id: string; type: 'image'; src: string; alt: string }
  | { id: string; type: 'list'; items: string[] }
  | { id: string; type: 'faq'; items: { q: string; a: string }[] }
  | { id: string; type: 'html'; html: string };

export type BlogContent = BlogSection[] | ContentBlock[];

export type BlogPostRecord = {
  id: string;
  brand: Brand;
  slug: string;
  category_label: string;
  title: string;
  description: string;
  hero_image: string;
  image_alt: string;
  author: string;
  tags: string[];
  date: string;
  read_time: string;
  content: BlogContent;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  previous_slugs: string[];
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  seo_keywords: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
  no_index: boolean;
  no_follow: boolean;
};

export type BlogPost = {
  id: string;
  brand: Brand;
  slug: string;
  categoryLabel: string;
  title: string;
  description: string;
  heroImage: string;
  imageAlt: string;
  author: string;
  tags: string[];
  date: string;
  readTime: string;
  content?: BlogContent;
  published?: boolean;
  publishedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  previousSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  seoKeywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  /** True when loaded from hardcoded blog-posts.ts (not CMS) */
  isStatic?: boolean;
};

export const BRAND_OPTIONS: { label: string; value: Brand }[] = [
  { label: 'JewelBiz', value: 'jewelbiz' },
  { label: 'CuraBiz', value: 'curabiz' },
  { label: 'RetailBiz', value: 'retailbiz' },
];

const BRANDS: Brand[] = ['jewelbiz', 'curabiz', 'retailbiz'];

export function brandDefaultLabel(brand: Brand): string {
  const label = BRAND_OPTIONS.find((b) => b.value === brand)?.label ?? brand;
  return `${label} by Slatebiz`;
}

export function recordToPost(record: BlogPostRecord): BlogPost {
  return {
    id: record.id,
    brand: record.brand,
    slug: record.slug,
    categoryLabel: record.category_label,
    title: record.title,
    description: record.description,
    heroImage: resolveMediaUrl(record.hero_image),
    imageAlt: record.image_alt || '',
    author: record.author || '',
    tags: Array.isArray(record.tags) ? record.tags : [],
    date: record.date,
    readTime: record.read_time,
    content: record.content,
    published: record.published,
    publishedAt: record.published_at ?? null,
    createdAt: record.created_at,
    updatedAt: record.updated_at,
    previousSlugs: Array.isArray(record.previous_slugs) ? record.previous_slugs : [],
    metaTitle: record.meta_title || '',
    metaDescription: record.meta_description || '',
    focusKeyword: record.focus_keyword || '',
    seoKeywords: record.seo_keywords || '',
    canonicalUrl: record.canonical_url || '',
    ogTitle: record.og_title || '',
    ogDescription: record.og_description || '',
    ogImage: record.og_image || '',
    twitterTitle: record.twitter_title || '',
    twitterDescription: record.twitter_description || '',
    twitterImage: record.twitter_image || '',
    noIndex: Boolean(record.no_index),
    noFollow: Boolean(record.no_follow),
    isStatic: false,
  };
}

export function createBlockId() {
  return crypto.randomUUID();
}

export function createEmptySection(): BlogSection {
  return {
    id: createBlockId(),
    title: '',
    desc: '',
    image: '',
    imageAlt: '',
    afterImageTitle: '',
    whiteBg: false,
    body: '',
    subsections: [],
    faqs: [],
  };
}

export function ensureSection(section: Partial<BlogSection> & { id: string }): BlogSection {
  return {
    id: section.id,
    title: section.title ?? '',
    desc: section.desc ?? '',
    image: section.image ?? '',
    imageAlt: section.imageAlt ?? '',
    afterImageTitle: section.afterImageTitle ?? '',
    whiteBg: section.whiteBg ?? false,
    body: section.body ?? '',
    subsections: Array.isArray(section.subsections) ? section.subsections : [],
    faqs: Array.isArray(section.faqs) ? section.faqs : [],
  };
}

export function isLegacyContent(content: BlogContent): content is ContentBlock[] {
  if (!content.length) return false;
  return content.every((item) => typeof (item as ContentBlock).type === 'string');
}

export function isHtmlContent(content: BlogContent | undefined): content is ContentBlock[] {
  if (!content?.length) return false;
  return content.length === 1 && (content[0] as ContentBlock).type === 'html';
}

export function extractHtmlFromContent(content: BlogContent | undefined): string {
  if (!isHtmlContent(content)) return '';
  const block = content[0] as Extract<ContentBlock, { type: 'html' }>;
  return block.html || '';
}

export function createHtmlContent(html: string): ContentBlock[] {
  return [{ id: createBlockId(), type: 'html', html }];
}

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function legacyFlatToSections(legacy: ContentBlock[]): BlogSection[] {
  const sections: BlogSection[] = [];
  let current = createEmptySection();
  let pendingSubBody = '';

  const flushSub = () => {
    if (pendingSubBody.trim() && current.subsections.length) {
      const last = current.subsections[current.subsections.length - 1];
      last.body = pendingSubBody.trim();
      pendingSubBody = '';
    }
  };

  const flushSection = () => {
    flushSub();
    if (current.title || current.body.trim() || current.image || current.subsections.length || current.faqs.length) {
      sections.push(ensureSection(current));
    }
    current = createEmptySection();
  };

  for (const block of legacy) {
    switch (block.type) {
      case 'heading':
        if (block.level === 2) {
          flushSection();
          current.title = block.content;
        } else {
          flushSub();
          current.subsections.push({ id: createBlockId(), title: block.content, body: '' });
        }
        break;
      case 'paragraph':
        if (current.subsections.length) {
          pendingSubBody += (pendingSubBody ? '\n\n' : '') + block.content;
        } else {
          current.body += (current.body ? '\n\n' : '') + block.content;
        }
        break;
      case 'image':
        current.image = block.src;
        current.imageAlt = block.alt;
        break;
      case 'list':
        {
          const listText = block.items.filter(Boolean).map((item) => `• ${item}`).join('\n');
          if (current.subsections.length) {
            pendingSubBody += (pendingSubBody ? '\n\n' : '') + listText;
          } else {
            current.body += (current.body ? '\n\n' : '') + listText;
          }
        }
        break;
      case 'faq':
        current.faqs.push(...block.items);
        break;
      default:
        break;
    }
  }

  flushSection();
  return sections.length ? sections : [createEmptySection()];
}

export function normalizeSections(content: BlogContent | undefined): BlogSection[] {
  if (!content?.length) return [];

  if (!isLegacyContent(content)) {
    return (content as BlogSection[]).map((s) => ensureSection(s));
  }

  const legacy = content as ContentBlock[];
  const nested = legacy.filter((b): b is Extract<ContentBlock, { type: 'section' }> => b.type === 'section');

  if (nested.length) {
    return nested.map((s) =>
      ensureSection({
        id: s.id,
        title: s.title,
        desc: s.desc,
        whiteBg: s.variant === 'white',
        image: s.blocks.find((b) => b.type === 'image')?.src ?? '',
        imageAlt: s.blocks.find((b) => b.type === 'image')?.alt ?? '',
        body: s.blocks
          .filter((b): b is Extract<ContentBlock, { type: 'paragraph' }> => b.type === 'paragraph')
          .map((b) => b.content)
          .join('\n\n'),
        subsections: s.blocks
          .filter((b): b is Extract<ContentBlock, { type: 'heading' }> => b.type === 'heading' && b.level === 3)
          .map((b) => ({ id: b.id, title: b.content, body: '' })),
        faqs: s.blocks
          .filter((b): b is Extract<ContentBlock, { type: 'faq' }> => b.type === 'faq')
          .flatMap((b) => b.items),
      })
    );
  }

  return legacyFlatToSections(legacy);
}

export function hasLegacyContent(content: BlogContent | undefined): boolean {
  if (!content?.length) return false;
  if (isHtmlContent(content)) return false;
  return isLegacyContent(content);
}

export function validateSlug(slug: string): string | null {
  const trimmed = slug.trim();
  if (!trimmed) return 'Slug is required.';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmed)) return 'Slug must be lowercase letters, numbers, and hyphens only.';
  return null;
}

export function isValidBrand(brand: string): brand is Brand {
  return BRANDS.includes(brand as Brand);
}
