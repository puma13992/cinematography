// Code from https://github.com/artcuddy/project5-foodsnap-frontend; slightly customized
import React, { createContext, useState } from "react";

const ALERT_TIME = 5000;
const initialState = {
  text: "",
  type: "",
};

const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = (text, type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText("");
      setType("");
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
