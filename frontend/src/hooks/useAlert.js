// Code from https://github.com/artcuddy/project5-foodsnap-frontend

import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

const useAlert = () => useContext(AlertContext);

export default useAlert;
