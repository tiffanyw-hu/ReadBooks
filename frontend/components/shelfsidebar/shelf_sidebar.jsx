import React from 'react';
import {Link, history} from 'react-router-dom';
import CurrentlyReading from './currently_reading';
import WantToRead from './want_to_read';
import ShelvesIndexContainer from '../shelves/shelves_index_container';

class shelfSideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetchedShelves: false
    }
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  componentDidUpdate() {
    if (!this.state.fetchedShelves && !window.location.href.split("/").includes(Object.keys(this.props.shelves))) {
      this.props.history.push(`/shelves/${this.props.firstShelf}`)
      this.setState({fetchedShelves: true})
    }
  }

  render() {
    let secondShelf = { books: [] };
    if (this.props.shelvesArray.length !== 0) {
      secondShelf = this.props.shelvesArray[1];
    }
    let thirdShelf = { books: [] };
    if (this.props.shelvesArray.length !== 0) {
      thirdShelf = this.props.shelvesArray[2];
    }

    let urlArray = window.location.href.split("/")
    if (urlArray[urlArray.length - 1] === "books" || urlArray[urlArray.length - 2] === "shelves") {
      return (
        <div className="shelf-side-bar">
          <CurrentlyReading shelf={secondShelf}/>
          <hr className="hr-gradient"></hr>
          <WantToRead shelf={thirdShelf} />
          <hr className="hr-gradient"></hr>
          <ShelvesIndexContainer />
        </div>
      )
    } else {
      return (
        <div className="shelf-show-side-bar">
          <ShelvesIndexContainer />
        </div>
      )
    }

  }
}

export default shelfSideBar;
