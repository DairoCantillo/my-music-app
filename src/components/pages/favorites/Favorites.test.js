import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Favorites from "./Favorites";

const mockedUsedNavigate = jest.fn();
const mockState = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockState,
  useDispatch: () => mockDispatch,
}));

describe("<Favorites />", () => {
  test("render Favorites is true", () => {
    const favorites = {
      isLoading: true,
    };
    render(<Favorites favorites={favorites} />);
    const page = screen.getByTestId("favorites");
    expect(page).toBeInTheDocument();
  });
  test("render Favorites is false", () => {
    const favorites = {
      isLoading: false,
      tracks: [
        {
          track: {
            album: {
              images: [
                {},
                {
                  url: "https://i.scdn.co/image/ab67616d00001e0272babf690675fe969470e8ee",
                },
              ],
            },
            artists: [
              {
                name: "Becky G",
              },
            ],
            id: "1ri9ZUkBJVFUdgwzCnfcYs",
            name: "Pepas",
          },
        },
      ],
    };
    render(<Favorites favorites={favorites} />);
    const page = screen.getByTestId("favorites");
    expect(page).toBeInTheDocument();
  });
});
