import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("<Loading />", () => {
  test("renders content", () => {
    render(< Loading />);
    const loading = screen.getByTestId("loading")
    expect(loading).toBeInTheDocument();
  });
});
