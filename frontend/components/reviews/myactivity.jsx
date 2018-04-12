import React from 'react';
import ReviewDetails from './review_details';

const MyActivity = ({review, modalToggle}) => {
  if (review) {
    return (
      <div className="review-exists">
        <div className="my-activity-and-edit">
          <h4>MY ACTIVITY</h4>
          <p className="possible-review" onClick={modalToggle}>Edit</p>
        </div>
        <hr></hr>
        <div className="review-container">
          <p className="just-says-review">Review</p>
          <div className="possible-review"><ReviewDetails review={review} user={review.username}/></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="review-doesn't-exist">
        <h4>MY ACTIVITY</h4>
        <hr></hr>
        <div className="review-container">
          <p className="just-says-review">Review</p>
          <p className="possible-review" onClick={modalToggle}>Add a review</p>
        </div>
      </div>
    )
  }
}

export default MyActivity;
