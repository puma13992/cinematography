import React from "react";
import styles from "../../styles/Movie.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";
import { MoreDropdown } from "../../components/MoreDropdown";

const Movie = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    wishlist_count,
    wishlist_id,
    title,
    release,
    director,
    content,
    image,
    category,
    created_at,
    updated_at,
    moviePage,
    setMovies,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const { setAlert } = useAlert();

  const handleEdit = () => {
    history.push(`/movies/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/movies/${id}/`);
      history.push("/");
      setAlert("Movie deleted successfully!", "success");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  const handleWishlist = async () => {
    try {
      const { data } = await axiosRes.post("/wishlist/", { movie: id });
      setAlert("You have added this movie to your wishlist.", "success");
      setMovies((prevMovies) => ({
        ...prevMovies,
        results: prevMovies.results.map((movie) => {
          return movie.id === id
            ? {
                ...movie,
                wishlist_count: movie.wishlist_count + 1,
                wishlist_id: data.id,
              }
            : movie;
        }),
      }));
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/wishlist/${wishlist_id}/`);
      setAlert("You have deleted this movie from your wishlist.", "success");
      setMovies((prevMovies) => ({
        ...prevMovies,
        results: prevMovies.results.map((movie) => {
          return movie.id === id
            ? {
                ...movie,
                wishlist_count: movie.wishlist_count - 1,
                wishlist_id: null,
              }
            : movie;
        }),
      }));
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span className="text-dark">{owner}</span>
          </Link>
          <div className="d-flex flex-column align-items-center font-italic">
            <span className={styles.CreateUpdateText}>
              Created at: {created_at}
            </span>
            <span className={styles.CreateUpdateText}>
              Updated at: {updated_at}
            </span>
            {is_owner && moviePage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Header>
      <Link to={`/movies/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && (
          <Link to={`/movies/${id}`}>
            <Card.Title className={`text-center text-dark ${styles.Title}`}>
              {title}
            </Card.Title>
          </Link>
        )}
        {release && (
          <Card.Text>
            <span className={styles.Subtitles}>Release:</span> {release}
          </Card.Text>
        )}
        {director && (
          <Card.Text>
            <span className={styles.Subtitles}>Director:</span> {director}
          </Card.Text>
        )}
        {category && (
          <Card.Text>
            <span className={styles.Subtitles}>Category: </span>
            {category}
          </Card.Text>
        )}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
      <Card.Footer>
        <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  You can't add your own movie to your wishlist!
                </Tooltip>
              }
            >
              <i
                className={`fa-regular fa-heart ${styles.Heart} ${styles.Iconsright}`}
              />
            </OverlayTrigger>
          ) : wishlist_id ? (
            <span onClick={handleUnlike}>
              <i
                className={`fa-solid fa-heart ${styles.Heart} ${styles.Iconsright}`}
              />
            </span>
          ) : currentUser ? (
            <span onClick={handleWishlist}>
              <i
                className={`fa-regular fa-heart ${styles.HeartOutline} ${styles.Iconsright}`}
              />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to add movies to a wishlist!</Tooltip>}
            >
              <i
                className={`fa-regular fa-heart ${styles.Heart} ${styles.Iconsright}`}
              />
            </OverlayTrigger>
          )}
          {wishlist_count}
          <Link to={`/movies/${id}`}>
            <i className={`far fa-comments ${styles.Iconsright} `} />
          </Link>
          {comments_count}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Movie;
