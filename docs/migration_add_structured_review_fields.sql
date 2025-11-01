-- MIGRATION: Add structured review fields
-- Run this in Supabase SQL editor to add the 4 new review fields
-- This allows storing Work, Learning value, Atmosphere, and Would recommend separately

ALTER TABLE reviews
ADD COLUMN IF NOT EXISTS work_description text,
ADD COLUMN IF NOT EXISTS learning_value text,
ADD COLUMN IF NOT EXISTS atmosphere text,
ADD COLUMN IF NOT EXISTS would_recommend text;

-- Note: The old 'comment' field is kept for backwards compatibility
-- with any existing reviews that might use it.

