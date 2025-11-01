-- CLEANUP: Remove test reviews and drop old comment column
-- Run this in Supabase SQL editor

-- Step 1: Delete all existing reviews (including test reviews)
-- WARNING: This will permanently remove ALL reviews from your database
-- Only run this if you're sure you want to clear everything!
DELETE FROM reviews;

-- Step 2: Remove the old 'comment' column
-- This removes the single text field we replaced with structured fields
ALTER TABLE reviews
DROP COLUMN IF EXISTS comment;

-- After running this:
-- - Your reviews table will be empty (ready for fresh structured reviews)
-- - The old 'comment' column will be gone
-- - Only the new structured fields (work_description, learning_value, atmosphere, would_recommend) will remain

