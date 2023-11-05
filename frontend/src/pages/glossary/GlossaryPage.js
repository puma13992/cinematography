import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Glossary from "./Glossary";
import ScrollToTop from "../../components/ScrollToTop";

function GlossaryPage() {
	const { id } = useParams();
	const [glossary, setGlossary] = useState({ results: [] });

	useEffect(() => {
		const handleMount = async () => {
			try {
				const [{ data: glossary }] = await Promise.all([
					axiosReq.get(`/glossary/${id}`),
				]);
				setGlossary({ results: [glossary] });
			} catch (err) {
				console.log(err);
			}
		};

		handleMount();
	}, [id]);

	return (
		<Row>
			<Col className="py-2">
				<Glossary
					{...glossary.results[0]}
					setGlossary={setGlossary}
					glossaryPage
				/>
			</Col>
			<div>
				<ScrollToTop />
			</div>
		</Row>
	);
}

export default GlossaryPage;
