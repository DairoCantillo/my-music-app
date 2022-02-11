import { useEffect } from "react";
import TracksService from "../../services/tracksService";
import UserService from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import FavoritesService from "../../services/favoritesService";
import Loading from "../atoms/Loading";
import "../../common/styles/_home.scss";
import CardsList from "../organisms/CardsList";
const favoritesService = new FavoritesService();
const tracksService = new TracksService();
const userService = new UserService();

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.tracks);

  useEffect(() => {
    dispatch(tracksService.getTracksTop50());
    dispatch(userService.getUserInfo());
    dispatch(favoritesService.getFavoritesTracks());
    // userService.deleteFavoriteTrack();
  }, []);


  const FavoritesComponent = () => (
    <section className="home">
      <CardsList data={favorites} type={"dislike"}/>
    </section>
  );
  return <div>{favorites.isLoading? <Loading /> : <FavoritesComponent />}</div>;
};

export default Favorites;
