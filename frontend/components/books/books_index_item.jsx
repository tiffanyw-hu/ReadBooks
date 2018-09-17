import React from 'react';
import {Link} from 'react-router-dom';

class BooksIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="book-index-item">
      <Link to={`/books/${this.props.book.id}`}>
        <img src={this.props.book.img_url} width="115px" height="180px" />
      </Link>
    </div>
  )
  }

}


export default BooksIndexItem;
