document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('.subcontainer');
    if (!container) return;

    let allReviews = await fetchReviews();

    function renderReviews(list) {
        // clear previous cards but keep filters element
        const filtersEl = container.querySelector('.filters');
        let reviewsContainer = container.querySelector('.reviews-grid');
        
        container.innerHTML = '';
        if (filtersEl) container.appendChild(filtersEl);
        
        // Create reviews grid container if it doesn't exist
        if (!reviewsContainer) {
            reviewsContainer = document.createElement('div');
            reviewsContainer.className = 'reviews-grid';
        } else {
            reviewsContainer.innerHTML = '';
        }
        container.appendChild(reviewsContainer);

        list.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card';

            const date = new Date(review.created_at);
            const formattedDate = date.toLocaleDateString('de-DE', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            const tags = review.tags ? review.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';

            // Build structured review display
            let reviewContent = '';
            if (review.work_description || review.learning_value || review.atmosphere || review.would_recommend) {
                reviewContent = `
                    <div class="structured-review">
                        ${review.work_description ? `<div class="review-section"><strong>Work:</strong> ${review.work_description}</div>` : ''}
                        ${review.learning_value ? `<div class="review-section"><strong>Learning value:</strong> ${review.learning_value}</div>` : ''}
                        ${review.atmosphere ? `<div class="review-section"><strong>Atmosphere:</strong> ${review.atmosphere}</div>` : ''}
                        ${review.would_recommend ? `<div class="review-section"><strong>Would recommend?</strong> ${review.would_recommend}</div>` : ''}
                    </div>
                `;
            }
            // If no structured review content exists, show empty (shouldn't happen with new structured fields)
            if (!reviewContent) {
                reviewContent = '<p><em>No review content available</em></p>';
            }

            card.innerHTML = `
                <h4>${review.company}</h4>
                <small class="reviewer-name">${review.reviewer_name ? review.reviewer_name : 'Anonymous'}</small>
                ${review.website ? `<a href="${review.website}" target="_blank">${review.website}</a>` : ''}
                <div class="tags">${tags}</div>
                ${reviewContent}
                <div class="review-footer">
                    <div class="upvote-section">
                        <button class="upvote-btn">▲</button>
                        <span class="upvote-count">${review.upvotes}</span>
                    </div>
                    <small>${formattedDate}</small>
                </div>
            `;

            reviewsContainer.appendChild(card);

            const upvoteBtn = card.querySelector('.upvote-btn');
            upvoteBtn.addEventListener('click', async () => {
                await handleUpvote(review.id, upvoteBtn);
            });
        });
    }

    function applyFilters() {
        const active = Array.from(document.querySelectorAll('.tag-filter:checked')).map(i => i.value);
        if (active.length === 0) {
            renderReviews(allReviews);
            return;
        }
        const filtered = allReviews.filter(r => {
            const t = Array.isArray(r.tags) ? r.tags : [];
            return active.every(tag => t.includes(tag));
        });
        renderReviews(filtered);
    }

    // initial render
    renderReviews(allReviews);

    // wire up filter checkboxes
    const filters = document.querySelectorAll('.tag-filter');
    filters.forEach(cb => cb.addEventListener('change', applyFilters));
});