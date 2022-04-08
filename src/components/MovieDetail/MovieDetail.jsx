
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function MovieDetail() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);

    const home = event => {
        history.push('/');
    }
    return (
        <>
            <h1>Movie Info</h1>
            <button onClick={home}>Home</button>
            <p>{details.title}</p>
            <img src ={details.poster}/>
            <p>{details.description}</p>

        </>
    )

}
export default MovieDetail;