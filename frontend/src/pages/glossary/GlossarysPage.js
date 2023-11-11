import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Glossary from "./Glossary";
import Asset from "../../components/Asset";
import { useLocation, Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import Searchbar from "../../components/Searchbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ScrollToTop from "../../components/ScrollToTop";

function GlossarysPage({ message = "", filter = "" }) {
  const currentUser = useCurrentUser();
  const [glossary, setGlossary] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchGlossary = async () => {
      try {
        const { data } = await axiosReq.get(
          `/glossary/?${filter}search=${query}`
        );

        // Sort the glossary results alphabetically by title
        const sortedResults = data.results.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        setGlossary({ results: sortedResults });
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchGlossary();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <div>
      <Row>
        <Col className="my-auto py-2 p-md-2">
          <Container>
            <h1>
              <i className="fa-solid fa-book"></i> Glossary
            </h1>
          </Container>
        </Col>
      </Row>
      <Row>
        <Container>
          <Searchbar
            query={query}
            setQuery={setQuery}
            placeholderText="Search glossary terms by title"
          />
        </Container>
      </Row>
      {currentUser && (
        <Row>
          <Col>
            <Link to="/glossary/create" className="text-dark">
              <Button
                variant="outline-light"
                className={`${btnStyles.ButtonLight} text-dark`}
                block
              >
                <i className="fa-solid fa-plus"></i> Add glossary item
              </Button>
            </Link>
          </Col>
        </Row>
      )}

      <Row className="py-4">
        <Col>
          {hasLoaded ? (
            <>
              {glossary.results.length ? (
                <InfiniteScroll
                  children={glossary.results.map((glossary) => (
                    <Glossary
                      key={glossary.id}
                      {...glossary}
                      setGlossary={setGlossary}
                    />
                  ))}
                  dataLength={glossary.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!glossary.next}
                  next={() => fetchMoreData(glossary, setGlossary)}
                />
              ) : (
                <Container>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Row>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default GlossarysPage;
