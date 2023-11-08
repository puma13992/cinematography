import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";
import { BrowserRouter as Router } from "react-router-dom";

test("renders NotFound component with correct message and link", () => {
	render(
		<Router>
			<NotFound />
		</Router>
	);

	// Check if the "Sorry, the page you're looking for doesn't exist" message is rendered
	const errorMessage = screen.getByText(
		"Sorry, the page you're looking for doesn't exist"
	);
	expect(errorMessage).toBeInTheDocument();

	// Check if the "Back to home" link is rendered with the correct destination
	const homeLink = screen.getByText("Back to home");
	expect(homeLink).toBeInTheDocument();
	expect(homeLink).toHaveAttribute("href", "/");
});
