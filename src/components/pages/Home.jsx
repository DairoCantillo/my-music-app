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

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tracks = useSelector((state) => state.tracks);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(tracksService.getTracksTop50());
    dispatch(userService.getUserInfo());
  }, []);

  const HomeComponent = () => (
    <section className="home">
      <CardsList data={tracks.tracks} type={"like"}/>
    </section>
  );
  return <div>{tracks.isLoading? <Loading /> : <HomeComponent />}</div>;
};

export default Home;
