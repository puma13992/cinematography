import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

test("renders Avatar component with provided src and text", () => {
  const testSrc = "test-avatar.jpg";
  const testText = "John Doe";

  render(<Avatar src={testSrc} text={testText} />);

  // Check if the image with the provided src is rendered
  const avatarImage = screen.getByAltText("avatar");
  expect(avatarImage).toBeInTheDocument();
  expect(avatarImage).toHaveAttribute("src", testSrc);

  // Check if the text is rendered
  const avatarText = screen.getByText(testText);
  expect(avatarText).toBeInTheDocument();
});

test("renders Avatar component with default height if not provided", () => {
  const testSrc = "test-avatar.jpg";
  const testText = "John Doe";

  render(<Avatar src={testSrc} text={testText} />);

  // Check if the image has the default height
  const avatarImage = screen.getByAltText("avatar");
  expect(avatarImage).toBeInTheDocument();
  expect(avatarImage).toHaveAttribute("height", "45");

  // Check if the text is rendered
  const avatarText = screen.getByText(testText);
  expect(avatarText).toBeInTheDocument();
});
