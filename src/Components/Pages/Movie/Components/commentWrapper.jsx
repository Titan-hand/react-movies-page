import React, { useState } from 'react';
// components
import Comment from './comment';
import ReplyFormWrapper from './replyFormWrapper';
import '../Styles/comments.css';


function CommentWraper({ commentData }) {
    const [showResponses, setShowResponses ] = useState(false);
    const [ showForm, setShowForm ] = useState(false);

    return(
        <div className="comment-wrapper">
            <Comment {...commentData} commentId={commentData._id} />

            {/* reply button */}
            <div className="commentMakeReply" onClick={() => setShowForm(true)}>
                Reply
            </div>
                
            {/* show replies button */}
            {
                commentData.responses?.length > 0 && (
                <div className="comment-show-replies">
                    <div
                        className="showResponses"
                        onClick={() => setShowResponses(true)}>
                        Show
                        {' ' + commentData.responses.length}
                        {commentData.responses.length > 1 ? ' replies' : ' reply'}
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
                (commentData.responses && showResponses) && (
                <div className="comment-wrapper-responses">
                    {commentData.responses.map( (r, i) => (
                        <Comment 
                            {...r} 
                            key={i} 
                            commentId={commentData._id} 
                            index={i}
                            isReply 
                        />))
                    }
                </div>)
            }
            
            {/* "hide responses" button */}
            {
                (commentData.responses && showResponses) &&(
                <div className="showResponses" onClick={() => setShowResponses(false)}>
                    Hide Replies
                </div>)
            }
        </div>
    )
}

export default CommentWraper;