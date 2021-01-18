import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Request from '../../../Helpers/Resquests';
// components
import TextArea from '../../../Elements/Inputs/TextArea';
import Loader from '../../../Elements/Loaders/Loader';


function ReplyForm({ 
    showForm, 
    closeForm, 
    parentCommentId = null,
    isEditing = false,
    index = null, 
    submitCallback = () => {},
    defaultValue = ''
}) 
{
    const [ text, setText ] = useState('');
    const [loading, setLoading] = useState(false);
    const [ error, setError ] = useState(null);

    const handleChange = ev => setText(ev.target.value);

    const clearForm = () => {
        setText('');
        closeForm();
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);

        let saved;
        if(isEditing){
            saved = await Request.updateMovieCommentReply(parentCommentId, index, text);
        } else {
            saved = await Request.createMovieCommentReply(parentCommentId, text)
        }

        let txt = text;
        setLoading(false);
        clearForm();
        
        if(saved.ok) submitCallback(txt, saved.data.parentCommentId);
        else setError(true);
    }

    // === render ===
    if(error) return <h3>Sorry, an error has occurred</h3>

    return (
        <div className="replyForm-and-new-replies">
    
            { loading && <Loader size="10" isopen={loading} /> }
            
            {
                (showForm && !loading)
                &&
                <form onSubmit={handleSubmit}>
                    <TextArea 
                        onChange={handleChange} 
                        defaultValue={defaultValue}
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

ReplyForm.propTypes = {
    showForm: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
    parentCommentId: PropTypes.string,
    submitCallback: PropTypes.func,
    isEditing: PropTypes.bool,
    index: PropTypes.number

}

export default ReplyForm;