import React, { useRef, useState } from "react";

import {
	Form,
	Button,
	Col,
	Row,
	Container,
	Image,
	Alert,
} from "react-bootstrap";

import Upload from "../../assets/upload.png";

import styles from "../../styles/Movie.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

function MovieCreateForm() {
	const [errors, setErrors] = useState({});

	// Movie data
	const [movieData, setMovieData] = useState({
		title: "",
		release: "",
		director: "",
		content: "",
		image: "",
		category: "",
	});

	const { title, release, director, content, image, category } = movieData;

	const imageInput = useRef(null);
	const history = useHistory();
	const { setAlert } = useAlert();

	const handleChange = (event) => {
		setMovieData({
			...movieData,
			[event.target.name]: event.target.value,
		});
	};

	const handleChangeImage = (event) => {
		if (event.target.files.length) {
			URL.revokeObjectURL(image);
			setMovieData({
				...movieData,
				image: URL.createObjectURL(event.target.files[0]),
			});
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();

		formData.append("title", title);
		formData.append("release", release);
		formData.append("director", director);
		formData.append("content", content);
		formData.append("image", imageInput.current.files[0]);
		formData.append("category", category);

		try {
			const { data } = await axiosReq.post("/movies/", formData);
			history.push(`/movies/${data.id}`);
			setAlert("Movie created successfully!", "success");
		} catch (err) {
			console.log(err);
			if (err.response?.status !== 401) {
				setErrors(err.response?.data);
			}
		}
	};

	return (
		<div>
			<Row className={styles.Header}>
				<Col className="my-auto py-2 p-md-2" md={12}>
					<Container>
						<h1>Add a movie</h1>
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
								<Form.Label>Release</Form.Label>
								<Form.Control
									type="text"
									name="release"
									value={release}
									onChange={handleChange}
								/>
							</Form.Group>
							{errors?.release?.map((message, idx) => (
								<Alert variant="warning" key={idx}>
									{message}
								</Alert>
							))}
							<Form.Group>
								<Form.Label>Director</Form.Label>
								<Form.Control
									type="text"
									name="director"
									value={director}
									onChange={handleChange}
								/>
							</Form.Group>
							{errors?.director?.map((message, idx) => (
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
							<Form.Group controlId="category">
								<Form.Label>Category</Form.Label>
								<Form.Control
									as="select"
									name="category"
									value={category}
									onChange={handleChange}
								>
									<option value="" disabled>
										Select a category
									</option>
									<option>Drama</option>
									<option>Documentation</option>
									<option>Biography</option>
									<option>Animation</option>
									<option>Experimental Cinema</option>
								</Form.Control>
							</Form.Group>
							{errors?.category?.map((message, idx) => (
								<Alert variant="warning" key={idx}>
									{message}
								</Alert>
							))}
							<Form.Group className="text-center">
								{image ? (
									<>
										<figure>
											<Image className={styles.Image} src={image} />
										</figure>
										<div>
											<Form.Label
												className={`${btnStyles.ButtonLight} btn`}
												htmlFor="image-upload"
											>
												Change the image
											</Form.Label>
										</div>
									</>
								) : (
									<Form.Label
										className={`${styles.Upload} ${styles.Cursor} d-flex justify-content-center`}
										htmlFor="image-upload"
									>
										<Asset
											src={Upload}
											message="Click or tap to upload an image"
										/>
									</Form.Label>
								)}

								<Form.File
									id="image-upload"
									accept="image/*"
									onChange={handleChangeImage}
									ref={imageInput}
									className={styles.Uploadbutton}
								/>
							</Form.Group>
							{errors?.image?.map((message, idx) => (
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
										Create
									</Button>
								</Col>
								<Col className="my-auto py-4" lg={6} md={12}>
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

export default MovieCreateForm;
