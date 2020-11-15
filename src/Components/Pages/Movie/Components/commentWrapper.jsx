import React, { useState } from 'react';
// components
import Comment from './comment';
import ReplyForm from './replyForm';
import '../Styles/comments.css';


function CommentWraper({ commentData }) {
    const [showResponses, setShowResponses ] = useState(false);
    const [ showForm, setShowForm ] = useState(false);

    return(
        <div className="comment-wrapper">
            <Comment {...commentData} />

            {/* reply and show responses buttons */}
            <div className="comment-actions">
                <div 
                    className="comment-makeReply"
                    onClick={() => setShowForm(true)}
                >
                    Reply
                </div>
                {
                    (commentData.responses && !showResponses)
                    &&
                    <div
                        className="showResponses"
                        onClick={() => setShowResponses(true)}>
                        Show
                        {' ' + commentData.responses.length}
                        {commentData.responses.length > 1 ? ' replies' : ' reply'} 
                    </div>
                }
            </div>

            {/* reply comment form */}
            <ReplyForm
                setShowForm={setShowForm}
                showForm={showForm} 
                parentCommentId={commentData._id}
            />

            {/* only show responses if a comment have responses */}
            {
                (commentData.responses && showResponses) && (
                <div className="comment-wrapper-responses">
                    {
                        commentData.responses.map( (r, i) => <Comment key={i} {...r} isReply />)
                    }
                </div>)
            }
            
            {/* "hide responses" button */}
            {
                (commentData.responses && showResponses) &&(
                <div
                    className="showResponses"
                    onClick={() => setShowResponses(false)}>
                    Hide Replies
                </div>)
            }
        </div>
    )
}

export default CommentWraper;