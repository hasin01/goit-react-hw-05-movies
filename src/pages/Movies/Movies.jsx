import { api } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { StyledInput } from './Movies.styled';

const Movies = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('movieId') ?? '');

    useEffect(() => {
        const getSaughtMovie = async () => {
            const response = await api.getSaughtMovies(movieId);
            setMovies(response);
        }
        getSaughtMovie();
    }, [movieId]); 
    
    const updateQueryString = evt => {
        setSearchQuery(evt.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams({ movieId: searchQuery });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StyledInput type="text" value={searchQuery} onChange={updateQueryString} />
                <button type="submit" disabled={searchQuery ? false : true}>Search</button>
            </form>
            <MoviesList movies={ movies } />
            <Suspense fallback={<div>LOADING...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Movies;