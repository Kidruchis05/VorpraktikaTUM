document.addEventListener('DOMContentLoaded', () => {
    console.log('Submit page loaded');
    const form = document.querySelector("form");
    if (!form) {
        console.error('Form not found');
        return;
    }
    console.log('Form found, adding event listener');

    form.addEventListener('submit', async (e) => {
        console.log('Form submitted');
        e.preventDefault();

        const company = document.getElementById('company-name').value.trim();
        let website = document.getElementById('company-website').value.trim();
        const reviewerName = document.getElementById('reviewer-name') ? document.getElementById('reviewer-name').value.trim() : '';
        const comment = document.getElementById('review').value.trim();
        const tagsSelect = document.getElementById('tags');
        const tags = Array.from(tagsSelect.selectedOptions).map(opt => opt.value);

        console.log('Form data:', { company, website, comment, tags });

        if (!company || !website || !comment || !reviewerName) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Basic URL validation
        if (website && !website.startsWith('http://') && !website.startsWith('https://')) {
            if (confirm('Website URL should start with http:// or https://. Add https:// automatically?')) {
                website = 'https://' + website;
            }
        }

        try {
            console.log('Attempting to insert into Supabase...');
            const { data, error } = await supabase.from('reviews').insert({
                company,
                website,
                reviewer_name: reviewerName || null,
                comment: comment,
                tags
            });

            console.log('Supabase response:', { data, error });

            if (error) {
                console.error('Error submitting review:', error);
                alert('Failed to submit review: ' + error.message);
                return;
            }

            console.log('Success! Redirecting...');
            window.location.href = 'main.html';
        } catch (e) {
            console.error('Exception during submission:', e);
            alert('An error occurred: ' + e.message);
        }
    });
});
