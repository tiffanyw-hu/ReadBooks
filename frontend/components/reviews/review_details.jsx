import React from 'react';

const ReviewDetails = ({review, user}) => {
  return (
    <div className="review-details-container">
      <div className="review-username">
        <h5><span>{user}</span> rated it {review.rating} out of 5</h5>
      </div>


      <div className="review-body">
        <h4 className="just-says-review">Review</h4>
        <p>{review.body}</p>

      </div>
      {user == "You" ? "" : <hr className="hr"></hr>}
    </div>
  )
}

export default ReviewDetails;
