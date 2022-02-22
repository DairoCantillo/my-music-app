import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import like from "../../../common/assets/likeon.png";
import dislike from "../../../common/assets/likeoff.png";
import LikeButton from "./LikeButton";
const mockedUsedNavigate = jest.fn();
const mockState = jest.fn();
const mockSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockState,
  useSelector: () => mockSelector
}));


describe("<LikeButton />", () => {
  const testID = "idtest777";
  test("render LikeButton, likeoff", () => {
    render(<LikeButton id={testID}/>);
    const button = screen.getByAltText("like");
    expect(button.src).toContain(dislike);
  });
  test("render LikeButton, likeon", () => {
    render(<LikeButton id={testID} initState={true}/>);
    const button = screen.getByAltText("dislike");
    expect(button.src).toContain(like);
  });

  test("like",  () => {
    render(<LikeButton />);
    const button = screen.getByAltText("like");
    fireEvent.click(button);
    expect(mockState).toHaveBeenCalled();
  });
});
