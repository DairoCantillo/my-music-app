import { useEffect } from 'react';
import TracksService from '../../../services/tracksService';
import AuthenticationService from "../../../services/auth";
import UserService from '../../../services/userService';

const authenticationService = new AuthenticationService();
const tracksService = new TracksService();
const userService = new UserService();

const Home = () => {
  
  useEffect(() => {
    authenticationService.AuthenticationSpotify();
    tracksService.getTracksTop50();
    userService.getFavoritesTracks();
    userService.getUserInfo();
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
