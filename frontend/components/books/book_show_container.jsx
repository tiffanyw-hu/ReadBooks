import {connect} from 'react-redux';
import {fetchBook} from '../../actions/book_actions';
import {fetchBooks} from '../../actions/book_actions';
import {fetchShelves} from '../../actions/shelf_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => {
  let urlArray = window.location.href.split("/")
  let book = state.entities.books[ownProps.match.params.book_id]
  let shelves = state.entities.shelves
  if (urlArray.includes("localhost")) {
    let book = state.entities.books[ownProps.match.params.book_id]
  }
  let currentUser = state.session.currentUser
  if (!currentUser) {
     currentUser = {user_id: "guest"}
  }
  return {book, shelves, currentUser};
}

const mapDispatchToProps = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id)),
  fetchShelves: () => dispatch(fetchShelves()),
  fetchBooks: () => dispatch(fetchBooks())
})

const BookShowContainer = connect(mapStateToProps, mapDispatchToProps)(BookShow);

export default BookShowContainer;
