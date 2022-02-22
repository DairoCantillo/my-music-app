import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import goToHome from "../../../common/assets/gotohome.png";
import Page404 from "./Page404.jsx";

const mockState = jest.fn();
const mockSelector = jest.fn();
const mockedUsedNavigate = jest.fn();


jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockState,
  useSelector: () => mockSelector,
}));
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));
describe("<Page404 />", () => {
  test("should show the title and the text", () => {
    render(<Page404 />);
    const title = screen.getByText("404");
    expect(title).toBeInTheDocument();
  });
  test("should redirect when clicking on the login button", () => {
    render(<Page404 />);
    const image = screen.getByAltText("goToHome");
    expect(image.src).toContain(goToHome);
  });
});
