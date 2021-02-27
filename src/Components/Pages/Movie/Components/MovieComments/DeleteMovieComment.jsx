import React from "react";
import PropTypes from "prop-types";
import Loader from "../../../../Elements/Loaders/Loader";
import useDeleteMovieComment from "../../../../Hooks/useDeleteMovieComment";

function DeleteMovieComment({
  commentId,
  showDelete,
  setShowDelete,
  index = 0,
  deleteCallback,
  isReply,
}) {
  const { loading, error, deleteComment } = useDeleteMovieComment({
    commentId,
    index,
    deleteCallback,
    isReply,
    setShowDelete,
  });

  if (loading) return <Loader size="10" isopen={loading} />;

  if (error) return <h3>Error: comment not deleted</h3>;

  if (showDelete)
    return (
      <div className="delete-comment-container">
        <p className="delete-c-title">Are you sure?</p>
        <div className="delete-c-buttons button-group">
          <div
            onClick={deleteComment}
            className="button button-danger delete-c-btn yes"
          >
            Yes
          </div>
          <div
            onClick={() => setShowDelete(false)}
            className="button button-primary delete-c-btn no"
          >
            No
          </div>
        </div>
      </div>
    );

  return null;
}

DeleteMovieComment.propType = {
  commentId: PropTypes.string.isRequired,
  showDelete: PropTypes.bool.isRequired,
  setShowDelete: PropTypes.func.isRequired,
  index: PropTypes.number,
  deleteCallback: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  isReply: PropTypes.bool,
};

export default DeleteMovieComment;
