-- SUPABASE SCHEMA & RLS POLICIES FOR VorpraktikaTUM PLATFORM
-- This file represents the current source of truth for your reviews table, Row Level Security (RLS) policies, and important helper functions.
-- To update your Supabase instance, paste this in the web SQL editor (or partial changes as needed).

-- 1. TABLE: reviews
CREATE TABLE IF NOT EXISTS reviews (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
    user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    company text NOT NULL,
    website text,
    reviewer_name text, -- display name or nickname of the reviewer
    tags text[], -- e.g. ['paid', 'vorpraktikum']
    comment text, -- review body; (change from text[] to text if not already)
    pdf_hash text,  -- hash of optional PDF
    upvotes integer DEFAULT 0,
    verified boolean DEFAULT false
);

-- 2. ENABLE ROW LEVEL SECURITY
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 3. RLS POLICIES
-- Allow anyone (anon role) to SELECT
CREATE POLICY "Allow anon select" ON reviews
    FOR SELECT TO anon
    USING (true);

-- Allow anyone (anon role) to INSERT
CREATE POLICY "Allow anon insert" ON reviews
    FOR INSERT TO anon
    WITH CHECK (true);

-- Allow anyone (anon role) to UPDATE (e.g. for upvotes)
CREATE POLICY "Allow anon update" ON reviews
    FOR UPDATE TO anon
    USING (true);

-- 4. FUNCTION: increment_upvotes
CREATE OR REPLACE FUNCTION increment_upvotes(review_id uuid)
RETURNS void AS $$
BEGIN
    UPDATE reviews
    SET upvotes = upvotes + 1
    WHERE id = review_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- END OF SCHEMA
