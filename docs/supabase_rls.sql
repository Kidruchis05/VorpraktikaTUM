-- Enable RLS on reviews table
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon role) to select reviews
CREATE POLICY "Allow anon select" ON reviews
FOR SELECT TO anon
USING (true);

-- Allow anyone (anon role) to insert reviews
CREATE POLICY "Allow anon insert" ON reviews
FOR INSERT TO anon
WITH CHECK (true);
