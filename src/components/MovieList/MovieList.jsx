import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from "@mui/material"


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Stack spacing={4}>
                <h1 className='title'>Movie Gallery</h1>
                <h3>Click to learn more!</h3>
                <ImageList sx={{ width: 900, height: 400 }} cols={4} rowHeight={200}>
                    {movies.map((movie, i) => {
                        return (
                            <MovieItem
                                key={i}
                                movie={movie}
                            />
                        );
                    })}
                </ImageList>
            </Stack>
        </main>
    );
}

export default MovieList;