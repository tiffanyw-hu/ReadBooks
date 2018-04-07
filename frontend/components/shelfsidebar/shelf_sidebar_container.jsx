import {connect} from 'react-redux';
import React from 'react';
import {fetchShelves, createShelf} from '../../actions/shelf_action';
import shelfSideBar from './shelf_sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  shelves: state.entitites.shelves
})

const mapDispatchToProps = dispatch => ({
  fetchShelves = () => dispatch(fetchShelves())
})

const ShelfSideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(shelfSideBar);

export default ShelfSideBarContainer;
