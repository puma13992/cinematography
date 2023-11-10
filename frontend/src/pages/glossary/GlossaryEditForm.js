import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";
import { useRedirect } from "../../hooks/useRedirect";

function GlossaryEditForm() {
  useRedirect("loggedOut");

  const [errors, setErrors] = useState({});
  const [glossaryData, setGlossaryData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = glossaryData;
  const history = useHistory();
  const { id } = useParams();
  const { setAlert } = useAlert();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/glossary/${id}/`);
        const { title, content } = data;
        setGlossaryData({
          title,
          content,
        });
      } catch (err) {
        // console.log(err);
        history.push("/");
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setGlossaryData({
      ...glossaryData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);

    try {
      await axiosReq.put(`/glossary/${id}/`, formData);
      history.push(`/glossary/${id}`);
      setAlert("Glossary item edited successfully!", "success");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      <Row>
        <Col className="my-auto py-2 p-md-2" md={12}>
          <Container>
            <h1>Edit a glossary item</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="content"
                  value={content}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
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
}

export default GlossaryEditForm;
