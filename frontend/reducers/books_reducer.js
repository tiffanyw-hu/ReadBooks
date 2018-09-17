import merge from 'lodash/merge';
import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      let newState = merge({}, state);
      let bookObject = {}
      bookObject[action.book.id] = action.book;
      newState << bookObject
      return newState;
    default:
      return state;
  }
};

export default booksReducer;
