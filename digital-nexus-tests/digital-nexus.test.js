import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index page", () => {
  it("should render", () => {
    render(<Index />);
    const test = screen.getByRole("main");
    expect(test).toBeInTheDocument();
  });
});

test("Example test", () => {
  const sum = 1 + 2;
  expect(sum).toBe(3);
});
