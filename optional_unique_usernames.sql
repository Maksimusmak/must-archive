-- OPTIONAL ONLY: use this if you later want globally unique usernames.
-- The current site stores username in Supabase Auth metadata and does not require this.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint username_length check (char_length(username) between 2 and 30)
);

alter table public.profiles enable row level security;

create policy "Profiles are publicly readable"
on public.profiles for select
using (true);

create policy "Users create their own profile"
on public.profiles for insert
with check (auth.uid() = id);

create policy "Users update their own profile"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);
