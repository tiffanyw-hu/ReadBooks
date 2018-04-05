import React from 'react';

class BookShow extends React.Component {

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book_id)
  }

  render () {
    if (!this.props.book) return null

    return (
    <div>
      <h3>{this.props.book.title}</h3>
      <p>{this.props.book.author}</p>
      <p>{this.props.book.description}</p>
      <img src={this.props.book.img_url} />
    </div>
    )
  }

}

export default BookShow;
