import { getToLocalStorage } from "./session";
import axios from "axios";
import {
  getFavorites,
  getFavoritesError,
  getFavoritesSuccess,
} from "../redux/actions/favoritesActions";

class FavoritesService {
  host = "https://api.spotify.com/v1/me";

  // get tracks favorites
  getFavoritesTracks = () => async (dispatch) => {
    dispatch(getFavorites(true));
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const params = { limit: 50 };
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.get(
          `${this.host}/tracks?offset=0&limit=${params.limit}\n`,
          { headers }
        );
        dispatch(getFavoritesSuccess(response.data.items));
      }
    } catch (error) {
      dispatch(getFavoritesError(error));
    }
  };
  getFavoritesTracksSimple = async () => {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const params = { limit: 50 };
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.get(
          `${this.host}/tracks?offset=0&limit=${params.limit}\n`,
          { headers }
        );
        return response.data.items;
      }
    } catch (error) {
      return error;
    }
  };
  deleteFavorite= (id, tracks) => async (dispatch) => {
    try {
      if (getToLocalStorage) {
        let data = tracks.filter((track) => track.track.id !== id);
        dispatch(getFavoritesSuccess(data));
      }
    } catch (error) {
      dispatch(getFavoritesError(error));
    }
  };
  //delete tracks favorites
  deleteFavoriteTrack = (id) => async (dispatch) => {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
          "Content-Type": "application/json",
        };
        const response = await axios.delete(`${this.host}/tracks?`, {
          headers: headers,
          data: {
            ids: [`${id}`],
          },
        });
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  //add favorites tracks
  addFavoriteTrack = (id) => async (dispatch)=> {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
          "Content-Type": "application/json",
        };
        const response = await axios.put(
          `${this.host}/tracks?`,
          { ids: [`${id}`] },
          { headers }
        );
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
}
export default FavoritesService;
