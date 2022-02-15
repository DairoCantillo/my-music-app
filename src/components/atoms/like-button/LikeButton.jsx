import "./like-button.scss";
import dislike from "../../../common/assets/likeoff.png";
import like from "../../../common/assets/likeon.png";
import { useDispatch } from "react-redux";
import FavoritesService from "../../../services/favoritesService";
import { useState } from "react";
const favoritesService = new FavoritesService();

const LikeButton = ({ id }) => {
  const [cliked, setCliked] = useState(false);
  const dispatch = useDispatch();
  const handleLike = (id) => {
    setCliked(true);
    dispatch(favoritesService.addFavoriteTrack(id));
  };
  return (
    <>
      {cliked ? (
        <img
          className="like-button"
          onClick={() => handleLike(id)}
          src={like}
          alt="dislike"
        />
      ) : (
        <img
          className="like-button"
          onClick={() => handleLike(id)}
          src={dislike}
          alt="dislike"
        />
      )}
    </>
  );
};

export default LikeButton;
