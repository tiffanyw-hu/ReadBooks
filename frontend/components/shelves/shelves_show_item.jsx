import React from 'react';
import {Link} from 'react-router-dom';

const ShelvesShowItem = props => {
  let deleteButton = [<a key={`shelf_id_delete: ${props.book.id}`}
    href="#"
    onClick={props.handleDelete.bind(this, props.shelvingId)}>x</a>]

    return (
      <div className="shelves-show-item">
      <Link to={`/books/${props.book.id}`}>
        <img src={props.book.img_url} />
      </Link>

      <Link to={`/books/${props.book.id}`}>
        {props.book.title}
      </Link>

      <p className="shelves-show-author">{props.book.author}</p>

      <p>{props.book.name}</p>

      <p>Rating</p>

      <p>Review</p>

      {deleteButton}
      </div>
  )
};

export default ShelvesShowItem;
