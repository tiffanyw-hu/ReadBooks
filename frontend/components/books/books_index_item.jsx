import React from 'react';
import {Link} from 'react-router-dom';

const BooksIndexItem = props => (
  <div className="book-index-item">
    <Link to={`/books/${props.book.id}`}>
      <img src={props.book.img_url} width="115px" height="180px" />
    </Link>
  </div>
);

export default BooksIndexItem;
