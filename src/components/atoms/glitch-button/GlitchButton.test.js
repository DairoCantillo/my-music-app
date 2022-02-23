import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import GlitchButton from "./GlitchButton.jsx";

const mockOnclick = jest.fn();

describe("<GlitchButton />", () => {
  test("should render GlitchButton", () => {
    render(<GlitchButton text="LOGIN" onclick={mockOnclick} />);
    const button = screen.getByText("LOGIN");
    expect(button).toBeInTheDocument();
  });
  test("should execute the function it receives", () => {
    render(<GlitchButton text="LOGIN" onclick={mockOnclick} />)
    const button = screen.getByText("LOGIN");
    fireEvent.click(button);
    expect(mockOnclick).toHaveBeenCalled();
  });
});
