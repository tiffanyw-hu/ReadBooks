import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/book_actions';
import BooksIndex from './books_index';

const mapStateToProps = (state) => ({
  books: Object.keys(state.entities.books).map(id => state.entities.books[id])
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
})

const BooksIndexContainer = connect(mapStateToProps, mapDispatchToProps)(BooksIndex)

export default booksIndexContainer;
