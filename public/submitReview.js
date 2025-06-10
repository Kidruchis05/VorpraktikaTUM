document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const company = document.getElementById('company-name').value.trim();
        const website = document.getElementById('company-website').value.trim();
        const comment = document.getElementById('review').value.trim();
        const tagsSelect = document.getElementById('tags');
        const tags = Array.from(tagsSelect.selectedOptions).map(opt => opt.value);

        const { error } = await supabase.from('reviews').insert({
            company,
            website,
            comment,
            tags
        });

        if (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review.');
            return;
        }

        window.location.href = 'main.html';
    });
});
