import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/actions';
import SmallVertical from './Cards/SmallVertical';
import NavBar from './NavBar';



const Home = () => {
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies())
    }, [])
    return (
        <div>
            <NavBar />
            {
                movies.map(e => e.original_title)
            }
        </div>
    );
};

export default Home;