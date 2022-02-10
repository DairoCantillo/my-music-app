import { getToLocalStorage } from "./session";
import axios from "axios";
import {
  getUser,
  getUserError,
  getUserSuccess,
} from "../redux/actions/userActions";
class UserService {
  host = "https://api.spotify.com/v1/me";

  getUserInfo = () => async (dispatch) => {
    try {
      if (getToLocalStorage) {
        dispatch(getUser(true));
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.get(`${this.host}`, { headers });
        dispatch(getUserSuccess(response.data));
      }
    } catch (error) {
      dispatch(getUserError(error))
    }
  };
}
export default UserService;
