import { ADD_FAVORITES, ADD_FAVORITES_SUCCESS, ADD_FAVORITES_ERROR } from "../types/favoritesType";

const favoritesInitialState = {
  tracks: [],
  isLoading: false,
  error: false,
};
export const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return { ...state, isLoading: action.payload };
    case ADD_FAVORITES_SUCCESS:
      return { ...state, isLoading: false, tracks: action.payload };
    case ADD_FAVORITES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  } 
};
