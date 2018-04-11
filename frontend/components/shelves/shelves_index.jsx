import React from 'react';
import {withRouter} from 'react-router-dom';
import ShelvesIndexItem from './shelves_index_item';
import ShelfCountsItem from './shelves_count'

class ShelvesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {name: "", user_id: this.props.currentUser.id}
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleDelete(param, e) {
    e.preventDefault();
    this.props.deleteShelf(param);
  }

  handleSubmit(e) {
    e.preventDefault();
    let shelf = this.state;
    this.props.createShelf(shelf);
    this.setState({name: "" })
  //clears the name of the form/state/whateverthingy
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
        <h3 className="bookshelves-title">BOOKSHELVES</h3>
        <div className="counts-and-list">
          <div className="shelves-counts">
            {counts}
          </div>
          <div className="shelves-list">
            <ul className="shelves-list-items">
              {shelves}
            </ul>
          </div>
        </div>
        <div className="add-shelf">
          <p>Add a Shelf:</p>
          <input type="text" value={this.state.name}
            onChange={this.update('name')} />
          <input type="submit" onClick={this.handleSubmit} value="add" />
        </div>
      </div>
    )

  }

}

export default ShelvesIndex;
