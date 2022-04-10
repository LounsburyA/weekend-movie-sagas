
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import React from "react";
import './MovieDetail.css'

function MovieDetail() {
    const history = useHistory(); 
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const home = event => {
        history.push('/');
    }
    return (
        <div>
            <h1>About this movie!</h1>
            <p>{details.title}</p>
            <img src={details.poster} className = "poster"/>
            <div className="deets">
            <p>{details.description}</p>
            </div>
            
                {genres.map((genre, i) => {
                    return (

                        <p key={i}> {genre.name} </p>
                    )
                    })} 
            
            <button onClick={home}>Back to List</button>
        </div>
    )

}
export default MovieDetail;