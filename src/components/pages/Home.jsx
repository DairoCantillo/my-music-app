import { useEffect } from "react";
import TracksService from "../../services/tracksService";
import AuthenticationService from "../../services/auth";
import UserService from "../../services/userService";
import { useDispatch } from "react-redux";
import FavoritesService from '../../services/favoritesService';

const authenticationService = new AuthenticationService();
const favoritesService = new FavoritesService();
const tracksService = new TracksService();
const userService = new UserService();

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authenticationService.AuthenticationSpotify();
    dispatch(tracksService.getTracksTop50());
    dispatch(userService.getUserInfo());
    dispatch(favoritesService.getFavoritesTracks());
    // tracksService.getTracksTop50();
    // userService.getFavoritesTracks();
    
    // userService.deleteFavoriteTrack();
    // userService.addFavoriteTrack("5Z9KJZvQzH6PFmb8SNkxuk");
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
