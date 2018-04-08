import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/book_actions';
import BooksIndex from './books_index';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const books = Object.keys(state.entities.books).map(id => state.entities.books[id]);
  return {
    books: ownProps.location.pathname === "/" ? books.slice(0, 10) : books
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
})

const BooksIndexContainer = connect(mapStateToProps, mapDispatchToProps)(BooksIndex)

export default withRouter(BooksIndexContainer);
