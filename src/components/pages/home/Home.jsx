import { useEffect, useState } from "react";
import TracksService from "../../../services/tracksService";
import UserService from "../../../services/userService";
import { useDispatch } from "react-redux";
import Loading from "../../atoms/loading/Loading";
import "./home.scss";
import CardsList from "../../organisms/cardsList/CardsList";
import Search from "../../molecules/search/Search";

const tracksService = new TracksService();
const userService = new UserService();

const Home = ({ tracks }) => {
  const dispatch = useDispatch();
  const [Value, setValue] = useState("");
  useEffect(() => {
    dispatch(tracksService.getTracksTop50());
    dispatch(userService.getUserInfo());
  }, [dispatch]);

  const HomeComponent = () => (
    <section data-testid="home" className="home">
      <Search defaultValue={Value} setValue={setValue} />
      <CardsList
        isLoading={tracks.isLoading}
        data={tracks.tracks}
        type={"like"}
      />
    </section>
  );
  return <div>{tracks.tracks.length !== 0 ? <HomeComponent /> : <Loading />}</div>;
};

export default Home;
