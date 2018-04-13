import React from 'react';
import {Link} from 'react-router-dom';

const ShelvesShowItem = props => {
  let deleteButton = [<a key={`shelf_id_delete: ${props.book.id}`}
    href="#"
    onClick={props.handleDelete.bind(this, props.shelvingId)}>x</a>]
  let userReview = {rating: "0", body: ""}
  console.log(props.book.reviews)
  if (props.book.reviews) {
    for (let i = 0; i < props.book.reviews.length; i++) {
      if (props.book.reviews[i].user_id === props.currentUser.id) {
        userReview = props.book.reviews[i]
      }
    }
  }

    return (

      <tr className="shelves-show-item">
        <td>
          <Link to={`/books/${props.book.id}`}>
            <img src={props.book.img_url} width="50px" height="77px" />
          </Link>
        </td>
        <td>
          <Link to={`/books/${props.book.id}`}>
            {props.book.title}
          </Link>
        </td>
        <td><p className="shelves-show-author">{props.book.author}</p></td>

        <td><p>{userReview.rating} out of 5</p></td>

        <td><p>{userReview.body}</p></td>

        <td>
          {deleteButton}
        </td>
      </tr>
  )
};

export default ShelvesShowItem;
