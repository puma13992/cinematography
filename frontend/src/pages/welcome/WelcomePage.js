import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row,
  Container,
  Accordion,
  Card,
  Image,
} from "react-bootstrap";
import Movie from "../movies/Movie";
import Asset from "../../components/Asset";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import ScrollToTop from "../../components/ScrollToTop";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import Homescreen from "../../assets/home-screen.png";

function WelcomePage({ message = "" }) {
  const maxContentLength = 150;

  const [movies, setMovies] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axiosReq.get(`/movies/`);

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
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="pb-2">Welcome to Cinematography of Holocaust!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            On this site, everyone is invited to add films about the Holocaust
            to the database and thus contribute to a comprehensive
            cinematography of Holocaust. Help to facilitate the exchange of
            films across national borders.
          </p>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <Image src={Homescreen} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="pb-2">How to</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Is this site free of charge?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Yes, the website and its use is not associated with any costs.
                  We never ask for payment or credit cards!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Why do I need an account and what happens with my data?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  You need an account to add movies. You can also edit your own
                  movies, comment on other movies and add them to your wish
                  list. You can also add glossary entries and - like on
                  Wikipedia - edit other glossary entries. The data is stored in
                  a database to create the user account. We never share your
                  personal data with third parties. Your email address is not
                  visible to other users.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                What is the aim of this website?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  The aim of this website is to address international users and
                  encourage them to add films about the Holocaust and thus make
                  films visible across national borders. Many films are not
                  subtitled or are imported or shown in other countries. An
                  exchange is to take place here in order to keep the memory
                  alive across all borders.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Who is the website suitable for?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  The website is open to all interested parties, whether film
                  lovers or scientists.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="py-4">Newest movies</h2>
          {hasLoaded ? (
            <>
              {movies.results.length ? (
                <Row>
                  {movies.results
                    .sort(
                      (a, b) => new Date(b.created_at) - new Date(a.created_at)
                    ) // Sort by created_at in descending order
                    .slice(0, 3) // Take the first 3 movies
                    .map((movie) => (
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
      <Row className="py-4">
        <Col>
          <Button
            variant="outline-light"
            className={btnStyles.ButtonLight}
            block
          >
            <Link to="/movies" className="text-dark">
              Browse and/or filter all movies
            </Link>
          </Button>
        </Col>
      </Row>
      <div>
        <ScrollToTop />
      </div>
    </Container>
  );
}

export default WelcomePage;
