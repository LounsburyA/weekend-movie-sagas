
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import React from "react";

function MovieDetail() {
    const history = useHistory();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const home = event => {
        history.push('/');
    }
    return (
        <>
            <h1>Movie Info</h1>
            <button onClick={home}>Back to List</button>
            <p>{details.title}</p>
            <img src={details.poster} />
            <p>{details.description}</p>

            
                {genres.map((genre, i) => {
                    return (

                        <p key={i}> {genre.name} </p>
                    )
                    })} 
            

        </>
    )

}
export default MovieDetail;