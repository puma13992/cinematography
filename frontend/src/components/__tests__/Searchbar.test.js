import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "../Searchbar";

test("Searchbar updates query on input change", () => {
	const mockSetQuery = jest.fn();
	const placeholderText = "Search Movies";

	render(
		<Searchbar
			query=""
			setQuery={mockSetQuery}
			placeholderText={placeholderText}
		/>
	);

	// Find the search input element
	const searchInput = screen.getByPlaceholderText(placeholderText);

	// Simulate typing into the search input
	fireEvent.change(searchInput, { target: { value: "Avatar" } });

	// Check if the setQuery function was called with the expected value
	expect(mockSetQuery).toHaveBeenCalledWith("Avatar");
});

test("Searchbar prevents form submission", () => {
	const mockSetQuery = jest.fn();
	const placeholderText = "Search Movies";

	render(
		<Searchbar
			query=""
			setQuery={mockSetQuery}
			placeholderText={placeholderText}
		/>
	);

	// Find the search input element
	const searchInput = screen.getByPlaceholderText(placeholderText);

	// Simulate submitting the form
	fireEvent.submit(searchInput);

	// Check if the setQuery function was not called
	expect(mockSetQuery).not.toHaveBeenCalled();
});
