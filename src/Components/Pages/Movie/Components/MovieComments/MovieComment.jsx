import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MovieCommentForm from "./MovieCommentForm";
import ReplyCommentForm from "./ReplyCommentForm";
import DeleteMovieComment from "./DeleteMovieComment";
import { dateStr } from "../../../../Helpers/dateFunctions";
import useMovieComment from "../../../../Hooks/useMovieComment";
import useCurrentUserInfo from "../../../../Hooks/useCurrentUserInfo"
function Comment({
  commentId,
  index,
  username,
  text,
  date,
  photoUrl,
  isEdited,
  isReply = false,
  deleteCallback = null,
}) {
  const {
    deleting,
    editing,
    _text,
    submitCallback,
    enableEditing,
    disableEditing,
    enableDeleting,
    setDeleting,
  } = useMovieComment(text);

  const currentUserInfo = useCurrentUserInfo();

  return (
    <div className={`comment-cont ${isReply ? "isReply" : ""}`}>
      <div className="comment-upside">
        <div className="comment-left">
          <img src={photoUrl} alt={username + " comment"} />
        </div>

        <div className="comment-right">
          <div className="comment-top-inline">
            <p className="comment-username">
              <Link to={`/users/${username}`}>{username}</Link>
            </p>
            <span className="comment-top-dot" />
            <p className="comment-date">{dateStr(date)}</p>
            <p className="comment-edited-p">{isEdited && "(edited)"}</p>
          </div>

          {editing &&
            (isReply ? (
              <ReplyCommentForm
                showForm={editing}
                closeForm={disableEditing}
                parentCommentId={commentId}
                index={index}
                defaultValue={_text}
                submitCallback={submitCallback}
                isEditing
              />
            ) : (
              <MovieCommentForm
                submitCallback={submitCallback}
                commentId={commentId}
                defaultValue={_text}
              />
            ))}
          {!editing && <p className="comment-text">{_text}</p>}
        </div>
      </div>

      <div className="comment-downside">
        {username === currentUserInfo.username && (
          <>
            {!editing && (
              <div
                onClick={enableEditing}
                style={{ marginRight: "1rem" }}
              >
                <i className="fa fa-pencil-alt" />
              </div>
            )}

            {!deleting && (
              <div onClick={enableDeleting}>
                <i className="fa fa-trash" />
              </div>
            )}

            <DeleteMovieComment
              commentId={commentId}
              index={index}
              showDelete={deleting}
              setShowDelete={setDeleting}
              deleteCallback={deleteCallback}
              isReply={isReply}
            />
          </>
        )}
      </div>
    </div>
  );
}

Comment.propTypes = {
  commentId: PropTypes.string.isRequired,
  index: PropTypes.number,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
  isEdited: PropTypes.bool,
  isReply: PropTypes.bool,
  deleteCallback: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
};

export default Comment;
