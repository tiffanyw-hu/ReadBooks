import {connect} from 'react-redux';
import React from 'react';
import {fetchShelves} from '../../actions/shelf_actions';
import shelfSideBar from './shelf_sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  shelves: state.entities.shelves,
  shelvesArray: Object.keys(state.entities.shelves).map(id => state.entities.shelves[id]),
  firstShelf: Object.keys(state.entities.shelves)[0]
})

const mapDispatchToProps = dispatch => ({
  fetchShelves: () => dispatch(fetchShelves())
})

const ShelfSideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(shelfSideBar);

export default ShelfSideBarContainer;
