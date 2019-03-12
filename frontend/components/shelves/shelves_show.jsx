import React from 'react';
import ShelvesShowItem from './shelves_show_item';

class ShelvesShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.bookIdsToShelvingIds = this.bookIdsToShelvingIds.bind(this);
    this.state = {books: this.props.books}
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
    console.log(this.props)
    let result = {}
    if (this.props.shelves[this.props.shelf_id]) {
      let shelvings = this.props.shelves[this.props.shelf_id].shelvings;
      Object.keys(shelvings).map(key => {result[shelvings[key].book_id] = shelvings[key].id});
    }
    return result;
  }

  render() {
    if (this.props.shelf_id === "books") {
      return (<div></div>)
    }

    let shelf = [];
    let badShelfIds = ["books", "mybooks"]
    if (Object.keys(this.props.shelves).length !== 0 && !badShelfIds.includes(this.props.shelf_id)) {
      let bookshelving_table = this.bookIdsToShelvingIds();
      shelf = this.props.shelves[this.props.shelf_id].books.map(book => {
      return (
        <ShelvesShowItem book={book} currentUser={this.props.currentUser} key={`book_id: ${book.id}`}
          handleDelete={this.handleDelete} shelvingId={bookshelving_table[book.id]} />
      )
    });
  }

    return (
      <div className="shelves-show-list">
        <table className="shelves-show-table">
          <tbody>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
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
