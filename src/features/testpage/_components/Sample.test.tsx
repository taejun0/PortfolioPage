import { render, screen } from "@testing-library/react";

describe("Sample Component", () => {
  it("renders correctly", () => {
    render(<div>Hello Test</div>);
    expect(screen.getByText(/hello test/i)).toBeInTheDocument();
  });
});
