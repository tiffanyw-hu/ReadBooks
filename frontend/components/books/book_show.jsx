import React from 'react';
import CreateReviewContainer from '../reviews/create_review_container';
import EditReviewContainer from '../reviews/edit_review_container';
import MyActivity from '../reviews/myactivity';
import AllReviews from '../reviews/all_reviews';
import ShelvesStatusContainer from '../shelfbookstatus/shelves_status_container';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalshow: "hidden"
    }
    this.modalToggle = this.modalToggle.bind(this);
    this.reviewExists = this.reviewExists.bind(this);
    this.whereIsReview = this.whereIsReview.bind(this);
    this.checkChildrenForModal = this.checkChildrenForModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundColor = "white";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "#F4F1EA"
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
    let childrenHasModal = this.checkChildrenForModal(e.target.children);
    if ((e.target.className !== "this-review-yea" && childrenHasModal) || e.target.className === "possible-review-link" || e.target.className === "possible-review-link bigger-review") {
      this.setState({
        modalshow: this.state.modalshow === "hidden"
        ? ""
        : "hidden"
      })
    }
  }

  checkChildrenForModal(children) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === 'this-review-yea') {
          return true
      }
    }
    return false
  }

  reviewExists() {
    let userReview = this.whereIsReview();
    if (!userReview) {
      return (<CreateReviewContainer bookId={this.props.book.id}
        book={this.props.book} closeModal={this.closeModal} />)
    }
    return (<EditReviewContainer bookId={this.props.book.id}
      review={userReview} book={this.props.book}
      closeModal={this.closeModal}/>)
  }

  whereIsReview() {
    if (this.props.book) {
      let reviewsArray = this.props.book.reviews;
      for (let i = 0; i < reviewsArray.length; i++) {
        if (reviewsArray[i].user.id === this.props.currentUser.id) {
          return reviewsArray[i]
        }
      }
    }
    return false
  }

  closeModal() {
    this.setState({modalshow: "hidden"})
  }

  render() {
    console.log("hello" + " " + this.props.book)
    if (!this.props.book) {
      return null
    }

    // console.log(this.props.book.id)
    let userReview = this.whereIsReview();

    return (<div className="bookshowpage-container">
      <div className="page-top">

        <div className="book-details-container">
        <div className="img-col">

          <img className="book-img" src={this.props.book.img_url} width="150px" height="231px"/>
          {(this.props.currentUser.user_id === "guest") ? "" : <ShelvesStatusContainer book={this.props.book} />}
        </div>

        <div className="book-details">
          <h3 className="book-title ">{this.props.book.title}</h3>
          <p className="book-author">{this.props.book.author}</p>
          <p className="book-description">{this.props.book.description}</p>
          <hr className="hr"></hr>
        </div>
      </div>

      <div className="reviews-activity-container">

        <div className="myactivity">
          {(this.props.currentUser.user_id === "guest") ? "" : <MyActivity review={userReview} modalToggle={this.modalToggle} />}
        </div>

        <div className="all-the-reviews">
          <AllReviews reviews={this.props.book.reviews} />
        </div>
      </div>
      </div>

      <div onClick={this.modalToggle} className={`the-modal ${this.state.modalshow}`}>
        <div className="this-review-yea">
          {this.reviewExists()}
        </div>
      </div>

    </div>)
  }

}

export default BookShow;
