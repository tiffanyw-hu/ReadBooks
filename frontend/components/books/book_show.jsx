import React from 'react';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book_id)
  }

  render () {
    if (!this.props.book) return null

    return (
    <div className="book-details">
      <h3 className="book-title">{this.props.book.title}</h3>
      <p className="book-author">{this.props.book.author}</p>
      <p className="book-description">{this.props.book.description}</p>
      <img src={this.props.book.img_url} width="150px" height="231px" />
    </div>
    )
  }

}

export default BookShow;
