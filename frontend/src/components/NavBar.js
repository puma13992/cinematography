import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.webp";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md" fixed="top">
			<Container>
				<NavLink to="/">
					<Navbar.Brand href="#home">
						<img src={logo} alt="logo" height="45" />
					</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<NavLink
							exact
							className={`text-light px-3 py-2 ${styles.NavLink}`}
							activeClassName={styles.Active}
							to="/"
						>
							<i class="fa-solid fa-house"></i> Home
						</NavLink>
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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
