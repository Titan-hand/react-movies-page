import React, { useState } from "react";
import PropTypes from "prop-types";
import Request from "../../../Helpers/Resquests";
import Loader from "../../../Elements/Loaders/Loader";

function DeleteComment({
  commentId,
  showDelete,
  setShowDelete,
  index = 0,
  deleteCallback = null,
  isReply = false,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteComment = async () => {
    setLoading(true);
    setError(null);
    let deleted;
    console.log("the comment id", commentId);
    if (isReply) {
      deleted = await Request.deleteMovieCommentReply(commentId, index);
    } else {
      deleted = await Request.deleteMovieComment(commentId);
    }

    if (!deleted) setError(true);

    setLoading(false);
    deleteCallback ? deleteCallback() : setShowDelete(false);
  };

  // ===== render =====

  if (loading) return <Loader size="10" isopen={loading} />;

  if (error) return <h3>error: comment not deleted</h3>;

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

DeleteComment.propType = {
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

export default DeleteComment;
