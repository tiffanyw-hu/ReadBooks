import React from 'react';
import {withRouter} from 'react-router-dom';
import ShelfIndexItem from './shelves_index_item';
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
    this.props.deleteShelf(param);
  }

  render() {
    let shelves = this.props.shelves.map(shelf => {
      return (
        <ShelfIndexItem shelf={shelf} key={`shelf_id: ${shelf.id}`}
          deleteShelf={this.deleteShelf} handleDelete={this.handleDelete} />
      )
    })

    let counts = this.props.shelves.map(shelf => {
      return (
        <ShelfCountsItem shelf={shelf} key={`shelf_id: ${shelf.id}`} />
      )
    })

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
