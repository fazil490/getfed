import Contact from "../components/Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact Page Test Cases", () => {
    test("Should render the components in the Contact page", () => {
      render(<Contact />);
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
    });

    test("Should render the components in the Contact page", () => {
      render(<Contact />);
      const button = screen.getByText("Submit");
      expect(button).toBeInTheDocument();
    });

    test("Should render the input components in the Contact page", () => {
      render(<Contact />);
      const inputBoxes = screen.getAllByRole("textbox");

      expect(inputBoxes.length).toBe(2);
    });
})
