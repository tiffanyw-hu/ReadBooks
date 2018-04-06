import {combineReducers} from 'redux';
import booksReducer from './books_reducer';
import shelvesReducer from './shelves_reducer';

const entitiesReducer = combineReducers({
  books: booksReducer,
  shelves: shelvesReducer
})

export default entitiesReducer;
