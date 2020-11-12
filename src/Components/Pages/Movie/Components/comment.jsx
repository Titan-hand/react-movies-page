// import React, { useState } from 'react';
import React from 'react';

function dateStr(date) {
    const d = new Date(date);
    const { getDate, getMonth, getFullYear } = d;
    return `${getDate()}/${getMonth() + 1}/${getFullYear()}`;
}

function Comment({ username, text, date, photoUrl }) {
    return(
        <div className="comment-cont">
            <div className="comment-left">
                <img src={photoUrl} alt={username + ' comment'} />
                <p className="comment-date">{dateStr(date)}</p>
            </div>
            <div className="comment-right">
                {text}
            </div>
        </div>
    )
}

function CommentWraper(commentData) {
    return(
        <div className="comment-wrapper">
            <Comment {...commentData} />
            <div className="comment-wrapper-responses">
                {
                    commentData.responses?.map( r => <Comment {...r} />)
                }
            </div>
        </div>
    )
}

export default CommentWraper;