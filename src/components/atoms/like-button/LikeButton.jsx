import "./like-button.scss";
import dislike from "../../../common/assets/likeoff.png";
import like from "../../../common/assets/likeon.png";
import { useDispatch } from "react-redux";
import FavoritesService from "../../../services/favoritesService";
const favoritesService = new FavoritesService();

const LikeButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleLike = (id) => {
    dispatch(favoritesService.addFavoriteTrack(id));
  };
  return (
    <>
      <img className="like-button" onClick={() => handleLike(id)} src={dislike} alt="dislike" />
    </>
  );
};

export default LikeButton;
