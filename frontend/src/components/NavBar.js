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

const NavBar = () => {
	const currentUser = useCurrentUser();
	const setCurrentUser = useSetCurrentUser();

	const { expanded, setExpanded, ref } = useClickOutsideToggle();

	const handleSignOut = async () => {
		try {
			await axios.post("dj-rest-auth/logout/");
			setCurrentUser(null);
		} catch (err) {
			console.log(err);
		}
	};

	const addMovieIcon = (
		<NavLink
			className={`text-light px-3 ${styles.NavLink}`}
			activeClassName={styles.Active}
			to="/movies/create"
		>
			<i class="fa-solid fa-plus"></i> Add movie
		</NavLink>
	);

	const loggedInIcons = (
		<>
			<NavLink
				className={`text-light px-3 ${styles.NavLink}`}
				activeClassName={styles.Active}
				to="/wishlist"
			>
				<i class="fa-solid fa-heart"></i> Wishlist
			</NavLink>
			<NavLink
				className={`text-light px-3 ${styles.NavLink}`}
				to="/"
				onClick={handleSignOut}
			>
				<i className="fas fa-sign-out-alt"></i> Sign out
			</NavLink>
			<NavLink
				className={`text-light px-3 ${styles.NavLink}`}
				to={`/profiles/${currentUser?.profile_id}`}
			>
				<Avatar src={currentUser?.profile_image} text="Profile" height={30} />
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
				<i class="fas fa-sign-in-alt"></i> Sign in
			</NavLink>
			<NavLink
				className={`text-light px-3 py-2 ${styles.NavLink}`}
				activeClassName={styles.Active}
				to="/signup"
			>
				<i class="fa-solid fa-user-plus"></i> Sign up
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
						<img src={logo} alt="logo" height="45" />
					</Navbar.Brand>
				</NavLink>

				{currentUser && addMovieIcon}

				<Navbar.Toggle
					ref={ref}
					onClick={() => setExpanded(!expanded)}
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse className="justify-content-end">
					<Nav className="ml-auto text-left">
						<NavLink
							exact
							className={`text-light px-3 ${styles.NavLink}`}
							activeClassName={styles.Active}
							to="/"
						>
							<i class="fa-solid fa-house"></i> Home
						</NavLink>

						{currentUser ? loggedInIcons : loggedOutIcons}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
