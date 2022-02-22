import "./cards-list.scss";
import Card from "../../molecules/card/Card";
import Loading from "../../atoms/loading/Loading";

const CardsList = ({ isLoading, data, type }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card-list">
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
        </div>
      )}
    </>
  );
};

export default CardsList;
