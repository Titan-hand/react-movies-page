import React, { useState } from 'react';
import '../Styles/comments.css';


function dateStr(date) {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function Comment({ username, text, date, photoUrl }) {
    return(
        <div className="comment-cont">
            <div className="comment-left">
                <img src={photoUrl} alt={username + ' comment'} />
                <p className="comment-date">{dateStr(date)}</p>
            </div>
            <div className="comment-right">
                <p className="comment-text">{text}</p>
            </div>
        </div>
    )
}

function CommentWraper(commentData) {
    const [showResponses, setShowResponses ] = useState(false); 

    return(
        <div className="comment-wrapper">
            <Comment {...commentData} />
            {/* only show responses if a comment have responses */}
            {
                (commentData.responses && showResponses) && (
                <div className="comment-wrapper-responses">
                    {
                        commentData.responses?.map( (r, i) => <Comment key={i} {...r} />)
                    }
                </div>)
            }
            {/* "show/hide responses" button */}
            {
                commentData.responses
                ?
                <div
                    className="showResponses"
                    onClick={() => setShowResponses(!showResponses)}>
                    {showResponses ? 'Hide' : 'Show'} Responses
                </div>
                :
                null
            }
        </div>
    )
}

export default CommentWraper;