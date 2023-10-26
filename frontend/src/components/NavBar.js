import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.webp";

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md" fixed="top">
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="logo" height="45" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<Nav.Link>
							<i class="fa-solid fa-house"></i> Home
						</Nav.Link>
						<Nav.Link>
							<i class="fas fa-sign-in-alt"></i> Sign in
						</Nav.Link>
						<Nav.Link>
							<i class="fa-solid fa-user-plus"></i> Sign up
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
