import { api } from "api/api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StyledImg } from "./Cast.styled";

const Cast = () => {
    const location = useLocation();
    const movieId = useParams().movieId ?? '';
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getMovieCast = async () => {
            const response = await api.getCredits(movieId);
            setCast(response.cast.map(actor => ({
                id: actor.id,
                profilePic: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
                name: actor.name,
                character: actor.character,
            })));
        }
        
        getMovieCast();
        
    }, [movieId, location]); 

    return (
        <ul>
            {cast.map(actor => {
                return (
                    <li key={actor.id}>
                        <StyledImg src={actor.profilePic} alt={actor.name} />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default Cast;