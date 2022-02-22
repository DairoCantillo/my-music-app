import { useEffect } from "react";
import TracksService from "../../../services/tracksService";
import UserService from "../../../services/userService";
import { useDispatch } from "react-redux";
import "./favorites.scss";
import FavoritesService from "../../../services/favoritesService";
import CardsList from "../../organisms/cardsList/CardsList";
import Loading from '../../atoms/loading/Loading';
const favoritesService = new FavoritesService();
const tracksService = new TracksService();
const userService = new UserService();

const Favorites = ({favorites}) => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(tracksService.getTracksTop50());
    dispatch(userService.getUserInfo());
    dispatch(favoritesService.getFavoritesTracks());
  }, [dispatch]);

  const FavoritesComponent = () => (
    <section className="favorites">
      <CardsList data={favorites.tracks} type={"dislike"} />
    </section>
  );
  return (
    <div data-testid="favorites">{favorites.isLoading ? <Loading /> : <FavoritesComponent />}</div>
  );
};

export default Favorites;
