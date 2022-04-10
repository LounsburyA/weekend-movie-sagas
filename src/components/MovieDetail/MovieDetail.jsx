
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import React from "react";
import './MovieDetail.css'

function MovieDetail() {
    const history = useHistory(); 
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const home = event => {
        history.push('/');//brings back to home screen
    }
    return (
        <div>
            <h1 ><span className='title'>About this movie</span></h1>
            <p>{details.title}</p>
            <img src={details.poster} className = "poster"/>
            <div className="deets">
                <p className="info">Description:</p>
            <p>{details.description}</p>
            </div>
            {/* adds genres to the dom */}
            <p className="info">Genre:</p>
                {genres.map((genre, i) => {
                    return (
                        <>
                        <p key={i}> {genre.name} </p>
                        </>
                    )
                    })} 
            
            <button onClick={home}>Back to List</button>
        </div>
    )

}
export default MovieDetail;