import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tracksReducer } from './tracksReducer';
import { favoritesReducer } from './favoritesReducer';

export default combineReducers({
    user:userReducer,
    tracks:tracksReducer,
    favorites:favoritesReducer
});
