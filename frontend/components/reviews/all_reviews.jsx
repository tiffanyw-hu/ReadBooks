import React from 'react';
import ReviewDetails from './review_details';

const AllReviews = reviews => {
  return (
    <div className="reviews-index">
      <h4 className="community-reviews-heading">COMMUNITY REVIEWS</h4>
      <hr className="hr"></hr>
      <div className="review-container">
        {reviews.reviews.map(review => <ReviewDetails key={review.id} review={review}  user={review.user.username} />)}
      </div>
    </div>
  )
}

export default AllReviews;
