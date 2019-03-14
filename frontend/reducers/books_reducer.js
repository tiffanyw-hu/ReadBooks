import merge from 'lodash/merge';
import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      let newBookState = {}
      action.books.forEach((book) => {
        newBookState[book.id] = book
      })
      return newBookState;
    case RECEIVE_BOOK:
      let bookObject = {}
      bookObject[action.book.id] = action.book;
      let newState = merge({}, state, bookObject);
      return newState;
    default:
      return state;
  }
};

export default booksReducer;
