import React from "react";
import PropTypes from "prop-types";
import TextArea from "../../../../Elements/Inputs/TextArea";
import Loader from "../../../../Elements/Loaders/Loader";
import useReplyCommentMovie from "../../../../Hooks/useReplyCommentMovie";

function ReplyForm({
  showForm,
  closeForm,
  parentCommentId = null,
  isEditing = false,
  index = null,
  submitCallback,
  defaultValue = "",
}) {
  const {
    clearForm,
    loading,
    error,
    handleChange,
    handleSubmit,
  } = useReplyCommentMovie({
    closeForm,
    parentCommentId,
    isEditing,
    index,
    submitCallback,
  });

  if (error) return <h3>Sorry, an error has occurred</h3>;

  return (
    <div className="replyForm-and-new-replies">
      {loading && <Loader size="10" isopen={loading} />}

      {showForm && !loading && (
        <form onSubmit={handleSubmit}>
          <TextArea
            onChange={handleChange}
            defaultValue={defaultValue}
            placeholder="write a reply"
          />
          <div className="button-group button-group-wrap button-comment-container">
            <button className="button button-primary" type="submit">
              Reply
            </button>
            <button
              className="button button-danger"
              type="button"
              onClick={clearForm}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

ReplyForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  parentCommentId: PropTypes.string,
  submitCallback: PropTypes.func,
  isEditing: PropTypes.bool,
  index: PropTypes.number,
};

export default ReplyForm;
