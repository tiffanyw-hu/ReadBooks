import React from 'react';
import {withRouter} from 'react-router-dom';
import ShelvesIndexItem from './shelves_index_item';
import ShelfCountsItem from './shelves_count'

class ShelvesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  handleDelete(param, e) {
    e.preventDefault();
    console.log(param)
    this.props.deleteShelf(param);
  }

  render() {
    let shelves;
    let counts;

    let shelfArray = Object.keys(this.props.shelves)
    if (shelfArray.length !== 0) {

      shelves = this.props.shelvesArray.map(shelf => {
      return (
        <ShelvesIndexItem shelf={shelf} key={`shelf_id: ${shelf.id}`}
          deleteShelf={this.deleteShelf} handleDelete={this.handleDelete} />
      )
    })

      counts = this.props.shelvesArray.map(shelf => {
      return (
        <ShelfCountsItem shelf={shelf} key={`shelf_id: ${shelf.id}`} />
      )
    })
  }
    return (
      <div className="shelves-index">
        <div className="shelves-counts">
          {counts}
        </div>
        <div className="shelves-list">
          <h3 className="bookshelves-title">BOOKSHELVES</h3>
          <ul className="shelves-list-items">
            {shelves}
          </ul>
        </div>
      </div>
    )

  }

}

export default ShelvesIndex;
