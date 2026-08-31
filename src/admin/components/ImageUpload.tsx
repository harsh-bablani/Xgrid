import { useId, useState } from 'react';
import { Upload, X, Link2 } from 'lucide-react';
import { validateImageFile, formatImageHint, type ImageKind } from '../../lib/imageValidation';
import { uploadBlogImage } from '../../lib/blogService';

type Props = {
  label: string;
  kind: ImageKind;
  value: string;
  onChange: (url: string) => void;
};

function isValidImageUrl(url: string): boolean {
  const trimmed = url.trim();
  if (trimmed.startsWith('/')) return !trimmed.includes(' ');
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export default function ImageUpload({ label, kind, value, onChange }: Props) {
  const inputId = useId();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const handleFile = async (file: File) => {
    setError('');

    const validation = validateImageFile(file, kind);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setUploading(true);
    try {
      const url = await uploadBlogImage(file);
      onChange(url);
      setUrlInput('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const applyUrl = () => {
    setError('');
    const trimmed = urlInput.trim();
    if (!trimmed) {
      setError('Enter an image URL or path.');
      return;
    }
    if (!isValidImageUrl(trimmed)) {
      setError('Use a path starting with / or a valid http(s) URL.');
      return;
    }
    onChange(trimmed);
    setShowUrlInput(false);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <p className="text-xs text-slate-400 mb-3">{formatImageHint(kind)}</p>

      <input
        id={inputId}
        type="file"
        accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
        className="sr-only"
        disabled={uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = '';
        }}
      />

      {value ? (
        <div className="relative rounded-xl border border-gray-100 overflow-hidden bg-slate-50">
          <img src={value} alt="Preview" className="w-full max-h-64 object-contain" />
          <div className="absolute top-2 right-2 flex gap-1">
            <label
              htmlFor={inputId}
              className="px-2 py-1.5 rounded-lg bg-white/90 shadow text-xs font-medium text-[#0C69B6] hover:bg-white cursor-pointer"
            >
              Change
            </label>
            <button
              type="button"
              onClick={() => onChange('')}
              className="p-1.5 rounded-lg bg-white/90 shadow text-slate-600 hover:text-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <label
          htmlFor={inputId}
          className={`w-full flex flex-col items-center justify-center gap-2 py-10 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#0C69B6]/40 hover:bg-blue-50/30 transition-colors cursor-pointer ${uploading ? 'opacity-60 pointer-events-none' : ''}`}
        >
          <Upload className="w-8 h-8 text-slate-400" />
          <span className="text-sm font-medium text-slate-600">
            {uploading ? 'Uploading…' : 'Click to choose image'}
          </span>
        </label>
      )}

      <div className="mt-3">
        {!showUrlInput ? (
          <button
            type="button"
            onClick={() => setShowUrlInput(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0C69B6] hover:underline"
          >
            <Link2 className="w-3.5 h-3.5" /> Or paste image URL / path
          </button>
        ) : (
          <div className="flex gap-2">
            <input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="/blogs/jewelbiz/Hero.png"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm"
            />
            <button
              type="button"
              onClick={applyUrl}
              className="px-3 py-2 rounded-lg bg-[#0C69B6] text-white text-sm font-medium"
            >
              Use
            </button>
          </div>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>}
    </div>
  );
}
