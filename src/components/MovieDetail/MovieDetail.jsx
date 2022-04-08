
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function MovieDetails(movie){

const dispatch= useDispatch();
const details = useSelector(store =>store.details);

const home = even => {
    history.pushState('/')
}
return(
<>
<h1>Movie Info</h1>
<button onClick= {home}></button>
</>
)

 }