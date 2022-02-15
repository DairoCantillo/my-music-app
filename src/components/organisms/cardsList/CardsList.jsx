import "./cards-list.scss";
import Card from "../../molecules/card/Card";

const CardsList = ({ data, type }) => {
  return (
    <>
      {data.map((track) => (
        <Card
          type={type}
          image={track.track.album.images[1].url}
          name={track.track.name}
          artist={track.track.artists[0].name}
          id={track.track.id}
          key={track.track.id}
        />
      ))}
    </>
  );
};

export default CardsList;
