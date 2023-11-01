import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../../styles/Forms.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";

import axios from "axios";

const ResetPasswordConfirmForm = () => {
	const { uid, token } = useParams(); // Get UIDb64 and token from the URL

	const [resetPasswordData, setResetPasswordData] = useState({
		new_password1: "",
		new_password2: "",
		uid: uid, // Use uid from URL
		token: token, // Use token from URL
	});

	const { new_password1, new_password2 } = resetPasswordData;

	const [errors, setErrors] = useState({});
	const [isPasswordChanged, setIsPasswordChanged] = useState(false);

	const handleChange = (event) => {
		setResetPasswordData({
			...resetPasswordData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post(
				"/dj-rest-auth/password/reset/confirm/",
				resetPasswordData
			);
			setIsPasswordChanged(true);
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
						{isPasswordChanged ? (
							<p>Password has been successfully changed.</p>
						) : (
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="new_password1">
									<Form.Control
										type="password"
										placeholder="New Password"
										name="new_password1"
										value={new_password1}
										onChange={handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="new_password2">
									<Form.Control
										type="password"
										placeholder="Confirm New Password"
										name="new_password2"
										value={new_password2}
										onChange={handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="uid">
									<Form.Control
										type="hidden"
										placeholder="UID"
										name="uid"
										value={uid}
										readOnly
									/>
								</Form.Group>
								<Form.Group controlId="token">
									<Form.Control
										type="hidden"
										placeholder="Token"
										name="token"
										value={token}
										readOnly
									/>
								</Form.Group>

								{errors.new_password2 && (
									<Alert variant="warning" className="mt-3">
										{errors.new_password2}
									</Alert>
								)}
								<Button
									variant="dark"
									type="submit"
									className={btnStyles.ButtonDark}
									block
								>
									Change Password
								</Button>
							</Form>
						)}
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default ResetPasswordConfirmForm;
