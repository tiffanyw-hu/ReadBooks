import React from 'react';
import ShelfNameDisplay from './shelf_name_display';
import ThreeShelves from './three_shelves';
import CustomShelf from './custom_shelf';

class ShelvesStatus extends React.Component {

  constructor(props) {
    super(props)
    let reading_status = this.props.book.reading_status.name || "YOU CAN'T JUDGE ME"
    this.state = {reading_status: reading_status, dropdownShow: "hidden"}
    this.toggleHiddenShelves = this.toggleHiddenShelves.bind(this);
    this.userCustomShelves = this.userCustomShelves.bind(this);
    this.toggleReadingStatus = this.toggleReadingStatus.bind(this);
  }

  toggleHiddenShelves() {
    this.setState({dropdownShow: this.state.dropdownShow === "hidden" ? "" : "hidden"})
  }

  toggleReadingStatus(reading_status) {
    this.setState({reading_status: reading_status})
  }

  userCustomShelves() {
    if (Object.keys(this.props.userShelves).length !== 0) {
      let shelvesLength = this.props.userShelves.length
      let customShelves = this.props.userShelves.slice(2, shelvesLength)
      return customShelves.map(shelf => {
        return (
          <CustomShelf shelf={shelf} createShelving={this.props.createShelving}
            deleteShelving={this.props.deleteShelving} />
        )
      })
    }
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
            userShelves={this.props.userShelves}
            createShelving={this.props.createShelving}
            deleteShelving={this.props.deleteShelving}
            toggleReadingStatus={this.toggleReadingStatus}
            toggleHiddenShelves={this.toggleHiddenShelves} />
          {this.userCustomShelves()}
        </div>
      </div>
    )
  }
}

export default ShelvesStatus;
