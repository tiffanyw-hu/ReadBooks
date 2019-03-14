import React from 'react';

class CustomShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shelfClass: ""}
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.book.shelvings) {
      for(let i = 0; i < this.props.book.shelvings.length; i++) {
        if (this.props.book.shelvings[i].shelf_id === this.props.shelf.id) {
          this.setState({shelfClass: "active-shelf"})
        }
      }
    }
  }

  handleClick(e) {
    if (this.shelfdiv.className === "active-shelf") {
      console.log(this.props.book.shelvings)
      for(let i = 0; i < this.props.book.shelvings.length; i++) {
        if (this.props.book.shelvings[i].shelf_id === this.props.shelf.id) {
          let shelvingId = this.props.book.shelvings[i].id
          this.props.deleteShelving(shelvingId)
          this.setState({shelfClass: ""})
        }
      }
    } else {
      this.props.createShelving({book_id: this.props.book.id, shelf_id: this.props.shelf.id})
      this.setState({shelfClass: "active-shelf"})
    }
  }

  render() {

    return (
      <div ref={(el) => {this.shelfdiv = el}} className={this.state["shelfClass"]}>
        <p onClick={this.handleClick}>{this.props.shelf.name}</p>
      </div>
    )
  }

}

export default CustomShelf;
