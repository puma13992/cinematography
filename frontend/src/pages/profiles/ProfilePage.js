import React, { useEffect, useState } from "react";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "../movies/Movie";
import Glossary from "../glossary/Glossary";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import ScrollToTop from "../../components/ScrollToTop";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileMovies, setProfileMovies] = useState({ results: [] });
  const [profileGlossary, setProfileGlossary] = useState({ results: [] });

  const maxContentLength = 150;

  const { id } = useParams();

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profileMovies },
          { data: profileGlossary },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/movies/?owner__profile=${id}`),
          axiosReq.get(`/glossary/?created_by__profile=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        // Sort the glossary results alphabetically by title
        const sortedResults = profileGlossary.results.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        setProfileGlossary({ results: sortedResults });

        setProfileMovies(profileMovies);
        setProfileGlossary(profileGlossary);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Container>
        <Card className="text-center">
          <Card.Header className="d-flex flex-column align-items-center">
            <h3>Profile of:</h3>
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-column align-items-center">
              <Image
                className={`${styles.ProfileImage}`}
                roundedCircle
                src={profile?.image}
              />
              <h4>{profile?.owner}</h4>
            </div>
            {profile?.content && <div>{profile.content}</div>}
          </Card.Body>
          <Card.Footer className="bg-transparent d-flex justify-content-between">
            <span>{profile?.movies_count} movies created</span>
            <span>{profile?.glossary_count} glossary items created</span>
          </Card.Footer>
        </Card>
        <Row>
          <Col>
            <hr className="bg-dark" />
          </Col>
        </Row>
      </Container>
    </>
  );

  const mainProfileMovies = (
    <>
      <Container>
        <h4 className="text-center pb-2">{profile?.owner}&apos;s movies:</h4>
        {profileMovies.results.length ? (
          <InfiniteScroll
            children={profileMovies.results.map((movie) => (
              <Movie
                key={movie.id}
                {...movie}
                content={
                  movie.content.slice(0, maxContentLength) +
                  (movie.content.length > maxContentLength ? "..." : "")
                }
                setMovies={setProfileMovies}
              />
            ))}
            dataLength={profileMovies.results.length}
            loader={<Asset spinner />}
            hasMore={!!profileMovies.next}
            next={() => fetchMoreData(profileMovies, setProfileMovies)}
          />
        ) : (
          <Asset
            src={NoResults}
            message={`No results found, ${profile?.owner} hasn't movies yet.`}
          />
        )}
      </Container>
    </>
  );

  const mainProfileGlossary = (
    <>
      <Container>
        <h4 className="text-center pb-2">
          {profile?.owner}&apos;s glossary items:
        </h4>
        {profileGlossary.results.length ? (
          <InfiniteScroll
            children={profileGlossary.results.map((glossary) => (
              <Glossary
                key={glossary.id}
                {...glossary}
                setMovies={setProfileGlossary}
              />
            ))}
            dataLength={profileGlossary.results.length}
            loader={<Asset spinner />}
            hasMore={!!profileGlossary.next}
            next={() => fetchMoreData(profileGlossary, setProfileGlossary)}
          />
        ) : (
          <Asset
            src={NoResults}
            message={`No results found, ${profile?.owner} hasn't glossary items yet.`}
          />
        )}
      </Container>
    </>
  );

  return (
    <Container>
      {hasLoaded ? (
        <>
          <Row>
            <Col>{mainProfile}</Col>
          </Row>
          <Row className="pb-4">
            <Col lg={6}>{mainProfileMovies}</Col>
            <Col lg={6}>{mainProfileGlossary}</Col>
          </Row>
          <div>
            <ScrollToTop />
          </div>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
}

export default ProfilePage;
