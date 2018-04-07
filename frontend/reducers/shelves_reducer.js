import merge from 'lodash/merge';
import {RECEIVE_SHELVES,
  RECEIVE_SHELF,
  REMOVE_SHELF} from '../actions/shelf_actions';

const shelvesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SHELVES:
      return action.shelves;
    case RECEIVE_SHELF:
      let newState = merge({}, state);
      newState[action.shelf.id] = action.shelf;
      return newState;
    case REMOVE_SHELF:
      let prevState = merge({}, state);
      delete prevState[action.shelf.id];
      return prevState;
    default:
      return state;
  }
};

export default shelvesReducer;
