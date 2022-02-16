import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("<Title />", () => {
  test("renders content", () => {
    const titleTest = "Deca Music";

    render(<Title title={titleTest} />);
    expect(screen.getByText("Deca Music")).toBeInTheDocument();
  });
});
