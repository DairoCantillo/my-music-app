import dislike from "../../../common/assets/likeoff.png";
import "./like-button.scss";
import like from "../../../common/assets/likeon.png";
import { useDispatch, useSelector } from "react-redux";
import FavoritesService from "../../../services/favoritesService";
import { useState } from "react";
import TracksService from "../../../services/tracksService";

const favoritesService = new FavoritesService();
const tracksService = new TracksService();

const LikeButton = ({ id, initState = false }) => {
  const tracks = useSelector((state) => state.tracks.tracks);
  const [cliked, setCliked] = useState(initState);
  const dispatch = useDispatch();
  const handleLike =  (id) => {
    setCliked(true);
    dispatch(favoritesService.addFavoriteTrack(id));
    dispatch(tracksService.deleteTrack(id, tracks));
  };
  return (
    <>
      {cliked ? (
        <img className="like-button" src={like} alt="dislike" />
      ) : (
        <img
          className="like-button"
          onClick={() => handleLike(id)}
          src={dislike}
          alt="like"
        />
      )}
    </>
  );
};

export default LikeButton;
