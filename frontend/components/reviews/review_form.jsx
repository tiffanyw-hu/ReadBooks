import React from 'react';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.closeModal();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.state);
    this.props.closeModal();
  }

  render () {
    let deleteButton = ""
    if (this.props.formType === "Edit Review") {
      deleteButton = [<a key={`review_id_delete: ${this.state.id}`}
        href="#"
        onClick={this.handleDelete}>Delete Review</a>]
    }

    let rating = 1
    if (this.state.rating) {
      rating = this.state.rating
    }

    return (
      <div>

        <form className="modal-form" onSubmit={this.handleSubmit}>
          <span onClick={this.props.closeModal} className="modal-close js-modal-close">&times;</span>
          <div className="modal-book-details">
            <img src={this.props.book.img_url} width="49px" height="75px" />
            <div className="modal-book-details-text">
              <h2>{this.props.book.title}</h2>
              <p>{this.props.book.author}</p>
            </div>
          </div>
          <p><span className="modal-heading">Rating:</span> <input type="number" onChange={this.update('rating')} value={rating}
            name="rating" min="1" max="5" /><span>{rating} out of 5</span></p>
          <label><p className="modal-heading smaller-heading">What did you think? </p>
            <textarea placeholder="Write your review" type="text" value={this.state.body}
              onChange={this.update('body')} />
          </label>

          <div className="modal-form-buttons">
            <button onClick={this.handleSubmit}>Submit</button>
            <div>{deleteButton}</div>
          </div>

        </form>
      </div>
    );
  }
}

export default ReviewForm;
