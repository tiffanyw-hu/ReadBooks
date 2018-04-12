import React from 'react';

class ThreeShelves extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"Read": "",
      "Currently Reading": "",
      "Want to Read": "" }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.toggleReadingStatus(e.target.getAttribute("data-shelfname"))
    // this.props.toggleHiddenShelves();
    let newState = {"Read": "",
      "Currently Reading": "",
      "Want to Read": "" }
    newState[e.target.getAttribute("data-shelfname")] = "active-shelf"
    this.setState(newState)
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
