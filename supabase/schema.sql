-- Run this in Supabase SQL Editor (https://supabase.com/dashboard)

-- Blog posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  brand text not null check (brand in ('jewelbiz', 'curabiz', 'retailbiz')),
  slug text not null,
  category_label text not null,
  title text not null,
  description text not null,
  hero_image text not null default '',
  date text not null default '',
  read_time text not null default '',
  content jsonb not null default '[]'::jsonb,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (brand, slug)
);

-- Updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- Row Level Security
alter table public.blog_posts enable row level security;

-- Anyone can read published posts
create policy "Public can read published posts"
  on public.blog_posts for select
  using (published = true);

-- Authenticated users can do everything (admin)
create policy "Authenticated users manage posts"
  on public.blog_posts for all
  to authenticated
  using (true)
  with check (true);

-- Storage bucket for blog images
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

-- Public read for blog images
create policy "Public read blog images"
  on storage.objects for select
  using (bucket_id = 'blog-images');

-- Authenticated upload/update/delete
create policy "Authenticated upload blog images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-images');

create policy "Authenticated update blog images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog-images');

create policy "Authenticated delete blog images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'blog-images');

-- Create an admin user in Supabase Dashboard → Authentication → Users → Add user
