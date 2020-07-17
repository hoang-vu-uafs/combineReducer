import { combineReducers } from "redux";

const initialState = [
  { car: "Tesla", year: 2020 },
  { car: "Toyota", year: 1999 },
];

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
}

function nameReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_NAME":
      return {
        name: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  item: itemsReducer,
  name: nameReducer,
});
