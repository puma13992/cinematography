// Code from https://github.com/artcuddy/project5-foodsnap-frontend; customized

import { Alert } from "react-bootstrap";
import useAlert from "../hooks/useAlert";
import styles from "../styles/AlertPopup.module.css";
import { useState } from "react";

const AlertPopup = () => {
	const { text, type } = useAlert();
	const [show, setShow] = useState(true);

	if (text && type && show) {
		return (
			<Alert
				variant={type}
				className={`position-absolute ${styles.Alert}`}
				onClose={() => setShow(false)}
				dismissible
			>
				{text}
			</Alert>
		);
	} else {
		return <></>;
	}
};

export default AlertPopup;
