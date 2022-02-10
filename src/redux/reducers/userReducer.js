import {
  ADD_USER,
  ADD_USER_ERROR,
  ADD_USER_SUCCESS,
  UPDATE_USER_LOGIN,
} from "../types/userTypes";

const UserInitialState = {
  isLogin: true,
  name: "",
  avatar: "",
  isLoading: false,
};
export const userReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, isLoading: action.payload };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        name: action.payload.display_name,
        avatar: action.payload.images[0].url,
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.payload,
      };
    case UPDATE_USER_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
