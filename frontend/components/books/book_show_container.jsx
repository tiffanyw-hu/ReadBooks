import {connect} from 'react-redux';
import {fetchBook} from '../../actions/book_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => {
  let book = state.entities.books[ownProps.match.params.book_id]
  let currentUser = state.session.currentUser
  if (!currentUser) {
     currentUser = {user_id: "guest"}
  }
  return {book, currentUser};
}

const mapDispatchToProps = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id))
})

const BookShowContainer = connect(mapStateToProps, mapDispatchToProps)(BookShow);

export default BookShowContainer;
