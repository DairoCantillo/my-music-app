import { useEffect } from "react";
import TracksService from "../../../services/tracksService";
import UserService from "../../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../atoms/loading/Loading";
import "./home.scss";
import CardsList from "../../organisms/cardsList/CardsList";

const tracksService = new TracksService();
const userService = new UserService();

const Home = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(tracksService.getTracksTop50());
    dispatch(userService.getUserInfo());
  }, [dispatch]);

  const HomeComponent = () => (
    <section className="home">
      <CardsList data={tracks.tracks} type={"like"} />
    </section>
  );
  return <div>{tracks.isLoading ? <Loading /> : <HomeComponent />}</div>;
};

export default Home;
