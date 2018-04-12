import React from 'react';

const ReviewDetails = ({review, user}) => {
  return (
    <div className="review-details-container">
      <div className="review-username">
        <p><span>{user}</span> rated it {review.rating} out of 5</p>
      </div>

      <div className="review-body">
        <p>{review.body}</p>
      </div>
      <hr className="hr"></hr>
    </div>
  )
}

export default ReviewDetails;
