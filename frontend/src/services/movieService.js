import axios from "axios";

export class MovieService {

    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/movies/";


    getAllDisplayingMovies() {
        return axios.get(this.apiUrl + "displayingMovies");
    }

    getAllComingSoonMovies() {
        return axios.get(this.apiUrl + "comingSoonMovies");
    }

    getMovieById(movieId) {
        return axios.get(this.apiUrl + movieId);
    }

    addMovie(movieDto) {
        return axios.post(this.apiUrl + "add", movieDto);
    }
}