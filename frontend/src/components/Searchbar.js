import React from "react";
import { Form } from "react-bootstrap";
import styles from "../styles/Searchbar.module.css";

function Searchbar({ query, setQuery, placeholderText }) {
	return (
		<Form
			className={styles.SearchBar}
			onSubmit={(event) => event.preventDefault()}
		>
			<div className={styles.SearchContainer}>
				<i className={`fas fa-search ${styles.SearchIcon}`} />
				<Form.Control
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					type="text"
					className="mr-sm-2"
					placeholder={placeholderText}
				/>
			</div>
		</Form>
	);
}

export default Searchbar;
