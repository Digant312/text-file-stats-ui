// write unit tests for InputFileUpload component with @testing-library/react
import React from "react";
import { render, screen } from "@testing-library/react";
import InputFileUpload from "./InputFileUpload";

describe("InputFileUpload", () => {
  test("renders the component", () => {
    render(<InputFileUpload label="input-file-upload" />);
    const input = screen.getByLabelText("input-file-upload");
    expect(input).toBeInTheDocument();
  });
});
