import { ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS } from "../types/userTypes";

const UserInitialState = {
  isLogin: localStorage.getItem("accessToken") ? true : false,
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
        name: action.payload.display_name,
        avatar: action.payload.images[0].url,
      };
    case ADD_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
