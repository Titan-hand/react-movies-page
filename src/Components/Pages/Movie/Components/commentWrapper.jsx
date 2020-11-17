import React, { useState, useContext } from 'react';
import { CommentsContext } from '../commentsContainer';
// components
import Comment from './comment';
import ReplyFormWrapper from './replyFormWrapper';
import '../Styles/comments.css';


function CommentWraper({ commentData }) {
    const [showResponses, setShowResponses ] = useState(false);
    const [ showForm, setShowForm ] = useState(false);
    const { getComments } = useContext(CommentsContext);
    const resp = commentData.responses;

    return(
        <div className="comment-wrapper">
            <Comment 
                {...commentData} 
                commentId={commentData._id} 
                deleteCallback={getComments} 
            />

            {/* reply button */}
            <div className="commentMakeReply" onClick={() => setShowForm(true)}>
                Reply
            </div>
                
            {/* "show replies" button */}
            {
                resp?.length > 0 && (
                <div className="comment-show-replies">
                    <div
                        className="showResponses"
                        onClick={() => setShowResponses(true)}>
                        Show
                        {' ' + resp.length}
                        {resp.length > 1 ? ' replies' : ' reply'}
                    </div>
                </div>)
            }

            {/* reply form wrapper, with inmediately reply feedback */}
            <ReplyFormWrapper
                closeForm={() => setShowForm(false)}
                showForm={showForm} 
                parentCommentId={commentData._id}
            />

            {/* only show responses if a comment have responses */}
            {
                (resp && showResponses) && (
                <div className="comment-wrapper-responses">
                    {resp.map( (r, i) => (
                        <Comment 
                            {...r} 
                            key={i} 
                            commentId={commentData._id}
                            deleteCallback={getComments} 
                            index={i}
                            isReply 
                        />))
                    }
                </div>)
            }
            
            {/* "hide responses" button */}
            {
                (resp && showResponses) &&(
                <div className="showResponses" onClick={() => setShowResponses(false)}>
                    Hide Replies
                </div>)
            }
        </div>
    )
}

export default CommentWraper;