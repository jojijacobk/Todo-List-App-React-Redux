import actionTypes from './actionTypes';
import { readStorage } from '../localStorage';

const reducer = (state = readStorage(), action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_ITEM:
      return [
        ...state,
        {
          text: action.payload.text,
          status: false,
          id: action.payload.id,
        },
      ];

    case actionTypes.TOGGLE_ITEM_STATUS:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.status = !item.status;
        }
        return item;
      });

    default:
      return state;
  }
};

export default reducer;
