import React from 'react';
import BooksIndexItem from '../books/books_index_item';

const WantToRead = ({shelf}) => {
  if (shelf.books.length === 0) {
    return (
      <div className="not-wanting-anything">
        <h2>WANT TO READ</h2>
        <p>What do you want to read next?</p>
      </div>
    )
  } else {
    let books = shelf.books.map(book => {
      return (
        <BooksIndexItem book={book} key={`book_id: ${book.id}`} />
      )
    })
    return (
      <div className="want-to-read-img">
        <h2>WANT TO READ</h2>
        {books.slice(0, 8)}
      </div>
    )
  }
}

export default WantToRead;
