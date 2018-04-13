import React from 'react';
import ShelfNameDisplay from './shelf_name_display';
import ThreeShelves from './three_shelves';
// import CustomShelf from './custom_shelf';

class ShelvesStatus extends React.Component {

  constructor(props) {
    super(props)
    let initial_status = "Want To Read"
    if (this.props.book.reading_status) {
      initial_status = this.props.book.reading_status.name
    }
    this.state = {reading_status: initial_status, dropdownShow: "hidden"}
    this.toggleHiddenShelves = this.toggleHiddenShelves.bind(this);
    this.userCustomShelves = this.userCustomShelves.bind(this);
    this.toggleReadingStatus = this.toggleReadingStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  toggleHiddenShelves() {
    this.setState({dropdownShow: this.state.dropdownShow === "hidden" ? "" : "hidden"})
  }

  toggleReadingStatus(reading_status) {
    this.setState({reading_status: reading_status})
  }

  userCustomShelves() {
    let userShelvesArray = Object.values(this.props.userShelves)
    if (Object.keys(this.props.userShelves).length !== 0) {
      let shelvesLength = userShelvesArray.length
      let customShelves = userShelvesArray.slice(2, shelvesLength)
      // <CustomShelf shelf={shelf} createShelving={this.props.createShelving}
      //   deleteShelving={this.props.deleteShelving} />
      return customShelves.map(shelf => {
        return (
          <div></div>
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
            userShelves={Object.values(this.props.userShelves)}
            createShelving={this.props.createShelving}
            deleteShelving={this.props.deleteShelving}
            toggleReadingStatus={this.toggleReadingStatus}
            toggleHiddenShelves={this.toggleHiddenShelves}
            shelvings={this.props.book.shelvings}
            book={this.props.book} />
          {this.userCustomShelves()}
        </div>
      </div>
    )
  }
}

export default ShelvesStatus;
