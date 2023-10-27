import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";

import axios from "axios";

const SignUpForm = () => {
	const [signUpData, setSignUpData] = useState({
		email: "",
		username: "",
		password1: "",
		password2: "",
	});
	const { email, username, password1, password2 } = signUpData;

	const [errors, setErrors] = useState({});

	const history = useHistory();

	const handleChange = (event) => {
		setSignUpData({
			...signUpData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/dj-rest-auth/registration/", signUpData);
			history.push("/signin");
		} catch (err) {
			setErrors(err.response?.data);
		}
	};

	return (
		<div className={appStyles.App}>
			<Row className={styles.Header}>
				<Col className="my-auto py-2 p-md-2" md={12}>
					<Container>
						<h1>Sign up</h1>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="email">
								<Form.Control
									type="email"
									placeholder="Email"
									name="email"
									value={email}
									onChange={handleChange}
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							{errors.email?.map((message, idx) => (
								<Alert variant="warning" key={idx}>
									{message}
								</Alert>
							))}

							<Form.Group controlId="username">
								<Form.Label className="d-none">username</Form.Label>
								<Form.Control
									type="text"
									placeholder="Username"
									name="username"
									value={username}
									onChange={handleChange}
								/>
							</Form.Group>
							{errors.username?.map((message, idx) => (
								<Alert variant="warning" key={idx}>
									{message}
								</Alert>
							))}

							<Form.Group controlId="password1">
								<Form.Label className="d-none">Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									name="password1"
									value={password1}
									onChange={handleChange}
								/>
							</Form.Group>
							{errors.password1?.map((message, idx) => (
								<Alert key={idx} variant="warning">
									{message}
								</Alert>
							))}

							<Form.Group controlId="password2">
								<Form.Label className="d-none">Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Confirm password"
									name="password2"
									value={password2}
									onChange={handleChange}
								/>
							</Form.Group>
							{errors.password2?.map((message, idx) => (
								<Alert key={idx} variant="warning">
									{message}
								</Alert>
							))}

							<Button
								variant="dark"
								type="submit"
								className={btnStyles.ButtonDark}
								block
							>
								Submit
							</Button>
							{errors.non_field_errors?.map((message, idx) => (
								<Alert key={idx} variant="warning" className="mt-3">
									{message}
								</Alert>
							))}
						</Form>
					</Container>
				</Col>
				<Col className="my-auto py-2 p-md-2" md={12}>
					<Container className="mt-3">
						<Button
							variant="outline-light"
							className={btnStyles.ButtonLight}
							block
						>
							<Link to="/signin" className="text-dark">
								Already have an account? Sign in!
							</Link>
						</Button>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default SignUpForm;