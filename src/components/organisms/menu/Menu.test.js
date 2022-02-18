import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import logo from "../../../common/assets/logo-home.png";
import Menu from "./Menu";

const mockedUsedNavigate = jest.fn();
const mockedSetIsActivate = jest.fn();
const mockLink = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  Link: () => mockLink,
}));
describe("<Menu />", () => {
  const user = {
    name: "Jhon Doe",
    avatar: logo,
  };
  test("render Menu", () => {
    render(
      <Menu user={user} isActivate={true} setIsActivate={mockedSetIsActivate} />
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });
  test("by clicking it closes", () => {
    render(
      <Menu user={user} isActivate={true} setIsActivate={mockedSetIsActivate} />
    );
    const button = screen.getByAltText("exit-button");
    fireEvent.click(button);
    expect(mockedSetIsActivate).toHaveBeenCalledTimes(1);
  });

  test("that when clicking redirects to home", () => {
    render(
      <Menu user={user} isActivate={true} setIsActivate={mockedSetIsActivate} />
    );
    const li = screen.getByText("HOME");
    fireEvent.click(li);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  test("that when clicking redirects to favorites", () => {
    render(
      <Menu user={user} isActivate={true} setIsActivate={mockedSetIsActivate} />
    );
    const li = screen.getByText("FAVORITES");
    fireEvent.click(li);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  test("that when clicking redirects to login", () => {
    render(
      <Menu user={user} isActivate={true} setIsActivate={mockedSetIsActivate} />
    );
    const li = screen.getByText("LOGOUT");
    fireEvent.click(li);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
