import React, { useState, useEffect, useCallback } from 'react';
import Request from '../../Helpers/Resquests';
// components
import CommentsComponent from './commentsComponent';

function CommentsContainer({ id,title_long }) {
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (ev, text, isReply) => {
        ev.preventDefault();
        setLoading(true);
        
        let created;
        if(isReply){
            created = await Request.createMovieCommentReply(id, 1234, { text })
        }else{
            created = await Request.createMovieComment(id, { text })
        }

        if(created) getComments();
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
        <CommentsComponent
            loading={loading}
            error={error}
            comments={comments}
            handleSubmit={handleSubmit}
            movieName={title_long}
        />
    )

}

export default CommentsContainer;