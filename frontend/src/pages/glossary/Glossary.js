import React, { useState } from "react";
import styles from "../../styles/Glossary.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Media, Button, Accordion } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link, useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";
import { MoreDropdown } from "../../components/MoreDropdown";
import DeleteModal from "../../components/DeleteModal";

const Glossary = (props) => {
  const {
    id,
    profile_id,
    profile_image,
    created_by,
    updated_by,
    title,
    content,
    created_at,
    updated_at,
  } = props;

  const currentUser = useCurrentUser();
  const is_created_by = currentUser?.username === created_by;
  const history = useHistory();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setAlert } = useAlert();

  const handleEdit = () => {
    history.push(`/glossary/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/glossary/${id}/`);
      history.push("/");
      setAlert("Glossary item deleted successfully!", "success");
      setShowDeleteModal(false);
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <Accordion className="py-2">
      <Accordion.Toggle
        as={Button}
        variant="dark link"
        className="btn btn-dark btn-block d-flex align-items-center"
        eventKey={id}
      >
        <div>{title}</div>
        <div className="ml-auto">
          {currentUser && (
            <>
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={() =>
                  is_created_by
                    ? setShowDeleteModal(true)
                    : (() =>
                        setAlert(
                          "Only the creator of the glossary item can delete it.",
                          "warning"
                        ))()
                }
              />
              <DeleteModal
                show={showDeleteModal}
                onCancel={cancelDelete}
                onConfirm={handleDelete}
              />
            </>
          )}
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={id}>
        <div className="py-4">
          {content && <div className="pb-1">{content}</div>} <hr></hr>
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`} className={styles.FooterText}>
              <span className="text-dark">Created by: </span>
              <span className={styles.AvatarImage}>
                <Avatar src={profile_image} height={35} />
              </span>
              <span className="text-dark">{created_by} </span>
              <span className="text-dark">({created_at})</span>
            </Link>
            <Link to={`/profiles/${profile_id}`} className={styles.FooterText}>
              <span className="text-dark">Updated by: </span>
              <span className={styles.AvatarImage}>
                <Avatar src={profile_image} height={35} />
              </span>
              <span className="text-dark">{updated_by} </span>
              <span className="text-dark">({updated_at})</span>
            </Link>
          </Media>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default Glossary;
