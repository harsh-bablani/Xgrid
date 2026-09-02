import { useId, useRef, useState } from 'react';
import { Eye, Code2, FileText, Upload } from 'lucide-react';
import { HTML_BLOG_STARTER } from '../../data/blogTemplate';
import { uploadBlogImage } from '../../lib/blogService';
import { validateImageFile } from '../../lib/imageValidation';

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
  { label: 'Image', snippet: '<img src="https://[PROJECT-REF].supabase.co/storage/v1/object/public/blog-images/blogs/example.png" alt="" />\n', cursorOffset: 9 },
  { label: 'List', snippet: '<ul>\n  <li></li>\n</ul>\n', cursorOffset: 11 },
];

export default function HtmlContentEditor({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputId = useId();
  const [preview, setPreview] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

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

  const insertImageTag = (url: string, alt = '') => {
    const snippet = `<img src="${url}" alt="${alt}" />\n`;
    insertSnippet(snippet);
  };

  const handleImageUpload = async (file: File) => {
    setUploadError('');
    const validation = validateImageFile(file, 'inline');
    if (!validation.valid) {
      setUploadError(validation.error);
      return;
    }

    setUploading(true);
    try {
      const url = await uploadBlogImage(file);
      insertImageTag(url, file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '));
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-slate-100 border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
        <strong className="text-slate-800">Title and hero image</strong> are set in <em>Top of page</em> above.
        Write only the <strong className="text-slate-800">article body</strong> here — the content that appears below
        the big hero image on the live post.
        <span className="block mt-2">
          For images inside the article, use <strong className="text-slate-800">Upload image</strong> below — the
          image goes to Supabase and an <code className="text-[11px] bg-white px-1 rounded">&lt;img&gt;</code> tag is
          inserted at your cursor. You can also paste any public URL into an existing <code className="text-[11px] bg-white px-1 rounded">&lt;img src=&quot;...&quot;&gt;</code> tag.
        </span>
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
          <div className="flex flex-wrap items-center gap-1.5">
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
            <input
              id={fileInputId}
              type="file"
              accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
              className="sr-only"
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void handleImageUpload(file);
                e.target.value = '';
              }}
            />
            <label
              htmlFor={fileInputId}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#0C69B6] text-white hover:bg-[#095a9d] cursor-pointer ${uploading ? 'opacity-60 pointer-events-none' : ''}`}
            >
              <Upload className="w-3.5 h-3.5" />
              {uploading ? 'Uploading…' : 'Upload image'}
            </label>
          </div>
          {uploadError ? <p className="text-sm text-red-600 font-medium">{uploadError}</p> : null}
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
