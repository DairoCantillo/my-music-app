import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import logo from "../../../common/assets/logo-home.png";
import CardImage from "./CardImage";


describe("<CardImage />", () => {
  const nameTest = "imageTestAlt";
  test("render CardImage", () => {
    render(<CardImage image={logo} name={nameTest} />);
    const image = screen.getByAltText(nameTest);
    expect(image.src).toContain(logo);
    expect(image).toBeInTheDocument(nameTest);
  });
});
