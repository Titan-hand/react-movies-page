import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector } from 'react-redux';
import { COMMENTS_URL } from "../../Config/api";
// components
import CommentsComponent from './commentsComponent';

function CommentsContainer({ id,title_long }) {
    // const { currentUserInfo } = useSelector( state => state.UserInformation);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const handleSubmit = (ev, text, isReply) => {
        ev.preventDefault();
        
    }

    const getComments = useCallback(async () => {
        setLoading(true);
        const r = await fetch(`${COMMENTS_URL}?movieId=${id}`);
        const json = await r.json();
        if(json.ok){
            setComments(json.data.comments);
            setLoading(false);
        }
    }, [id]); 

    useEffect(() => {
        getComments();
    }, [getComments])

    return(
        <CommentsComponent
            loading={loading}
            comments={comments}
            handleSubmit={handleSubmit}
            movieName={title_long}
        />
    )

}

export default CommentsContainer;