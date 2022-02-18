import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CardsList from "./CardsList";

const mockState = jest.fn();
const mockSelector = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockState,
  useSelector: () => mockSelector
}));

describe("<CardsList />", () => {
  const data = [
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
        name: 'Pepas',
      },
    },
  ];

  test("render Card and like button", () => {
    render(<CardsList data={data} type={"like"} />);
    const card = screen.getByAltText("like");
    expect(card).toBeInTheDocument();
  });
});
