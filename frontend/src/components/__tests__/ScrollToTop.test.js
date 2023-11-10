import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ScrollToTop from "../ScrollToTop";

test("ScrollToTop button scrolls to the top when clicked", () => {
  render(<ScrollToTop />);

  // Find the ScrollToTop button
  const scrollToTopButton = screen.getByRole("button", {
    name: "Scroll to top",
  });

  // Mock the scrollTo method
  const originalScrollTo = window.scrollTo;
  window.scrollTo = jest.fn();

  // Simulate a click on the button
  fireEvent.click(scrollToTopButton);

  // Assert that the scrollTo method was called with the expected arguments
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

  // Restore the original scrollTo method
  window.scrollTo = originalScrollTo;
});
