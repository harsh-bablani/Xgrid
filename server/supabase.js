import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL?.trim();
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

export const isSupabaseStorageConfigured = Boolean(supabaseUrl && serviceRoleKey);

export const supabaseAdmin = isSupabaseStorageConfigured
  ? createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  : null;

export const STORAGE_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || 'blog-images';
