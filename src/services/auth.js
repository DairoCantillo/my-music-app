import { addToLocalStorage, getToLocalStorage,deleteToLocalStorage } from "./session";
import { updateUserLogin } from "../redux/actions/userActions";
class AuthenticationService {
  CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  SPOTIFY_AUTHORIZE_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT;
  REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_REDIRECT_URL_AFTER_LOGIN;
  SPACE_DELIMITER = "%20";
  SCOPES = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
    "user-library-read",
    "user-library-modify",
  ];
  SCOPES_URL_PARAM = this.SCOPES.join(this.SPACE_DELIMITER);
  InitHash = () => {
    window.location = `${this.SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URL_AFTER_LOGIN}&scope=${this.SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };
  AuthenticationSpotify = () => {
    if (window.location.hash) {
      const response = this.getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );
      addToLocalStorage(response);
      window.location = "http://localhost:3000/Home";
    }
  };

  getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});

    return paramsSplitUp;
  };
  validateSession = () => (dispatch) => {
    const token = getToLocalStorage();
    if (token.access_token.length === 0) {
      dispatch(updateUserLogin(false));
      deleteToLocalStorage();
    }
  };
}
export default AuthenticationService;
