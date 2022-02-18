import dislike from "../../../common/assets/likeoff.png";
import "./like-button.scss"
import like from "../../../common/assets/likeon.png";
import { useDispatch } from "react-redux";
import FavoritesService from "../../../services/favoritesService";
import { useState } from "react";
const favoritesService = new FavoritesService();

const LikeButton = ({ id, initState = false }) => {
  const [cliked, setCliked] = useState(initState);
  const dispatch = useDispatch();
  const handleLike = (id) => {
    setCliked(true);
    dispatch(favoritesService.addFavoriteTrack(id));
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
