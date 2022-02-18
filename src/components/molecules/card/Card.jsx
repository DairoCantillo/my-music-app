import "./card.scss";
import LikeButton from '../../atoms/like-button/LikeButton';
import DeleteButton from '../../atoms/delete-button/DeleteButton';
import CardImage from "../../atoms/card-image/CardImage";
import { cutString } from '../../../services/helpers';

const Card = ({ name, image, artist, id, type }) => {

  return (
    <>
      <div  className="card-track" key={id}>
        <CardImage name={name} image={image}/>
        <article className="card-track__info">
          <div>
            <h3>{cutString(name)}</h3>
            <p>{artist}</p>
          </div>
          {type === "like" ? <LikeButton id={id}/> : <DeleteButton id={id}/>}
        </article>
      </div>
    </>
  );
};

export default Card;
