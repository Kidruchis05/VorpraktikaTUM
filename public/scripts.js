const SUPABASE_URL = "https://fqsuegrrtmazhgjhvsmr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxc3VlZ3JydG1hemhnamh2c21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NDYxNDEsImV4cCI6MjA2MzMyMjE0MX0.nyUVXWRlFQcd8Nlp_3K4NXeUfCYROxIG6KJXL9-96Ls";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchReviews() {
    const { data, error } = await supabase
        .from('reviews')
        .select('id, company, website, reviewer_name, comment, tags, upvotes, created_at')
        .order('upvotes', { ascending: false })
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }

    return data;
}

async function upvoteReview(reviewId) {
    const { data, error } = await supabase
        .rpc('increment_upvotes', { review_id: reviewId });
    
    if (error) {
        console.error('Error upvoting:', error);
        return;
    }
    
    // Refresh the page to show updated upvotes
    location.reload();
}
