import React from 'react';
import {Link} from 'react-router-dom';
import CurrentlyReading from './currently_reading';
// import WantToRead from './want_to_read';
import ShelvesIndexContainer from '../shelves/shelves_index_container';

class shelfSideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  render() {
    console.log(this.props.shelvesArray)
    let secondShelf = { books: [] };
    if (this.props.shelvesArray.length !== 0) {
      secondShelf = this.props.shelvesArray[1];
    }
    return (
      <div className="shelf-side-bar">
        <CurrentlyReading shelf={secondShelf}/>
        <ShelvesIndexContainer />
      </div>
    )

    // <WantToRead shelf={this.props.shelves[2]} />
  }
}

export default shelfSideBar;
