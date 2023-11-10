// Code from https://github.com/jkingportfolio/ci_pp5_tick_it_react/

import React from "react";
import styles from "../styles/Button.module.css";

// Handles the scroll to top when button is clicked
const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Displays the button to scroll to top
  return (
    <button
      className={styles.ScrollButton}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
