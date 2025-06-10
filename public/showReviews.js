document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('.subcontainer');
    if (!container) return;

    const reviews = await fetchReviews();

    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const date = new Date(review.created_at);
        const formattedDate = date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        card.innerHTML = `
            <h4>${review.company}</h4>
            ${review.website ? `<a href="${review.website}" target="_blank">${review.website}</a>` : ''}
            <p>${review.comment || ''}</p>
            <small>${review.upvotes} upvotes | ${formattedDate}</small>
        `;

        container.appendChild(card);
    });
});
