import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

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

describe("<Home />", () => {
  test("render home is true", () => {
    const tracks = {
      isLoading: true,
      tracks:[]
    };
    render(<Home tracks={tracks} />);
    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
  test("render home is false", () => {
    const tracks = {
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
    render(<Home tracks={tracks} />);
    const page = screen.getByTestId("home");
    expect(page).toBeInTheDocument();
  });
});
