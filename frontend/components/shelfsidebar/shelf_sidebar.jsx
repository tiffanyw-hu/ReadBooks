import React from 'react';
import {Link} from 'react-router-dom';
import CurrentlyReading from './currently_reading';
import WantToRead from './want_to_read';
import ShelvesList from './shelves_index';

class shelfSideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShelves();
  }

  render() {
    return (
      <div className="shelf-side-bar">
        <CurrentlyReading book={this.props.shelves[0].books[0]}/>
        <WantToRead shelf={this.props.shelves[1]}/>
        <Shelveslist />
      </div>
    )
  }
}

export default shelfSideBar;

//  <CurrentReadingBook book={this.props.shelves[0].books[0]}
//  <WantToRead shelf={this.props.shelves[1]}
//  <ShelvesList shelveNames={this.props.shelves}/>
