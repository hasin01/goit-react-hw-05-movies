import { api } from "api/api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";


const Reviews = () => {
    const location = useLocation();
    const movieId = useParams().movieId ?? '';
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getMovieReviews = async () => {
            const response = await api.getReviews(movieId);
            setReviews(response.results.map(({ id, author, content }) => ({ id, author, content, })));
        }
        
        getMovieReviews();
        
    }, [movieId, location]);

    return (
        <ul>
            {reviews.length === 0 ? (<p>We don't have any reviews for this movie</p>) : reviews.map(({ id, author, content }) => {
                return (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default Reviews;