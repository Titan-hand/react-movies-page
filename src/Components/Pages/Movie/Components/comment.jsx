import React from 'react';

function dateStr(date) {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function Comment({ username, text, date, photoUrl, isReply = false }) {
    return(
        <div className={`comment-cont ${isReply ? 'isReply' : ''}`}>
            <div className="comment-left">
                <img src={photoUrl} alt={username + ' comment'} />
                <p className="comment-username">{username}</p>
                <p className="comment-date">{dateStr(date)}</p>
            </div>
            <div className="comment-right">
                <p className="comment-text">{text}</p>
            </div>
        </div>
    )
}

export default Comment;