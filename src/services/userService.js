import { getToLocalStorage } from "./session";
import axios from "axios";
class UserService {
  host = "https://api.spotify.com/v1/me";

  getFavoritesTracks = async () => {
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
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  getUserInfo = async () => {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.get(`${this.host}`, { headers });
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
  deleteFavoriteTrack = async (id) => {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.delete(`${this.host}/tracks?ids=${id}`, { headers });
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  addFavoriteTrack = async (id) => {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.put(
            `${this.host}/tracks?`,
            { ids: [`${id}`] },
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json',
              },
            }
          )
      
        // const response = await axios.put(`${this.host}/track?ids=${id}`, { headers });
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
}
export default UserService;
