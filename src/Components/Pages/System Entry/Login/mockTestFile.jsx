import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Request from '../../../Helpers/Resquests';

const FetchAndShow = ({ url }) => {
    
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(url);
        setMovies(data.movies);
        setLoading(false);
    }

    const showRequest = async () => {
        const { data } = await Request.login({
            email: 'hola@mail.com',
            password: 'hey123123',
            headers: {}
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(loading){
        return <div>loading</div>
    }

    return (
        <div id="container" onClick={showRequest}>
            {movies.map( m => ( 
                <p key={m}>
                    {m}
                </p> 
                ))
            }
        </div>
    );

}
 
export default FetchAndShow;