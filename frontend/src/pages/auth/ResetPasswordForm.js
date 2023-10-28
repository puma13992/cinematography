import React, { useState } from "react";

import styles from "../../styles/AuthForms.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";

import axios from "axios";

const ResetPasswordForm = () => {
	const [resetPasswordData, setResetPasswordData] = useState({
		email: "",
	});
	const { email } = resetPasswordData;

	const [errors, setErrors] = useState({});
	const [isEmailSent, setIsEmailSent] = useState(false); // State for "Email sent" text

	const handleChange = (event) => {
		setResetPasswordData({
			...resetPasswordData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/dj-rest-auth/password/reset/", resetPasswordData);
			setIsEmailSent(true); // Hide form and show custom text if post = true
		} catch (err) {
			setErrors(err.response?.data);
		}
	};

	return (
		<div className={appStyles.App}>
			<Row className={styles.Header}>
				<Col className="my-auto py-2 p-md-2" md={12}>
					<Container>
						<h1>Reset password</h1>
						{isEmailSent ? ( // If isEmailSent is true, display custom text
							<p>
								An e-mail has been sent to the e-mail address if the e-mail
								address is already registered.
							</p>
						) : (
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="email">
									<Form.Control
										type="email"
										placeholder="Email"
										name="email"
										value={email}
										onChange={handleChange}
									/>
									{errors.email && (
										<Alert variant="warning" className="mt-3">
											{errors.email}
										</Alert>
									)}
								</Form.Group>

								<Button
									variant="dark"
									type="submit"
									className={btnStyles.ButtonDark}
									block
								>
									Submit
								</Button>
							</Form>
						)}
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default ResetPasswordForm;
