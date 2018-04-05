import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/book_actions';
import BooksIndex from './books_index';

const mapStateToProps = (state) => ({
  books: Object.keys(state.books).map(id => state.books[id])
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
})

const booksIndexContainer = connect(mapStateToProps, mapDispatchToProps)(BooksIndex)

export default booksIndexContainer;
