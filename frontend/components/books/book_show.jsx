import React from 'react';

class BookShow extends React.Component {

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book_id)
  }

  render () {
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img src={book.img_url} /> 
    </div>
  }

}

export default BookShow;
