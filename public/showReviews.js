document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('.subcontainer');
    if (!container) return;

    const reviews = await fetchReviews();

    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';

        card.innerHTML = `
            <h4>${review.company}</h4>
            ${review.website ? `<a href="${review.website}" target="_blank">${review.website}</a>` : ''}
            <p>${review.comment || ''}</p>
            <small>${review.upvotes} upvotes</small>
        `;

        container.appendChild(card);
    });
});
