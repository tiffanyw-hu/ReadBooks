import React from 'react';
import {Link} from 'react-router-dom';

const BooksIndexItem = {book} => (
  <div>
    <Link to={`/books/${book.id}`}>
      <img src={book.img_url} />
    </Link>
  </div>
)

export default BooksIndexItem;
