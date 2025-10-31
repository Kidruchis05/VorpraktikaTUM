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

        const tags = review.tags ? review.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
        
      card.innerHTML = `
        <h4>${review.company}</h4>
        <small class="reviewer-name">${review.reviewer_name ? review.reviewer_name : 'Anonymous'}</small>
        ${review.website ? `<a href="${review.website}" target="_blank">${review.website}</a>` : ''}
        <div class="tags">${tags}</div>
        <p>${review.comment || ''}</p>
        <div class="review-footer">
            <div class="upvote-section">
                <button class="upvote-btn">▲</button>
                <span class="upvote-count">${review.upvotes}</span>
            </div>
            <small>${formattedDate}</small>
        </div>
        `;

        container.appendChild(card);

        const upvoteBtn = card.querySelector('.upvote-btn');
        upvoteBtn.addEventListener('click', async () => {
        await handleUpvote(review.id, upvoteBtn);
        });
    });
});