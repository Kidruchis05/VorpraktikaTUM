async function handleUpvote(reviewId, buttonElement) {
    // Check if already voted
    const votedReviews = JSON.parse(localStorage.getItem('votedReviews') || '[]');
    
    if (votedReviews.includes(reviewId)) {
        alert('You already upvoted this review!');
        return;
    }

    // Increment in database
    const { error } = await supabase.rpc('increment_upvotes', {
        review_id: reviewId
    });

    if (error) {
        console.error('Error upvoting:', error);
        alert('Failed to upvote. Try again.');
        return;
    }

    // Update UI
    const countElement = buttonElement.nextElementSibling;
    const currentCount = parseInt(countElement.textContent);
    countElement.textContent = currentCount + 1;
    
    buttonElement.disabled = true;
    buttonElement.style.opacity = '0.5';

    // Remember vote
    votedReviews.push(reviewId);
    localStorage.setItem('votedReviews', JSON.stringify(votedReviews));
}