import React from 'react';
import {Link} from 'react-router-dom';

const ShelfCountsItem = props => {
  return (
    <div className="shelves-index-item">
      <Link to={`/shelves/${props.shelf.id}`}>
        <div>({props.shelf.books.length})</div>
      </Link>
    </div>
  )
};

export default ShelfCountsItem;
