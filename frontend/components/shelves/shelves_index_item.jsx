import React from 'react';
import {Link} from 'react-router-dom';

const ShelvesIndexItem = props => (
  <div className="shelves-index-item">
    <Link to={`/shelves/${props.shelf.id}`}>
      <li>{props.shelf.name}</li>
    </Link>
    <a href="#" onClick={props.handleDelete.bind(this, props.shelf.id)}>x</a>
  </div>
);

export default ShelvesIndexItem;
