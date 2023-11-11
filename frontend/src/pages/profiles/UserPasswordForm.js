import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Row, Col, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import useAlert from "../../hooks/useAlert";

const UserPasswordForm = () => {
  const { setAlert } = useAlert();
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // redirect user if they are not the owner of this profile
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
      setAlert("Password changed successfully!", "success");
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
      setAlert(err.message, "error");
    }
  };

  return (
    <div>
      <Row>
        <Col className="my-auto py-2 p-md-2" md={12}>
          <Container>
            <h1>Change password</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>New password</Form.Label>
                <Form.Control
                  placeholder="New password"
                  type="password"
                  value={new_password1}
                  onChange={handleChange}
                  name="new_password1"
                />
              </Form.Group>
              {errors?.new_password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  placeholder="Confirm new password"
                  type="password"
                  value={new_password2}
                  onChange={handleChange}
                  name="new_password2"
                />
              </Form.Group>
              {errors?.new_password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Row>
                <Col className="my-auto py-4" lg={6} md={12}>
                  <Button
                    variant="dark"
                    type="submit"
                    className={btnStyles.ButtonDark}
                    block
                  >
                    Save
                  </Button>
                </Col>
                <Col className="my-auto py-4" px-4 lg={6} md={12}>
                  <Button
                    variant="outline-light"
                    className={`${btnStyles.ButtonLight} text-dark`}
                    onClick={() => history.goBack()}
                    block
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default UserPasswordForm;
