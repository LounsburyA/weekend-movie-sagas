import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import ImageListItem from '@mui/material/ImageListItem';
function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const viewDetail = ()=> {
dispatch({type: "FETCH_DETAILS", payload: movie.id})

history.push('/details')
    }

//movies posted to dom
    return (<>
        <div key={movie.id} className= "box" >
            <h3>{movie.title}</h3>
            <img onClick={viewDetail} 
            src ={movie.poster}
            alt={movie.title} />
        </div>
    </>
    )
}
export default MovieItem;