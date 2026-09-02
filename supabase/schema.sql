-- Supabase schema (matches prisma/schema.prisma)
-- Prefer: npx prisma migrate deploy
-- Or run this in Supabase SQL Editor

create table if not exists public.blog_posts (
  id uuid primary key,
  brand text not null,
  slug text not null unique,
  category_label text not null,
  title text not null,
  description text not null,
  hero_image text not null default '',
  image_alt text not null default '',
  author text not null default '',
  tags text[] not null default '{}',
  date text not null default '',
  read_time text not null default '5 MIN READ',
  content jsonb not null default '[]'::jsonb,
  published boolean not null default false,
  published_at timestamptz,
  previous_slugs text[] not null default '{}',
  meta_title text not null default '',
  meta_description text not null default '',
  focus_keyword text not null default '',
  seo_keywords text not null default '',
  canonical_url text not null default '',
  og_title text not null default '',
  og_description text not null default '',
  og_image text not null default '',
  twitter_title text not null default '',
  twitter_description text not null default '',
  twitter_image text not null default '',
  no_index boolean not null default false,
  no_follow boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_brand_idx on public.blog_posts (brand);
create index if not exists blog_posts_published_idx on public.blog_posts (published);

create table if not exists public.blog_redirects (
  id uuid primary key,
  from_slug text not null unique,
  to_slug text not null
);

create table if not exists public.admin_sessions (
  token text primary key,
  user_id text not null,
  user_email text not null,
  user_name text not null,
  created_at timestamptz not null default now()
);

-- Storage bucket for blog images (optional — API still supports /uploads)
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;
