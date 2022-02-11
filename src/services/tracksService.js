import { getToLocalStorage } from "./session";
import axios from "axios";
import FavoritesService from "./favoritesService";
import {
  getTracks,
  getTracksError,
  getTracksSuccess,
} from "../redux/actions/tracksActions";
class TracksService {
  host = "https://api.spotify.com/v1";
  validateTracks = (data, value) => {
    const result = data.map((track) =>
      track.track.id !== value ? true : false
    );
    if (result.includes(false)) {
      return false;
    }
    return true;
  };
  getTracksTop50 = () => async (dispatch) => {
    const favoritesService = new FavoritesService();
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
        const reponseFavorites =
          await favoritesService.getFavoritesTracksSimple();
        let data = response.data.tracks.items.filter((track) =>
          this.validateTracks(reponseFavorites, track.track.id)
        );
        dispatch(getTracksSuccess(data));
      }
    } catch (error) {
      console.error(error);
      dispatch(getTracksError(error));
    }
  };
}
export default TracksService;
