import React from 'react';

const CurrentlyReading = ({shelf}) => {
  if (shelf.books.length === 0) {
    return (<div className="currently-reading">
      <h2>CURRENTLY READING</h2>
      <img src="http://res.cloudinary.com/dqj3kgpoj/image/upload/v1523378905/currentlyreading.svg"/>
      <p>What are you reading?</p>
    </div>)
  } else {
    let book = shelf.books[0];
    return (<div className="currently-reading">
      <h2>CURRENTLY READING</h2>

      <div className="current-reading-detail">
        <img src={book.img_url}/>
        <div className="current-reading-detail-text">
          <p className="current-reading-detail-title">{book.title}</p>
          <p>{book.author}</p>
        </div>
      </div>
    </div>)
  }
}

export default CurrentlyReading;
