import React from 'react';
import BooksIndexItem from './books_index_item';

class BooksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let books = this.props.books.map(book => {
      return (
        <BooksIndexItem book={book} key={`book_id: ${book.id}`} />
      )
    });

    return (
      <div className="book-index">
        {books}
      </div>
    )
  }

}

export default BooksIndex;
