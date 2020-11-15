import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Request from '../../../Helpers/Resquests';
// components
import TextArea from '../../../Elements/Inputs/TextArea';
import Loader from '../../../Elements/Loaders/Loader';
import Comment from './comment';


function ReplyForm({ showForm, setShowForm, parentCommentId = null}) {
    const [ replies, setReplies ] = useState([]);
    const [ text, setText ] = useState('');
    const [loading, setLoading] = useState(false);
    const [ error, setError ] = useState(null);
    const { currentUserInfo } = useSelector(state => state.UserInformation);

    const handleChange = ev => setText(ev.target.value);

    const addReplyToShow = () => setReplies( prevState => {
        const { username, photoUrl } = currentUserInfo;
        const newReply = { username, photoUrl, text, date: Date.now() }
        return [...prevState, newReply];
    })

    const clearForm = () => {
        setText('');
        setShowForm(false);
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);
        const created = await Request.createMovieCommentReply(parentCommentId, { text })

        if(created) addReplyToShow();
        else setError(true);
    
        setLoading(false);
        clearForm();
    }

    // === render ===
    if(error) return <h3>Sorry, an error has occurred</h3>

    return (
        <div className="replyForm-and-new-replies">
            {/* show immediately when a reply is created */}
            { replies.map( (r, i) => <Comment key={i} {...r} isReply /> )}
    
            { loading && <Loader size="30" /> }
            
            {
                (showForm && !loading)
                &&
                <form onSubmit={handleSubmit}>
                    <TextArea 
                        onChange={handleChange} 
                        value={text} 
                        placeholder="write a reply" 
                    />
                    <div className="button-comment-container">
                        <button className="button button-primary" type="submit">Reply</button>
                        <button 
                            className="button button-danger" 
                            type="button" 
                            onClick={clearForm}>
                                Cancel
                            </button>
                    </div>
                </form>
            }
        </div>
    )
}

export default ReplyForm;