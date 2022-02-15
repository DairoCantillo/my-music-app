import "./delete-button.scss";
import deleteIcon from "../../../common/assets/delete.png";
import { useDispatch } from "react-redux";
import FavoritesService from "../../../services/favoritesService";
const favoritesService = new FavoritesService();

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(favoritesService.deleteFavoriteTrack(id));
  };

  return (
    <>
      <img className="delete-button" onClick={() => handleDelete(id)} src={deleteIcon} alt="delete" />
    </>
  );
};

export default DeleteButton;
