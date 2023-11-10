// Code from CI walkthrough Moments; customized
import React from "react";
import NoResults from "../assets/no-results.png";
import Asset from "./Asset";
import { Button } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
      <div>
        <Button variant="outline-light" className={btnStyles.ButtonLight} block>
          <Link to="/" className="text-dark">
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
