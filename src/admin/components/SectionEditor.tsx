import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import { createBlockId, createEmptySection, ensureSection, type BlogSection } from '../../types/blog';
import ImageUpload from './ImageUpload';

type Props = {
  sections: BlogSection[];
  onChange: (sections: BlogSection[]) => void;
};

function sectionLabel(index: number): string {
  return index === 0 ? 'Intro block' : `Content block ${index + 1}`;
}

function sectionHint(index: number): string {
  if (index === 0) {
    return 'First content inside the article — image, heading, and text (below the big hero at the top).';
  }
  return 'Another topic block — same layout: optional heading, image, then text.';
}

function SectionCard({
  section,
  index,
  total,
  onUpdate,
  onRemove,
  onMove,
}: {
  section: BlogSection;
  index: number;
  total: number;
  onUpdate: (section: BlogSection) => void;
  onRemove: () => void;
  onMove: (dir: -1 | 1) => void;
}) {
  const safe = ensureSection(section);
  const isIntro = index === 0;

  return (
    <div
      className={`rounded-xl border p-5 space-y-4 ${
        isIntro ? 'border-[#0C69B6]/30 bg-blue-50/40' : 'border-gray-200 bg-slate-50'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-sm font-semibold text-slate-900">{sectionLabel(index)}</span>
          <p className="mt-0.5 text-xs text-slate-500">{sectionHint(index)}</p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button type="button" onClick={() => onMove(-1)} disabled={index === 0} className="p-1 rounded hover:bg-white text-slate-400 disabled:opacity-30">
            <ChevronUp className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => onMove(1)} disabled={index === total - 1} className="p-1 rounded hover:bg-white text-slate-400 disabled:opacity-30">
            <ChevronDown className="w-4 h-4" />
          </button>
          {total > 1 && (
            <button type="button" onClick={onRemove} className="p-1 rounded hover:bg-red-50 text-red-500">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <ImageUpload
        label="Image inside this block"
        kind="inline"
        value={safe.image ?? ''}
        onChange={(url) => onUpdate({ ...safe, image: url })}
      />

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Bold heading after image</label>
        <input
          value={safe.afterImageTitle ?? ''}
          onChange={(e) => onUpdate({ ...safe, afterImageTitle: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
          placeholder="e.g. Running a jewellery business in India is unlike any other retail operation"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Main text</label>
        <textarea
          rows={8}
          value={safe.body}
          onChange={(e) => onUpdate({ ...safe, body: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
          placeholder={'Write your paragraphs here.\n\nLeave a blank line between paragraphs.'}
        />
        <p className="mt-1 text-xs text-slate-400">Tip: press Enter twice to start a new paragraph.</p>
      </div>

      <details className="rounded-lg border border-gray-200 bg-white/80">
        <summary className="cursor-pointer px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900">
          Optional fields (heading, FAQ, subsections…)
        </summary>
        <div className="px-4 pb-4 pt-1 space-y-4 border-t border-gray-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Section heading (above image)</label>
            <input
              value={safe.title}
              onChange={(e) => onUpdate({ ...safe, title: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              placeholder="e.g. Introduction — leave blank if not needed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Short line under heading</label>
            <textarea
              rows={2}
              value={safe.desc ?? ''}
              onChange={(e) => onUpdate({ ...safe, desc: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              placeholder="Optional one-line description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Image alt text</label>
            <input
              value={safe.imageAlt ?? ''}
              onChange={(e) => onUpdate({ ...safe, imageAlt: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              placeholder="Describe the image for accessibility"
            />
          </div>

          {safe.subsections.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Sub-headings (H3)</p>
              {safe.subsections.map((sub, si) => (
                <div key={sub.id} className="bg-slate-50 rounded-lg p-3 border border-gray-100 space-y-2">
                  <input
                    value={sub.title}
                    onChange={(e) => {
                      const subsections = [...safe.subsections];
                      subsections[si] = { ...sub, title: e.target.value };
                      onUpdate({ ...safe, subsections });
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium"
                    placeholder="Sub-heading"
                  />
                  <textarea
                    rows={3}
                    value={sub.body}
                    onChange={(e) => {
                      const subsections = [...safe.subsections];
                      subsections[si] = { ...sub, body: e.target.value };
                      onUpdate({ ...safe, subsections });
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                    placeholder="Text under sub-heading"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      onUpdate({
                        ...safe,
                        subsections: safe.subsections.filter((_, i) => i !== si),
                      })
                    }
                    className="text-xs text-red-500"
                  >
                    Remove sub-heading
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() =>
              onUpdate({
                ...safe,
                subsections: [...safe.subsections, { id: createBlockId(), title: '', body: '' }],
              })
            }
            className="text-sm text-[#0C69B6] font-medium"
          >
            + Add sub-heading (H3)
          </button>

          {safe.faqs.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">FAQ</p>
              {safe.faqs.map((faq, fi) => (
                <div key={fi} className="bg-slate-50 rounded-lg p-3 border border-gray-100 space-y-2">
                  <input
                    value={faq.q}
                    onChange={(e) => {
                      const faqs = [...safe.faqs];
                      faqs[fi] = { ...faq, q: e.target.value };
                      onUpdate({ ...safe, faqs });
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium"
                    placeholder="Question"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const faqs = [...safe.faqs];
                      faqs[fi] = { ...faq, a: e.target.value };
                      onUpdate({ ...safe, faqs });
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                    placeholder="Answer"
                  />
                  <button
                    type="button"
                    onClick={() => onUpdate({ ...safe, faqs: safe.faqs.filter((_, i) => i !== fi) })}
                    className="text-xs text-red-500"
                  >
                    Remove FAQ
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => onUpdate({ ...safe, faqs: [...safe.faqs, { q: '', a: '' }] })}
            className="text-sm text-[#0C69B6] font-medium"
          >
            + Add FAQ
          </button>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={!!safe.whiteBg}
              onChange={(e) => onUpdate({ ...safe, whiteBg: e.target.checked })}
            />
            White background for this block
          </label>
        </div>
      </details>
    </div>
  );
}

export default function SectionEditor({ sections, onChange }: Props) {
  const update = (index: number, section: BlogSection) => {
    const next = [...sections];
    next[index] = ensureSection(section);
    onChange(next);
  };

  const remove = (index: number) => {
    if (!confirm('Remove this block?')) return;
    onChange(sections.filter((_, i) => i !== index));
  };

  const move = (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= sections.length) return;
    const next = [...sections];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-lg bg-slate-100 border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
        <strong className="text-slate-800">How this maps to the live page:</strong> the big title and hero image
        come from <em>Top of page</em> above. Each block here is content <em>inside</em> the article — image → bold
        heading → paragraphs, just like your old blog posts.
      </div>

      {sections.map((section, index) => (
        <SectionCard
          key={section.id}
          section={section}
          index={index}
          total={sections.length}
          onUpdate={(s) => update(index, s)}
          onRemove={() => remove(index)}
          onMove={(dir) => move(index, dir)}
        />
      ))}

      <button
        type="button"
        onClick={() => onChange([...sections, createEmptySection()])}
        className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 text-sm font-semibold text-slate-600 hover:border-[#0C69B6] hover:text-[#0C69B6]"
      >
        + Add another content block
      </button>
    </div>
  );
}
