import "./card-image.scss"
const CardImage = ({ image,name }) => {
  return <img className="card-track__image" src={image} alt={name} />;
};

export default CardImage;
