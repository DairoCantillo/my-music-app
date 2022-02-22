import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import logo from "../../../common/assets/logo.png";
import Login from "./Login.jsx";
// import AuthenticationService from "../../../services/auth";
// const authenticationService = new AuthenticationService();

describe("<Login />", () => {
  test("should show the title and the login text", () => {
    render(<Login />);
    const title = screen.getByText("DECA MUSIC");
    const button = screen.getByText("LOGIN");
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should redirect when clicking on the login button", () => {
    render(<Login />);
    const image = screen.getByAltText("logo");
    expect(image.src).toContain(logo);
  });

});
