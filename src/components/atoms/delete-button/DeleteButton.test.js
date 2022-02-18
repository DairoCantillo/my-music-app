import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import deleteIcon from "../../../common/assets/delete.png";
import DeleteButton from "./DeleteButton";
import "react-redux";
const mockedUsedNavigate = jest.fn();
// const mockHandleLike = jest.fn();
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
describe("<DeleteButton />", () => {

  const testID = "idtest777";
  test("render LikeButton, likeoff", () => {
    render(<DeleteButton id={testID}/>);
    const button = screen.getByAltText("delete");
    expect(button.src).toContain(deleteIcon);
  });

  test("like", () => {
    render(<DeleteButton />);
    const button = screen.getByAltText("delete");
    fireEvent.click(button);
    expect(mockState).toHaveBeenCalled();
  });
});
