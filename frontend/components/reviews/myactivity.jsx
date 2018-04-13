import React from 'react';
import ReviewDetails from './review_details';

const MyActivity = ({review, modalToggle}) => {
  if (review) {
    return (
      <div className="review-exists">
        <div className="my-activity-and-edit">
          <h4 className="section-heading">MY ACTIVITY</h4>
          <h4 className="possible-review-link" onClick={modalToggle}>Edit</h4>
        </div>
        <hr className="hr-gradient"></hr>
        <div className="review-container">

          <div className="possible-review">
            <ReviewDetails review={review} user={"You"} />
          </div>

      </div>
      </div>
    )
  } else {
    return (
      <div className="review-doesn't-exist">
        <div className="my-activity-and-edit">

        <h4 className="section-heading">MY ACTIVITY</h4>
      </div>
        <hr className="hr-gradient"></hr>
        <div className="review-container">
          <div className="review-body">
            <h4 className="just-says-review">Review</h4>
            <p className="possible-review-link bigger-review" onClick={modalToggle}>Add a review</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MyActivity;
