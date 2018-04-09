import React from 'react';
import {Link} from 'react-router-dom';

const ShelvesShowItem = props => {
  let deleteButton = [<a key={`shelf_id_delete: ${props.book.id}`}
    href="#"
    onClick={props.handleDelete.bind(this, props.shelvingId)}>x</a>]

    return (

      <tr className="shelves-show-item">
        <td>
          <Link to={`/books/${props.book.id}`}>
            <img src={props.book.img_url} />
          </Link>
        </td>
        <td>
          <Link to={`/books/${props.book.id}`}>
            {props.book.title}
          </Link>
        </td>
        <td><p className="shelves-show-author">{props.book.author}</p></td>

        <td><p>{props.book.name}</p></td>

        <td><p>Rating</p></td>

        <td><p>Review</p></td>

        <td>
          {deleteButton}
        </td>
      </tr>
  )
};

export default ShelvesShowItem;
