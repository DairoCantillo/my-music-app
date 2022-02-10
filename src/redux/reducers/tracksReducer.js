import { ADD_TRACKS, ADD_TRACKS_SUCCESS, ADD_TRACKS_ERROR } from "../types/tracksType";

const tracksReducerInitialState = {
  tracks: [],
  isLoading: false,
  error: false,
};
export const tracksReducer = (state = tracksReducerInitialState, action) => {
  switch (action.type) {
    case ADD_TRACKS:
      return { ...state, isLoading: action.payload };
    case ADD_TRACKS_SUCCESS:
      return { ...state, isLoading: false, tracks: action.payload };
    case ADD_TRACKS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  } 
};
