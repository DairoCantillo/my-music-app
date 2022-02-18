import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  test("renders content", () => {
    render(<Footer/>);
    expect(screen.getByText("DECA MUSIC")).toBeInTheDocument();
  });
});
