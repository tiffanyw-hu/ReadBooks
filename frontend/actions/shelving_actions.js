import * as ShelvingAPIUtil from '../utils/shelving_api_util';
import {receiveShelf, RECEIVE_SHELF} from './shelf_actions';

export const createShelving = shelving => dispatch => (
  ShelvingAPIUtil.createShelving(shelving).then(shelf => dispatch(receiveShelf(shelf)))
)

export const deleteShelving = id => dispatch => (
  ShelvingAPIUtil.deleteShelving(id).then(shelf => dispatch(receiveShelf(shelf)))
)
