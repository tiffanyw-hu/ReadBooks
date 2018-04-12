import React from 'react';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render () {
    return (
      <div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <img src={this.props.book.img_url} width="49px" height="75px" />
          <p>{this.props.book.title}</p>
          <p>{this.props.book.author}</p>
          <p>Rating:</p><input type="number" onChange={this.update('rating')} value={this.state.rating}
            name="rating" min="1" max="5" /><span>out of 5</span>
          <label>What did you think?
            <input placeholder="Write your review" type="text" value={this.state.body}
              onChange={this.update('body')} />
          </label>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
