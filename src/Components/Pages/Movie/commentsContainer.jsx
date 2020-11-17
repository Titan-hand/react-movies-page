import React, { useState, useEffect, useCallback, createContext } from 'react';
import Request from '../../Helpers/Resquests';
// components
import CommentsComponent from './commentsComponent';

const CommentsContext = createContext(null);

function CommentsContainer({ id,title_long }) {
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmitComment = async (ev, text, commentId = null) => {
        ev.preventDefault();
        setLoading(true);
        
        let saved;
        if(commentId) saved = await Request.updateMovieComment(commentId, text);
        else saved = await Request.createMovieComment(id, text);
        
        if(saved) getComments();
        else {
            setError(true);
            setLoading(false);
        }
    }

    const getComments = useCallback(async () => {
        setLoading(true);
        const comments = await Request.getMovieComments(id);
        if(comments){
            setComments(comments);
        }
        setLoading(false);
    }, [id]); 

    useEffect(() => {
        getComments();
    }, [getComments])

    return(
        <CommentsContext.Provider value={{ handleSubmitComment, getComments }}>
            <CommentsComponent
                loading={loading}
                error={error}
                comments={comments}
                handleSubmitComment={handleSubmitComment}
                movieName={title_long}
            />
        </CommentsContext.Provider>
    )

}

export default CommentsContainer;
export {
    CommentsContext
}