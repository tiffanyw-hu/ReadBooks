import {connect} from 'react-redux';
import {fetchBook} from '../../actions/book_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => ({
  book: state.entities.books(ownProps.match.params.book_id)
})

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book))
})

const BookShowContainer = connect(mapStateToProps, mapDispatchToProps)(BookShow);

export default BookShowContainer;
