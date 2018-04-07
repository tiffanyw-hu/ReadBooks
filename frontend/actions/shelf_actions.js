import * as ShelfAPIUtil from '../utils/shelf_api_util';

export const RECEIVE_SHELVES = 'RECEIVE_SHELVES';
export const RECEIVE_SHELF = 'RECEIVE_SHELF';
export const REMOVE_SHELF = 'REMOVE_SHELF';

export const receiveShelves = shelves => ({
  type: RECEIVE_SHELVES,
  shelves
})

export const receiveShelf = shelf => ({
  type: RECEIVE_SHELF,
  shelf
})

export const removeShelf = shelf => ({
  type: REMOVE_SHELF,
  shelf
})

export const fetchShelves = () => dispatch => (
  ShelfAPIUtil.fetchShelves().then(shelves => dispatch(receiveShelves(shelves)))
)

export const fetchShelf = id => dispatch => (
  ShelfAPIUtil.fetchShelf(id).then(shelf => dispatch(receiveShelf(shelf)))
)

export const createShelf = shelf => dispatch => (
  ShelfAPIUtil.createShelf(shelf).then(shelf => dispatch(receiveShelf(shelf)))
)

export const updateShelf = shelf => dispatch => (
  ShelfAPIUtil.updateShelf(shelf).then(shelf => dispatch(receiveShelf(shelf)))
)

export const deleteShelf = shelfId => dispatch => (
  ShelfAPIUtil.deleteShelf(shelfId).then(shelf => dispatch(removeShelf(shelf)))
)
