import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";
import useAlert from "../../hooks/useAlert";
import DeleteModal from "../../components/DeleteModal";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setMovie,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { setAlert } = useAlert();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setMovie((prevMovie) => ({
        results: [
          {
            ...prevMovie.results[0],
            comments_count: prevMovie.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      setAlert("Comment deleted successfully!", "success");
      setShowDeleteModal(false);
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <>
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={() => setShowDeleteModal(true)}
            />
            <DeleteModal
              show={showDeleteModal}
              onCancel={cancelDelete}
              onConfirm={handleDelete}
            />
          </>
        )}
      </Media>
    </>
  );
};

export default Comment;
