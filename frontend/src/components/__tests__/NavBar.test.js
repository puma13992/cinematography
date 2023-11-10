import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar Home Link", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  // screen.debug();
  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();
});

test("renders link to the wishlist page for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const wishlist = await screen.findByText("Wishlist");
  expect(wishlist).toBeInTheDocument();
});
