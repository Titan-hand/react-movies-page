import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// components
import Comment from './comment';
import ReplyForm from './replyForm';

function ReplyFormWrapper(props) {
    const [ replies, setReplies ] = useState([]);
    const { currentUserInfo } = useSelector(state => state.UserInformation);

    const addReplyToShow = (text) => setReplies( prevState => {
        const { username, photoUrl } = currentUserInfo;
        const newReply = { username, photoUrl, text, date: Date.now() }
        return [...prevState, newReply];
    })

    return (
        <div className="replyForm-and-new-replies">
            {/* show immediately when a reply is created */}
            { replies.map( (r, i) => <Comment key={i} {...r} isReply /> )}
    
            <ReplyForm {...props} submitCallback={addReplyToShow} />
        </div>
    )
}

export default ReplyFormWrapper;