import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tracksReducer } from './tracksReducer';
import { favoritesReducer } from './favoritesReducer';

export default combineReducers({
    users:userReducer,
    tracks:tracksReducer,
    favorites:favoritesReducer
});
