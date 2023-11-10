import React, { useEffect, useState } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import Movie from "./Movie";
import Asset from "../../components/Asset";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import Searchbar from "../../components/Searchbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import ScrollToTop from "../../components/ScrollToTop";

function MoviesPage({ message = "", filter = "" }) {
  const [movies, setMovies] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const maxContentLength = 150;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axiosReq.get(
          `/movies/?${filter}search=${query}&category=${category}`
        );

        setMovies(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchMovies();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, category, pathname]);

  return (
    <div>
      <Row>
        <Col className="my-auto py-2 p-md-2">
          <Container>
            <h1>
              <i className="fa-solid fa-magnifying-glass"></i> Browse all movies
            </h1>
          </Container>
        </Col>
      </Row>
      <Row>
        <Container>
          <Searchbar
            query={query}
            setQuery={setQuery}
            placeholderText="Search movies by title, release, director, username or keywords"
          />
        </Container>
      </Row>
      <Row className="d-flex flex-row flex-fill">
        <Col>
          <p>Or filter movies by genre category:</p>
          <Form className="flex-fill">
            <Form.Control
              size="sm"
              as="select"
              placeholder="Choose..."
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">All Movies</option>
              <option>Drama</option>
              <option>Documentation</option>
              <option>Biography</option>
              <option>Animation</option>
              <option>Experimental Cinema</option>
            </Form.Control>
          </Form>
        </Col>
      </Row>

      <Row className="py-4">
        <Col>
          {hasLoaded ? (
            <>
              {movies.results.length ? (
                <InfiniteScroll
                  dataLength={movies.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!movies.next}
                  next={() => fetchMoreData(movies, setMovies)}
                  className="overflow-hidden"
                >
                  <Row>
                    {movies.results.map((movie) => (
                      <Col
                        key={movie.id}
                        lg={4}
                        md={6}
                        sm={12}
                        className="pb-4 d-flex"
                      >
                        <Movie
                          {...movie}
                          content={
                            movie.content.slice(0, maxContentLength) +
                            (movie.content.length > maxContentLength
                              ? "..."
                              : "")
                          }
                          setMovies={setMovies}
                        />
                      </Col>
                    ))}
                  </Row>
                </InfiniteScroll>
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

export default MoviesPage;
