import actionTypes from './actionTypes';

export const addNewItem = (text, id) => ({
  type: actionTypes.ADD_NEW_ITEM,
  payload: {
    text: text,
    id: id,
  },
});

export const toggleItemStatus = (id) => ({
  type: actionTypes.TOGGLE_ITEM_STATUS,
  payload: { id: id },
});
