import React, { useState } from 'react';
// components
import TextArea from '../../../Elements/Inputs/TextArea';
import Button from '../../../Elements/Buttons/Submit';

function CommentForm({handleSubmitComment}) {
    const [ text, setText ] = useState('');

    const handleChange = ev => setText(ev.target.value);
    // handle submit wrapper
    const handleSubmit = (ev, text) => {
        setText('');
        handleSubmitComment(ev, text);
    } 

    return (
        <form onSubmit={(ev) => handleSubmit(ev, text)}>

            <TextArea 
                onChange={handleChange} 
                value={text} 
                placeholder="write a comment" 
            />
            <div className="button-comment-container">
                <Button value="comment" />
            </div>

        </form>
    )
}

export default CommentForm;