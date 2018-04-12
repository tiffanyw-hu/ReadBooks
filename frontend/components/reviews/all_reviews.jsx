import React from 'react';
import ReviewDetails from './review_details';

const AllReviews = reviews => {
  return (
    <div className="reviews-index">
      <h4>COMMUNITY REVIEWS</h4>
      <hr className="hr"></hr>
      {reviews.reviews.map(review => <ReviewDetails key={review.id} review={review} user={review.user.username} />)}
    </div>
  )
}

export default AllReviews;
