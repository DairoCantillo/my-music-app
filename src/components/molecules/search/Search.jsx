import { useDispatch } from "react-redux";
import TracksService from "../../../services/tracksService";
import { useState,useEffect } from "react";
import "./search.scss";

const Search = ({ defaultValue = "",setValue }) => {
  const [value, setvalue] = useState(defaultValue);
  const dispatch = useDispatch();
  const tracksService = new TracksService();

  const handleChange = (event) => {
    setvalue(event.target.value);
    if (!event.target.value.length) {
      setValue("");
      dispatch(tracksService.getTracksTop50());
  }
  };
  const handleSubmit = (event) => {
    setValue(value);
    dispatch(tracksService.searchTrack(value));
    event.preventDefault();
  };
  useEffect(() => {


  }, [])
  



  return (
    <div className="wrap">
      <form className="search" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="search__input"
          placeholder="Busca una cancion!"
          value={value}
          type="search"
          name="input-search"
          aria-label="input-search"
          id="input-search"
          onChange={handleChange}
          // onChange={}
        />
        <button className="search__button" name="search" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Search;
