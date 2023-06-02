import axios from "axios";

const refs = {
    API_URL: "https://api.themoviedb.org/3",
    KEY: "7ed9e155de27ee81295cae6eb6cdddb0",
};

const axiosInst = axios.create({
  baseURL: refs.API_URL,
  params: {
    api_key: refs.KEY,
  },
});

export const api = {
    getTrendingMovies: async () => {
        try {
            const res = await axiosInst.get('/trending/movie/day');
            const data = res.data.results;
            return data;
        } catch (error) {
            console.log(error);
    
        }
    },
    getSaughtMovies: async (searchQuery) => {
        try {
            const res = await axiosInst.get('/search/movie', {params: {query: searchQuery, language: "en-US", page: 1, "include_adult": false, }});
            const data = res.data.results;
            return data;
        } catch (error) {
            console.log(error);
    
        }
    },
    getMovieDetails: async (movieId) => {
        try {
            const res = await axiosInst.get(`/movie/${movieId}`, {params: {language: "en-US"}});
            const data = res.data;
            return data;
        } catch (error) {
            console.log(error);
          
        }
    },
    getCredits: async (movieId) => {
        try {
            const res = await axiosInst.get(`/movie/${movieId}/credits`, {params: {language: "en-US"}});
            const data = res.data;
            return data;
        } catch (error) {
            console.log(error);
      
        }
    },
    getReviews: async (movieId) => {
        try {
            const res = await axiosInst.get(`/movie/${movieId}/reviews`, {params: {language: "en-US" ,page: 1,}});
            const data = res.data;
            return data;
        } catch (error) {
            console.log(error);

        }
    }
}