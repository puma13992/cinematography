import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
  Image,
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import styles from "../../styles/Forms.module.css";
import useAlert from "../../hooks/useAlert";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();
  const { setAlert } = useAlert();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image } = data;
          setProfileData({ name, content, image });
        } catch (err) {
          // console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
      setAlert("Profile edited successfully!", "success");
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
            <h1>Edit your profile</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  value={content}
                  onChange={handleChange}
                  name="content"
                />
              </Form.Group>
              {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group>
                {image && (
                  <figure>
                    <Image src={image} fluid />
                  </figure>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <div className="text-center">
                  <Form.Label
                    className={`${btnStyles.ButtonLight} btn `}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
                <Form.File
                  className={styles.Uploadbutton}
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }
                  }}
                />
              </Form.Group>
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

export default ProfileEditForm;
