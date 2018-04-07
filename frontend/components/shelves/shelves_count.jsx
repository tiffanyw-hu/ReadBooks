import React from 'react';
import {Link} from 'react-router-dom';

const ShelfCountsItem = props => (
  <div className="shelves-index-item">
    <Link to={`/shelves/${props.shelf.id}`}>
      <li>{props.shelf.books.length}</li>
    </Link>
  </div>
);

export default ShelfCountsItem;
