import React from 'react';
import BooksIndexItem from './books_index_item';

class BooksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let books = this.props.books.map((book, index) => {
      return (
        <BooksIndexItem book={book} key={book.id} />
      )
    });


    let urlArray = window.location.href.split("/")
    if (urlArray[urlArray.length - 1] === "books") {
      return (
        <div className="books-index-container">
          <div className="index-heading">
            <h4>Explore Books</h4>
          </div>
          <div className="book-index">
            {books}
          </div>
        </div>
      )

    } else {
      return (
        <div className="books-index-container-splash">
          <div className="book-index-splash">
            {books}
          </div>
        </div>
      )
    }


  }

}

export default BooksIndex;
