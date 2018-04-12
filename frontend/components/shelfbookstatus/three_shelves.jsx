import React from 'react';

class ThreeShelves extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    this.props.userShelves.slice(0, 3)
  }
}

export default ThreeShelves;
