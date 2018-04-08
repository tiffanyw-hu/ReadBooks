import React from 'react';

const CurrentlyReading = ({shelf}) => {
  if (shelf.books.length === 0) {
    return (
      <div className="not-reading-anything">
        <h2>CURRENTLY READING</h2>
        <p>What are you reading?</p>
      </div>
    )
  } else {
    let book = shelf.books[0];
    return (
      <div className="currently-reading">
        <h2>CURRENTLY READING</h2>
        <img src={book.img_url} />
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
    )
  }
}

export default CurrentlyReading;
