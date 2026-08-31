import { useRef, useState } from 'react';
import { Eye, Code2, FileText } from 'lucide-react';
import { HTML_BLOG_STARTER } from '../../data/blogTemplate';

type Props = {
  value: string;
  onChange: (html: string) => void;
};

const TAG_SNIPPETS: { label: string; snippet: string; cursorOffset?: number }[] = [
  { label: 'H2', snippet: '<h2></h2>\n', cursorOffset: 4 },
  { label: 'H3', snippet: '<h3></h3>\n', cursorOffset: 4 },
  { label: 'P', snippet: '<p></p>\n', cursorOffset: 3 },
  { label: 'Bold', snippet: '<strong></strong>', cursorOffset: 8 },
  { label: 'Link', snippet: '<a href="/jewelbiz/">link text</a>', cursorOffset: 9 },
  { label: 'Image', snippet: '<img src="/uploads/blogs/" alt="" />\n', cursorOffset: 22 },
  { label: 'List', snippet: '<ul>\n  <li></li>\n</ul>\n', cursorOffset: 11 },
];

export default function HtmlContentEditor({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [preview, setPreview] = useState(false);

  const insertSnippet = (snippet: string, cursorOffset?: number) => {
    const el = textareaRef.current;
    if (!el) {
      onChange(value + snippet);
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const next = value.slice(0, start) + snippet + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + (cursorOffset ?? snippet.length);
      el.setSelectionRange(pos, pos);
    });
  };

  const insertStarter = () => {
    if (value.trim() && !confirm('Replace current HTML with the starter template?')) return;
    onChange(HTML_BLOG_STARTER);
    setPreview(false);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-slate-100 border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
        <strong className="text-slate-800">Title and hero image</strong> are set in <em>Top of page</em> above.
        Write only the <strong className="text-slate-800">article body</strong> here — the content that appears below
        the big hero image on the live post.
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="button"
          onClick={insertStarter}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-white border border-gray-200 text-slate-700 hover:border-[#0C69B6] hover:text-[#0C69B6]"
        >
          <FileText className="w-4 h-4" />
          Insert starter template
        </button>
        <button
          type="button"
          onClick={() => setPreview((v) => !v)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#0C69B6]"
        >
          {preview ? <Code2 className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {preview ? 'Edit HTML' : 'Preview'}
        </button>
      </div>

      {!preview && (
        <>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-slate-400 self-center mr-1">Insert:</span>
            {TAG_SNIPPETS.map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={() => insertSnippet(tag.snippet, tag.cursorOffset)}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                {tag.label}
              </button>
            ))}
          </div>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={22}
            spellCheck={false}
            className="w-full px-4 py-3 rounded-[10px] border border-gray-200 font-mono text-[13px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/20 focus:border-[#0C69B6]"
            placeholder={HTML_BLOG_STARTER}
          />
        </>
      )}

      {preview && (
        <div className="rounded-[10px] border border-gray-200 bg-white p-6 min-h-[320px]">
          {value.trim() ? (
            <div
              className="blog-html-content prose prose-slate max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          ) : (
            <p className="text-sm text-slate-400">Nothing to preview yet — click “Insert starter template” or start typing.</p>
          )}
        </div>
      )}
    </div>
  );
}
