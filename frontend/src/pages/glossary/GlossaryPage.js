import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Glossary from "./Glossary";
import ScrollToTop from "../../components/ScrollToTop";
import Asset from "../../components/Asset";

function GlossaryPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const [glossary, setGlossary] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: glossary }] = await Promise.all([
          axiosReq.get(`/glossary/${id}`),
        ]);
        setGlossary({ results: [glossary] });
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      handleMount();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  return (
    <Row>
      <Col className="py-2">
        {hasLoaded ? (
          <Glossary
            {...glossary.results[0]}
            setGlossary={setGlossary}
            glossaryPage
          />
        ) : (
          <Asset spinner />
        )}
      </Col>
      <div>
        <ScrollToTop />
      </div>
    </Row>
  );
}

export default GlossaryPage;
