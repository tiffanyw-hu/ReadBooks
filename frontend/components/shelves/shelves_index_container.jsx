import {connect} from 'react-redux';
import React from 'react';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  shelves: state.entities.shelves
  shelvesArray: Object.keys(state.entities.shelves).map
  (id => state.entities.shelves[id])
})

const mapDispatchToProps = dispatch => ({
  fetchShelves: () => dispatch(fetchShelves()),
  createShelf: shelf => dispatch(createShelf(shelf)),
  deleteShelf: shelfId => dispatch(deleteShelf(shelfId))
})

const ShelvesIndex = connect(mapStateToProps, mapDispatchToProps)(ShelvesIndex)

export default ShelvesIndex;
