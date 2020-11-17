import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// components
import CommentForm from './commentForm';
import ReplyForm from './replyForm';
import DeleteComment from './deleteComment';
// utils
import { dateStr } from '../../../Helpers/dateFunctions';


function Comment({ 
    commentId, 
    index, 
    username, 
    text, 
    date, 
    photoUrl, 
    isEdited, 
    isReply = false,
    deleteCallback = null 
}) {
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [_text, setText] = useState(text);
    const { currentUserInfo } = useSelector(state => state.UserInformation);
    
    // callback when a pincipal comment is edited
    const submitCallback = (txt) => {
        setText(txt);
        setEditing(false);
    }

    //  === render ===
    return(
        <div className={`comment-cont ${isReply ? 'isReply' : ''}`}>
            <div className="comment-upside">
                <div className="comment-left">
                    <img src={photoUrl} alt={username + ' comment'} />
                    <p className="comment-username">{username}</p>
                    <p className="comment-date">{dateStr(date)}</p>
                    <p className="comment-edited-p">{ isEdited && '(edited)' }</p>
                </div>
                <div className="comment-right">
                    {
                        editing && (
                            isReply ? (
                                <ReplyForm 
                                    showForm={editing} 
                                    closeForm={() => setEditing(false)}
                                    parentCommentId={commentId}
                                    index={index}
                                    defaultValue={_text}
                                    submitCallback={submitCallback}
                                    isEditing 
                                />) : (
                                <CommentForm 
                                    submitCallback={submitCallback} 
                                    commentId={commentId}
                                    defaultValue={_text}
                                />
                            )
                        )
                    }
                    { !editing && <p className="comment-text">{_text}</p> }
                </div>
            </div>

            <div className="comment-downside">
            {
                (username === currentUserInfo.username) && (
                    <>
                        { !editing && <div onClick={() => setEditing(true)}>Edit</div> }
                        
                        {!deleting && <div onClick={() => setDeleting(true)}>Delete</div>}

                        <DeleteComment
                            commentId={commentId}
                            index={index}
                            showDelete={deleting}
                            setShowDelete={setDeleting}
                            deleteCallback={deleteCallback}
                            isReply={isReply}
                        />
                    </>
                )
            }
            </div>
        </div>
    )
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
        PropTypes.oneOf([null])
    ]),
}

export default Comment;