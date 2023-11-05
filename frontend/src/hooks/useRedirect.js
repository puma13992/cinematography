import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAlert from "./useAlert";

// Code from CI walkthrough Moments; slightly modified
export const useRedirect = (userAuthStatus) => {
	const history = useHistory();
	const { setAlert } = useAlert();

	useEffect(() => {
		const handleMount = async () => {
			try {
				await axios.post("/dj-rest-auth/token/refresh/");
				// if user is logged in, the code below will run
				if (userAuthStatus === "loggedIn") {
					history.push("/");
				}
			} catch (err) {
				// if user is not logged in, the code below will run
				if (userAuthStatus === "loggedOut") {
					setAlert(
						"This action is only allowed for logged in users.",
						"warning"
					);
					history.push("/");
				}
			}
		};

		handleMount();
	}, [history, userAuthStatus, setAlert]);
};
