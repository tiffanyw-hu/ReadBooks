import React from 'react';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {showmore: false}
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book_id)
  }

  // renderDescription() {
  //   let description = this.props.book.description;
  //   if (!this.state.showmore) {
  //     description = description.slice(0, )
  //     what determines the length
  //   }
  // }

  render () {
    if (!this.props.book) return null

    return (
      <div className="bookshowpage-container">
        <div className="page-top">
          <div className="img-col">
            <img className="book-img" src={this.props.book.img_url} width="150px" height="231px" />
          </div>
          <div className="book-details">
            <h3 className="book-title">{this.props.book.title}</h3>
            <p className="book-author">{this.props.book.author}</p>
            <div>W</div>
            <p className="book-description">{this.props.book.description}</p>
            <hr className="hr"></hr>
          </div>
        </div>
      </div>
    )
  }

}

export default BookShow;
