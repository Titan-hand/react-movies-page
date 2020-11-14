import React from 'react';
// components
import Container from '../../Elements/Containers/ContainerComponent';
import Loader from "../../Elements/Loaders/Loader";
import CommentForm from './Components/commentForm';
import Comment from "./Components/comment";

function CommentsComponent({handleSubmit, comments, loading, error, movieName}) {
    return(
        <Container>
            <h2>Comments for {movieName}</h2>
            <CommentForm handleSubmit={handleSubmit} />
            {
                loading
                ?
                <Loader />
                :
                error
                ?
                <h1>some error was happened</h1>
                :
                comments.map( (c, i) => {
                    // pass handleSubmit to Comment, because user can make a comment reply
                    return <Comment key={i} {...c} handleSubmit={handleSubmit} />
                }) 
            }
        </Container>
    )
}

export default CommentsComponent;