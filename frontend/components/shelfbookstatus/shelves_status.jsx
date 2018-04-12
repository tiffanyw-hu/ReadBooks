import React from 'react';
import ShelfNameDisplay from './shelf_name_display';
import ThreeShelves from './three_shelves';
import CustomShelf from './custom_shelf';

class ShelvesStatus extends React.Component {

  constructor(props) {
    super(props)
    this.state = {reading_status: this.props.book.reading_status, dropdownShow: "hidden"}
    this.toggleHiddenShelves = this.toggleHiddenShelves.bind(this);
    this.userCustomShelves = this.userCustomShelves.bind(this);
  }

  toggleHiddenShelves() {
    this.setState({dropdownShow: dropdownShow === "hidden" ? "" : "hidden"})
  }

  userCustomShelves() {
    let shelvesLength = this.props.userShelves.length
    let customShelves = this.props.userShelves.slice(2, shelvesLength)
    return customShelves.map(shelf => {
      return (
        <CustomShelf shelf={shelf}/>
      )
    })
  }

  render() {
    return (
      <div className="shelves-status-container">
        <div className="shelf-display">
          <ShelfNameDisplay readingStatus={this.state.reading_status}
            onClick={this.toggleHiddenShelves} />
        </div>
        <div className={`hidden-shelves ${this.state.dropdownShow}`}>
          <ThreeShelves readingStatus={this.state.reading_status}
            userShelves={this.props.userShelves} />
          {this.userCustomShelves()}
        </div>
      </div>
    )
  }
}

export default ShelvesStatus;
