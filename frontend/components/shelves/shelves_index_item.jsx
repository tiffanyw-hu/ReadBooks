import React from 'react';
import {Link} from 'react-router-dom';

const ShelvesIndexItem = props => {
  let deleteButton = [<a key={`shelf_id_delete: ${props.shelf.id}`} href="#" onClick={props.handleDelete.bind(this, props.shelf.id)}>&times;</a>]
  if (props.shelf.name === "Read" || props.shelf.name === "Currently Reading"
  || props.shelf.name === "Want to Read") {
    deleteButton = ""
  }
  return (
    <li className="shelves-index-item">
      <Link to={`/shelves/${props.shelf.id}`}>
      {props.shelf.name + ' '} 
      </Link>
      {deleteButton}
    </li>
  )
};

export default ShelvesIndexItem;
