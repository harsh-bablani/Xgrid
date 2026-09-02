import crypto from 'crypto';
import path from 'path';
import { STORAGE_BUCKET, supabaseAdmin } from './supabase.js';

const ALLOWED_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/pjpeg']);

export function validateImageFile(originalname, mimetype) {
  const ext = path.extname(originalname).toLowerCase();
  if (!ALLOWED_EXT.has(ext)) {
    return { valid: false, error: 'Only JPG, PNG, and WebP images are allowed.' };
  }
  if (!ALLOWED_MIME.has(mimetype)) {
    return { valid: false, error: 'Invalid image file type.' };
  }
  return { valid: true, ext };
}

export async function ensureStorageBucket() {
  if (!supabaseAdmin) {
    throw new Error('Supabase storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  }

  const { data: buckets, error: listError } = await supabaseAdmin.storage.listBuckets();
  if (listError) throw new Error(`Storage check failed: ${listError.message}`);

  const exists = buckets?.some((b) => b.name === STORAGE_BUCKET);
  if (exists) return;

  const { error: createError } = await supabaseAdmin.storage.createBucket(STORAGE_BUCKET, {
    public: true,
    fileSizeLimit: 5 * 1024 * 1024,
  });

  if (createError && !createError.message.toLowerCase().includes('already exists')) {
    throw new Error(`Could not create storage bucket "${STORAGE_BUCKET}": ${createError.message}`);
  }
}

/**
 * Upload image buffer to Supabase Storage. Returns a public HTTPS URL.
 * @param {{ buffer: Buffer, originalname: string, mimetype: string }} file
 */
export async function uploadBlogImage(file) {
  if (!supabaseAdmin) {
    throw new Error('Supabase storage is not configured.');
  }

  const validation = validateImageFile(file.originalname, file.mimetype);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const objectPath = `blogs/${Date.now()}-${crypto.randomUUID().slice(0, 8)}${validation.ext}`;

  const { error } = await supabaseAdmin.storage.from(STORAGE_BUCKET).upload(objectPath, file.buffer, {
    contentType: file.mimetype,
    upsert: false,
    cacheControl: '3600',
  });

  if (error) {
    throw new Error(error.message || 'Upload to Supabase failed.');
  }

  const { data } = supabaseAdmin.storage.from(STORAGE_BUCKET).getPublicUrl(objectPath);
  return data.publicUrl;
}
