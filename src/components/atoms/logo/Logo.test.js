import "@testing-library/jest-dom/extend-expect";
import { fireEvent,render, screen } from "@testing-library/react";
import logo from "../../../common/assets/logo-home.png";
import Logo from "./Logo";


const mockedUsedNavigate = jest.fn();
// const mockHandler = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<Logo />", () => {
  test("render Logo", () => {
    render(<Logo />);
    const image = screen.getByAltText("logo");
    expect(image.src).toContain(logo);
  });

  test("click on the logo and go to home", () => {
    render(<Logo />);
    const image = screen.getByAltText("logo");
    fireEvent.click(image);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
