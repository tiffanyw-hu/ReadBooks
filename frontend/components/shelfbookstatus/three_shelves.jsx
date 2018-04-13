import React from 'react';

class ThreeShelves extends React.Component {

  constructor(props) {
    super(props);
    let defaultState = {"Read": "",
      "Currently Reading": "",
      "Want to Read": "" }
    defaultState[this.props.readingStatus] = "active-shelf"
    this.state = defaultState
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.mainShelfIds = {"Read": this.props.userShelves[0],
      "Currently Reading": this.props.userShelves[1],
      "Want to Read": this.props.userShelves[2] }
    let chosenShelf = e.target.getAttribute("data-shelfname")
    let newState = {"Read": "",
      "Currently Reading": "",
      "Want to Read": "" }
    if (this.state[chosenShelf] === "active-shelf") {
      this.props.toggleReadingStatus("Want To Read")
      this.deleteTheShelving(chosenShelf, this.mainShelfIds);
    } else {
      newState[chosenShelf] = "active-shelf"
      this.props.toggleReadingStatus(chosenShelf)
      this.mainShelfShelving(chosenShelf, this.mainShelfIds);
    }
    this.setState(newState)
  }

  deleteTheShelving(shelf_name, shelf_ids) {
    let currentShelfId = shelf_ids[shelf_name].id
      for(let i = 0; i < this.props.shelvings.length; i++) {
        if (this.props.shelvings[i].shelf_id === currentShelfId) {
          let shelvingId = this.props.shelvings[i].id
          this.props.deleteShelving(shelvingId)
        }
      }
  }

  mainShelfShelving(shelf_name, shelf_ids) {
    let keys = Object.keys(this.state)
    for (let i = 0; i < 3; i++) {
      if (this.state[keys[i]] === "active-shelf") {
        this.deleteTheShelving(keys[i], this.mainShelfIds)
      }
    }
    let shelving = {book_id: this.props.book.id, shelf_id: shelf_ids[shelf_name].id}
    this.props.createShelving(shelving)
  }

  render() {
    return (
      <div className="main-three-container">
        <div className="main-three">
          <div data-shelfname="Read"
            className={this.state["Read"]}
            onClick={this.handleClick}>
            <p data-shelfname="Read">Read</p>
          </div>

          <div data-shelfname="Currently Reading"
            className={this.state["Currently Reading"]}
            onClick={this.handleClick}>
            <p data-shelfname="Currently Reading">Currently Reading</p>
          </div>

          <div data-shelfname="Want to Read"
            className={this.state["Want to Read"]}
            onClick={this.handleClick}>
            <p data-shelfname="Want to Read">Want to Read</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeShelves;
