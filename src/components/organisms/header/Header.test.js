import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import {useState} from "react";

const mockedUsedNavigate = jest.fn();
const mockState = jest.fn();


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockState,
}));

describe("<Header />", () => {
    
  test("render Header", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  test("by clicking it open", () => {
    render(<Header />);

    const button = screen.getByAltText("menu");
    // const spy = jest
    //   .spyOn(button, "handleLogout")
    //   .mockImplementation(() => null);
    
    fireEvent.click(button);
    //falta validar el SetState
    // expect(mockSetState).toHaveBeenCalled();
  });

  test("that when clicking redirects to home", () => {
    render(<Header />);
    const li = screen.getByText("HOME");
    fireEvent.click(li);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  test("that when clicking redirects to favorites", () => {
    render(<Header />);
    const li = screen.getByText("FAVORITES");
    fireEvent.click(li);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  test("that when clicking redirects to login", () => {
    render(<Header />);
    const li = screen.getByAltText("logout");
    fireEvent.click(li);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
