import {connect} from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router-dom';
import ShelvesIndex from './shelves_index';
import {fetchShelves, createShelf, deleteShelf} from '../../actions/shelf_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    shelves: state.entities.shelves,
    shelvesArray: Object.keys(state.entities.shelves).map(id => state.entities.shelves[id]),
    firstShelf: Object.keys(state.entities.shelves)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchShelves: () => dispatch(fetchShelves()),
  createShelf: shelf => dispatch(createShelf(shelf)),
  deleteShelf: shelfId => dispatch(deleteShelf(shelfId))
})

const ShelvesIndexContainer = connect(mapStateToProps, mapDispatchToProps)(ShelvesIndex)

export default withRouter(ShelvesIndexContainer);
