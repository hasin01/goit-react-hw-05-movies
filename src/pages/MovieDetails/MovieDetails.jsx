import { api } from "api/api";
import { BackLink } from "components/BackLink/BackLink";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { StyledContainer, StyledImg } from "./MovieDetails.styled";

const MovieDetails = () => {
    const location = useLocation();
    const movieId = useParams().movieId ?? '';
    const backLinkHref = location.state?.from ?? "/movies";
    const [poster, setPoster] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getMovieDetails = async () => {
            const response = await api.getMovieDetails(movieId);
            setPoster(`https://image.tmdb.org/t/p/w500/${response.poster_path}`);
            setTitle(response.original_title);
            setRating(Math.round(response.vote_average * 10));
            setOverview(response.overview);
            setGenres(response.genres.map(genre => (genre.name)));
        }
        
        getMovieDetails();
        
    }, [movieId]); 

    return (
        <>
            <BackLink to={ backLinkHref }>Go back</BackLink>
            <StyledContainer>
                <StyledImg src={poster} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>User score: {rating}%</p>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    <h5>Genres</h5>
                    <p>{genres.map(genre => String(genre) + " ")}</p>
                </div>
            </StyledContainer>
            <hr />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to={`cast`} state={{ from: backLinkHref }}>Cast</Link>
                </li>
                <li>
                    <Link to={`reviews`} state={{ from: backLinkHref }}>Reviews</Link>
                </li>
            </ul>
            <hr />
            <Suspense fallback={<div>LOADING...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default MovieDetails;