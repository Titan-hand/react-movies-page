import React, { useState } from 'react';
// components
import TextArea from '../../../Elements/Inputs/TextArea';
import Button from '../../../Elements/Buttons/Submit';

function CommentForm({handleSubmit, isReply = false}) {
    const [ text, setText ] = useState('');
    const handleChange = ev => setText(ev.target.value);

    return (
        <form onSubmit={(ev) => handleSubmit(ev, text, isReply)}>

            <TextArea 
                onChange={handleChange} 
                value={text} 
                placeholder={`write a ${isReply ? 'reply' : 'comment'}`} 
            />
            <div className="button-comment-container">
                <Button value={isReply ? 'reply' : 'comment'} />
            </div>

        </form>
    )
}

export default CommentForm;