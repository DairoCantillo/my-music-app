import FavoritesService from "../../services/favoritesService";
import "../../common/styles/_cards-list.scss";
import dislike from "../../common/assets/likeoff.png";
import like from "../../common/assets/likeon.png";
const favoritesService = new FavoritesService();

const CardsList = ({ data, type }) => {
  const handleLike = (id) => {
    favoritesService.addFavoriteTrack(id);
  };
  const handleDisike = (id) => {
    favoritesService.deleteFavoriteTrack(id);
  };
  const likeImage = (id) => (
    <img
      onClick={() => handleLike(id)}
      src={dislike}
      alt="dislike"
    />
  );
  const dislikeImage = (id) => (
    <img
      onClick={() => handleDisike(id)}
      src={like}
      alt="dislike"
    />
  );
  return (
    <>
      {data.map((track) => (
        <div className="card-track" key={track.track.id}>
          <img
            className="card-track__image"
            src={track.track.album.images[1].url}
            alt="1"
          />
          <article className="card-track__info">
            <div>
              <h3>{track.track.name}</h3>
              <p>{track.track.artists[0].name}</p>
            </div>
            {type==="like"?likeImage(track.track.id):dislikeImage(track.track.id)}
          </article>
        </div>
      ))}
    </>
  );
};

export default CardsList;
