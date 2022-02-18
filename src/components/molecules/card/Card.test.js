import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import like from "../../../common/assets/likeon.png";
import Card from "./Card";

const mockState = jest.fn();
const mockSelector = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockState,
  useSelector: () => mockSelector
}));

describe("<Card />", () => {
  const track = {
    name: "TNT",
    nameLarge:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: like,
    artist: "ACDC",
    id: "idtest777",
    typeDelete: "delete",
    TypeLike: "like",
  };
  test("render Card and like button", () => {
    render(
      <Card
        name={track.name}
        image={track.image}
        artist={track.artist}
        id={track.id}
        type={track.TypeLike}
      />
    );
    const card = screen.getByAltText("like");
    expect(card).toBeInTheDocument();
  });
  test("render Card and delete button", () => {
    render(
      <Card
        name={track.name}
        image={track.image}
        artist={track.artist}
        id={track.id}
        type={track.typeDelete}
      />
    );
    const card = screen.getByAltText("delete");
    expect(card).toBeInTheDocument();
  });
  test("String trimming test", () => {
    render(
      <Card
        name={track.nameLarge}
        image={track.image}
        artist={track.artist}
        id={track.id}
        type={track.typeDelete}
      />
    );
    const card = screen.getByAltText("delete");
    expect(card).toBeInTheDocument();
    // expect(cutString(track.nameLarge)).toHaveBeenCalledTimes(1);
  });
});
