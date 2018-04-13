import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/book_actions';
import {fetchShelves, fetchShelf} from '../../actions/shelf_actions';
import {deleteShelving} from '../../actions/shelving_actions';
import ShelvesShow from './shelves_show';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    shelves: ownProps.match.params.shelf_id === "books" ? {books: []} : state.entities.shelves,
    shelf_id: ownProps.match.params.shelf_id,
    currentUser: state.session.currentUser,
    books: state.entities.books
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchShelves: () => dispatch(fetchShelves()),
  fetchShelf: id => dispatch(fetchShelf(id)),
  deleteShelving: id => dispatch(deleteShelving(id)).then(() => dispatch(fetchShelves()))
})

const ShelvesShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShelvesShow)

export default withRouter(ShelvesShowContainer);
