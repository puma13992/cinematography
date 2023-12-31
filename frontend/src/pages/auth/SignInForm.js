import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Forms.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import useAlert from "../../hooks/useAlert";
import { setTokenTimestamp } from "../../utils/utils";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});
  const { setAlert } = useAlert();

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push(`/movies`);
      setAlert(`${username}, you have succesfully logged in!`, "success");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Row>
        <Col className="my-auto py-2 p-md-2" md={12}>
          <Container>
            <h1>Sign in</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  className={styles.Input}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={styles.Input}
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Row>
                <Col lg={12} md={12}>
                  {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                    </Alert>
                  ))}
                </Col>
                <Col className="my-auto py-2" md={12}>
                  <Button
                    variant="dark"
                    type="submit"
                    className={btnStyles.ButtonDark}
                    block
                  >
                    Sign in
                  </Button>
                </Col>
              </Row>
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
              <Link to="/signup" className="text-dark">
                Don&apos;t have an account? <span>Sign up now!</span>
              </Link>
            </Button>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default SignInForm;
