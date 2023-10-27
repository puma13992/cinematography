// Code from https://github.com/artcuddy/project5-foodsnap-frontend; slightly customized

import { Alert, Container } from "react-bootstrap";
import useAlert from "../hooks/useAlert";
import styles from "../styles/AlertPopup.module.css";

const AlertPopup = () => {
	const { text, type } = useAlert();

	if (text && type) {
		return (
			<Container>
				<Alert variant={type} className={`position-absolute ${styles.Alert}`}>
					{text}
				</Alert>
			</Container>
		);
	} else {
		return <></>;
	}
};

export default AlertPopup;
