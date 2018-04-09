import React from 'react';
import ShelvesShowItem from './shelves_show_item';

class ShelvesShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.bookIdsToShelvingIds = this.bookIdsToShelvingIds.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchShelves();
  }

  handleDelete(param, e) {
    e.preventDefault();
    this.props.deleteShelving(param);
  }

  bookIdsToShelvingIds() {
    let result = {}
    let shelvings = this.props.shelves[this.props.shelf_id].shelvings;
    Object.keys(shelvings).map(key => {result[shelvings[key].book_id] = shelvings[key].id});
    return result;
  }

  render() {
    let shelf = [];
    if (Object.keys(this.props.shelves).length !== 0) {
      let bookshelving_table = this.bookIdsToShelvingIds();
      shelf = this.props.shelves[this.props.shelf_id].books.map(book => {
      return (
        <ShelvesShowItem book={book} key={`book_id: ${book.id}`}
          handleDelete={this.handleDelete} shelvingId={bookshelving_table[book.id]} />
      )
    });
  }
    if (this.props.shelf_id === "books") {
      return (<div></div>)
    }

    return (
      <div className="shelves-show-list">
        <table className="shelves-show-table">
          <tbody>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Shelf</th>
            <th>Rating</th>
            <th>Review</th>
            <th></th>
          </tr>
          {shelf}
          </tbody>
        </table>
      </div>
    )
  }

}

export default ShelvesShow;
