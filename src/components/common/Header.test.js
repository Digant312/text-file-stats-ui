import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it.only("should render the app bar", () => {
    render(<Header />);
    const title = screen.getByText(/Text Statistics/i);
    expect(title).toBeInTheDocument();
  });
});
