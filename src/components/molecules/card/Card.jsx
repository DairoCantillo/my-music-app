import "./card.scss";
import LikeButton from '../../atoms/like-button/LikeButton';
import DeleteButton from '../../atoms/delete-button/DeleteButton';


const Card = ({ name, image, artist, id, type }) => {
  return (
    <>
      <div className="card-track" key={id}>
        <img className="card-track__image" src={image} alt={name} />
        <article className="card-track__info">
          <div>
            <h3>{name}</h3>
            <p>{artist}</p>
          </div>
          {type === "like" ? <LikeButton id={id}/> : <DeleteButton id={id}/>}
        </article>
      </div>
    </>
  );
};

export default Card;
