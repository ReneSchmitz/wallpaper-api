import React from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview author="René" />, div);
});

test("renders author", () => {
  render(<ImagePreview author="René" />);
  const author = screen.getByText(/Author: René/i);
  expect(author).toBeInTheDocument();
});
