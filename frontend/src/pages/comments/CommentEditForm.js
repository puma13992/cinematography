import React, { useState } from "react";

import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

function CommentEditForm(props) {
	const { id, content, setShowEditForm, setComments } = props;

	const [formContent, setFormContent] = useState(content);

	const { setAlert } = useAlert();

	const handleChange = (event) => {
		setFormContent(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axiosRes.put(`/comments/${id}/`, {
				content: formContent.trim(),
			});
			setComments((prevComments) => ({
				...prevComments,
				results: prevComments.results.map((comment) => {
					return comment.id === id
						? {
								...comment,
								content: formContent.trim(),
								updated_at: "now",
						  }
						: comment;
				}),
			}));
			setShowEditForm(false);
			setAlert("Comment edited successfully!", "success");
		} catch (err) {
			setAlert(err.message, "error");
		}
	};

	return (
		<div>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="pr-1">
							<Form.Control
								as="textarea"
								value={formContent}
								onChange={handleChange}
								rows={2}
							/>
						</Form.Group>
						<Row>
							<Col className="my-auto py-2" lg={6} md={12}>
								<Button
									variant="dark"
									type="submit"
									className={btnStyles.ButtonDark}
									disabled={!content.trim()}
									block
								>
									Save
								</Button>
							</Col>
							<Col className="my-auto py-2" lg={6} md={12}>
								<Button
									variant="outline-light"
									className={`${btnStyles.ButtonLight} text-dark`}
									onClick={() => setShowEditForm(false)}
									block
								>
									Cancel
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default CommentEditForm;
