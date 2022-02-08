import { getToLocalStorage } from "./session";
import axios from "axios";
class TracksService {
  host = "https://api.spotify.com/v1";

  getTracksTop50 = async () => {
    try {
      if (getToLocalStorage) {
        const { access_token, token_type } = getToLocalStorage();
        const headers = {
          Authorization: `${token_type} ${access_token}`,
        };
        const response = await axios.get(`${this.host}/playlists/37i9dQZEVXbMDoHDwVN2tF`, { headers });
        return response.data.tracks;
 
      }
    } catch (error) {
      console.error(error);
    }
  };
  
}
export default TracksService;
