import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.webp";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import AlertPopup from "../components/AlertPopup";
import useAlert from "../hooks/useAlert";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { setAlert } = useAlert();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      setAlert("You have succesfully logged out !", "success");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  const addMovieIcon = (
    <NavLink
      className={`text-light px-3 ${styles.NavLink}`}
      activeClassName={styles.Active}
      to="/movies/create"
    >
      <i className="fa-solid fa-plus"></i>Add movie
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={`text-light px-3 py-2 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/wishlist"
      >
        <i className="fa-solid fa-heart"></i> Wishlist
      </NavLink>
      <NavLink
        className={`text-light px-3 py-2 ${styles.NavLink}`}
        to="/"
        onClick={handleSignOut}
      >
        <i className="fas fa-sign-out-alt"></i> Sign out
      </NavLink>
      <NavLink
        className={`text-light px-1 py-2 ${styles.NavLink}`}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={30}
        />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={`text-light px-3 py-2 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink
        className={`text-light px-3 py-2 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.NavbarBrand}>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <AlertPopup />
        </NavLink>
        {currentUser && addMovieIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto text-md-center text-sm-left">
            <NavLink
              exact
              className={`text-light px-3 py-2 ${styles.NavLink}`}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              exact
              className={`text-light px-3 py-2 ${styles.NavLink}`}
              activeClassName={styles.Active}
              to="/movies"
            >
              <i className="fa-solid fa-film"></i> Movies
            </NavLink>
            <NavLink
              exact
              className={`text-light px-3 py-2 ${styles.NavLink}`}
              activeClassName={styles.Active}
              to="/glossary"
            >
              <i className="fa-solid fa-book"></i> Glossary
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
