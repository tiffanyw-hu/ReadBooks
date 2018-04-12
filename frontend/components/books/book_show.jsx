import React from 'react';
import CreateReviewContainer from '../reviews/create_review_container';
import EditReviewContainer from '../reviews/edit_review_container';
import MyActivity from '../reviews/myactivity';
import AllReviews from '../reviews/all_reviews';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalshow: "hidden"
    }
    this.modalToggle = this.modalToggle.bind(this);
    this.reviewExists = this.reviewExists.bind(this);
    this.whereIsReview = this.whereIsReview.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book_id)
  }

  // renderDescription() {
  //   let description = this.props.book.description;
  //   if (!this.state.showmore) {
  //     description = description.slice(0, )
  //     what determines the length
  //   }
  // }

  modalToggle(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      modalshow: this.state.modalshow === "hidden"
        ? ""
        : "hidden"
    })
  }

  reviewExists() {
    let userReview = this.whereIsReview();
    if (!userReview) {
      return (<CreateReviewContainer bookId={this.props.book.id}/>)
    }
    return (<EditReviewContainer bookId={this.props.book.id} review={userReview}/>)
  }

  whereIsReview() {
    if (this.props.book) {
      let reviewsArray = this.props.book.reviews;
      for (let i = 0; i < reviewsArray.length; i++) {
        if (reviewsArray[i].user_id === this.props.currentUser.id) {
          return reviewsArray[i]
        }
      }
    }
    return false
  }

  render() {
    if (!this.props.book) {
      return null
    }

    let userReview = this.whereIsReview();

    return (<div className="bookshowpage-container">
      <div className="page-top">

        <div className="img-col">
          <img className="book-img" src={this.props.book.img_url} width="150px" height="231px"/>
        </div>

        <div className="book-details">
          <h3 className="book-title">{this.props.book.title}</h3>
          <p className="book-author">{this.props.book.author}</p>
          <p className="book-description">{this.props.book.description}</p>
          <hr className="hr"></hr>
        </div>

      </div>

      <div className="myactivity">
        {(this.props.currentUser.user_id === "guest") ? "" : <MyActivity review={userReview} modalToggle={this.modalToggle} />}
      </div>

      <div className="all-the-reviews">
        <AllReviews reviews={this.props.book.reviews} />
      </div>
      <div className={`the-modal ${this.state.modalshow}`}>
        {this.reviewExists()}
      </div>

    </div>)
  }

}

export default BookShow;
