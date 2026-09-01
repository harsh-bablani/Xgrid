export type ImageKind = 'hero' | 'inline';

export type ImageValidationResult =
  | { valid: true; warning?: string }
  | { valid: false; error: string };

const MAX_FILE_SIZE: Record<ImageKind, number> = {
  hero: 5 * 1024 * 1024,
  inline: 5 * 1024 * 1024,
};

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function isAllowedImage(file: File): boolean {
  if (file.type.startsWith('image/')) return true;
  const ext = file.name.toLowerCase().match(/\.[^.]+$/)?.[0] ?? '';
  return ALLOWED_EXTENSIONS.includes(ext);
}

/** Fast sync validation — no dimension loading that can hang on some files */
export function validateImageFile(file: File, kind: ImageKind): ImageValidationResult {
  if (!isAllowedImage(file)) {
    return { valid: false, error: 'Only JPG, PNG, and WebP images are allowed.' };
  }

  const maxSize = MAX_FILE_SIZE[kind];
  if (file.size > maxSize) {
    const mb = (maxSize / (1024 * 1024)).toFixed(0);
    return { valid: false, error: `Image must be under ${mb} MB.` };
  }

  if (file.size === 0) {
    return { valid: false, error: 'File is empty.' };
  }

  return { valid: true };
}

export function formatImageHint(_kind: ImageKind): string {
  return 'JPG, PNG, or WebP · max 5 MB · or paste an image path below';
}
