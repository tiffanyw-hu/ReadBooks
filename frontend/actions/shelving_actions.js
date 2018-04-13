import * as ShelvingAPIUtil from '../utils/shelving_api_util';
import {receiveBook} from './book_actions';

export const createShelving = shelving => dispatch => (
  ShelvingAPIUtil.createShelving(shelving).then(book => dispatch(receiveBook(book)))
)

export const deleteShelving = id => dispatch => (
  ShelvingAPIUtil.deleteShelving(id).then(book => dispatch(receiveBook(book)))
)
