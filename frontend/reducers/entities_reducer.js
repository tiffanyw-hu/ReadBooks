import {combineReducers} from 'redux';
import booksReducer from './books_reducer';

const entitiesReducer = combineReducers({
  books: booksReducer
})

export default entitiesReducer;
