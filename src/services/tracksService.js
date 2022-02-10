import { getToLocalStorage } from "./session";
import axios from "axios";
import {
  getTracks,
  getTracksError,
  getTracksSuccess,
} from "../redux/actions/tracksActions";
class TracksService {
  host = "https://api.spotify.com/v1";
  getTracksTop50 = () => async (dispatch) => {
    try {
      dispatch(getTracks(true));
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.get(
          `${this.host}/playlists/37i9dQZEVXbMDoHDwVN2tF`,
          { headers }
        );

        dispatch(getTracksSuccess(response.data.tracks.items));
      }
    } catch (error) {
      console.error(error);
      dispatch(getTracksError(error));
    }
  };
}
export default TracksService;
