import { useState } from 'react';
import type { BlogContent, BlogSection, ContentBlock } from '../types/blog';
import { isLegacyContent, splitParagraphs } from '../types/blog';
import { resolveMediaUrl } from '../lib/media';
import BlogSectionHeader from './blog/BlogSectionHeader';
import BlogFAQItem from './blog/BlogFAQItem';

const paragraphClass = 'text-gray-700 leading-relaxed text-[15px] md:text-[16px] prose prose-slate';
const paragraphSmClass = 'text-gray-700 leading-relaxed text-[15px] prose prose-slate';

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState(0);
  const filtered = items.filter((f) => f.q || f.a);
  if (!filtered.length) return null;

  return (
    <div className="space-y-4">
      {filtered.map((item, idx) => (
        <BlogFAQItem
          key={item.q || idx}
          q={item.q}
          a={item.a}
          open={openFaq === idx}
          onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
}

function renderSection(section: BlogSection) {
  const safe = {
    ...section,
    subsections: section.subsections ?? [],
    faqs: section.faqs ?? [],
  };
  const paragraphs = splitParagraphs(safe.body);

  return (
    <section
      key={safe.id}
      className={`py-10 md:py-16${safe.whiteBg ? ' bg-white' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {safe.title ? (
          <BlogSectionHeader title={safe.title} desc={safe.desc} />
        ) : null}

        {safe.image ? (
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={resolveMediaUrl(safe.image)}
              alt={safe.imageAlt || safe.title || 'Section image'}
              className="w-full h-auto"
            />
          </div>
        ) : null}

        {(safe.afterImageTitle || paragraphs.length > 0) && (
          <div className="py-4">
            {safe.afterImageTitle ? (
              <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                {safe.afterImageTitle}
              </h3>
            ) : null}
            {paragraphs.map((p, i) => (
              <p key={i} className={`${i === 0 && safe.afterImageTitle ? 'mt-4 ' : i > 0 ? 'mt-4 ' : ''}${paragraphClass}`}>
                {p}
              </p>
            ))}
          </div>
        )}

        {safe.subsections.filter((s) => s.title || s.body).length > 0 && (
          <div className="mt-12 space-y-12">
            {safe.subsections
              .filter((s) => s.title || s.body)
              .map((sub) => (
                <div key={sub.id} className="py-4">
                  {sub.title ? (
                    <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">{sub.title}</h3>
                  ) : null}
                  {splitParagraphs(sub.body).map((p, i) => (
                    <p key={i} className={`mt-4 ${paragraphSmClass}`}>
                      {p}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        )}

        {safe.faqs.length > 0 && <FAQAccordion items={safe.faqs} />}
      </div>
    </section>
  );
}

function LegacyFAQBlock({ blockId, items }: { blockId: string; items: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="my-6">
      {items.map((item, idx) => (
        <BlogFAQItem
          key={`${blockId}-${item.q || idx}`}
          q={item.q}
          a={item.a}
          open={openFaq === idx}
          onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
}

function LegacyRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case 'section':
            return (
              <section
                key={block.id}
                className={`py-10 md:py-16${block.variant === 'white' ? ' bg-white' : ''}`}
              >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <BlogSectionHeader kicker={block.kicker} title={block.title} desc={block.desc} />
                  <LegacyRenderer blocks={block.blocks} />
                </div>
              </section>
            );
          case 'paragraph':
            return (
              <p key={block.id} className={`${paragraphClass} py-2`}>
                {block.content}
              </p>
            );
          case 'heading':
            return block.level === 3 ? (
              <h3 key={block.id} className="text-2xl font-bold text-gray-900 uppercase tracking-wide py-4">
                {block.content}
              </h3>
            ) : (
              <h2 key={block.id} className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide py-4">
                {block.content}
              </h2>
            );
          case 'image':
            return block.src ? (
              <div key={block.id} className="rounded-2xl overflow-hidden my-6">
                <img src={resolveMediaUrl(block.src)} alt={block.alt || ''} className="w-full h-auto" />
              </div>
            ) : null;
          case 'list':
            return (
              <ul key={block.id} className="my-4 space-y-2 text-gray-700 text-[15px]">
                {block.items.filter(Boolean).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            );
          case 'faq':
            return <LegacyFAQBlock key={block.id} blockId={block.id} items={block.items} />;
          case 'html':
            return block.html?.trim() ? (
              <section key={block.id} className="py-10 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className="blog-html-content prose prose-slate max-w-none text-gray-700 leading-relaxed
                      prose-headings:text-gray-900 prose-a:text-[#0C69B6] prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                </div>
              </section>
            ) : null;
          default:
            return null;
        }
      })}
    </>
  );
}

export default function BlogContentRenderer({ content }: { content: BlogContent }) {
  if (!content.length) return null;

  if (isLegacyContent(content)) {
    return <LegacyRenderer blocks={content} />;
  }

  return <>{content.map(renderSection)}</>;
}
