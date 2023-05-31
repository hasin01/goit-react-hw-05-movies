import { api } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { StyledH2 } from './Home.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const response = await api.getTrendingMovies();
            setMovies(response);
        }
        
        getTrendingMovies();
        
    }, []); 

    return (
        <>
            <StyledH2>Trending today</StyledH2>
            <MoviesList movies={ movies } />
        </>
    );
}

export default Home;