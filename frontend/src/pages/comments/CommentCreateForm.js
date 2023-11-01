import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

import btnStyles from "../../styles/Button.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

function CommentCreateForm(props) {
	const { movie, setMovie, setComments, profileImage, profile_id } = props;
	const [content, setContent] = useState("");
	const { setAlert } = useAlert();

	const handleChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await axiosRes.post("/comments/", {
				content,
				movie,
			});
			setComments((prevComments) => ({
				...prevComments,
				results: [data, ...prevComments.results],
			}));
			setMovie((prevMovie) => ({
				results: [
					{
						...prevMovie.results[0],
						comments_count: prevMovie.results[0].comments_count + 1,
					},
				],
			}));
			setContent("");
			setAlert("Comment created successfully!", "success");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<InputGroup>
								<Link to={`/profiles/${profile_id}`}>
									<Avatar src={profileImage} />
								</Link>
								<Form.Control
									placeholder="My comment..."
									as="textarea"
									value={content}
									onChange={handleChange}
									rows={2}
								/>
							</InputGroup>
						</Form.Group>
						<Row>
							<Col className="my-auto py-4" lg={12} md={12}>
								<Button
									variant="dark"
									className={btnStyles.ButtonDark}
									disabled={!content.trim()}
									type="submit"
									block
								>
									Post
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default CommentCreateForm;
