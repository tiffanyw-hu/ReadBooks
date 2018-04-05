import React from 'react';
import {Link} from 'react-router-dom';

const BooksIndexItem = props => (
  <div>
    <Link to={`/books/${props.book.id}`}>
      <img src={props.book.img_url} />
    </Link>
  </div>
);

export default BooksIndexItem;
