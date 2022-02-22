import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";



const mockState = jest.fn();
const mockSetValue = jest.fn();


jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockState,
}));
describe("<Search />", () => {
  test("should render content", () => {
    render(<Search setValue={mockSetValue}/>);
    const button = screen.getByText("SEARCH");
    expect(button).toBeInTheDocument();
  });
  
  test("should change the text to that of the entered value", () => {
    render(<Search setValue={mockSetValue}/>);
    const input = screen.getByLabelText("input-search");
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "acdc" } });
    expect(input.value).toBe("acdc");
  });

  test("should allow to delete the content of the input", () => {
    render(<Search setValue={mockSetValue}/>);
    const input = screen.getByLabelText("input-search");
    fireEvent.change(input, { target: { value: "acdc" } });
    expect(input.value).toBe("acdc");
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
  });
});
