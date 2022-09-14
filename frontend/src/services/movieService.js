import axios from "axios";

export class MovieService {

    apiUrl = "http://localhost:8080/api/v1/movies/"

    getAllDisplayingMovies() {
        return axios.get(this.apiUrl + "displayingMovies");
    }

    getAllComingSoonMovies() {
        return axios.get(this.apiUrl + "comingSoonMovies");
    }

    getMovieById(movieId) {
        return axios.get(this.apiUrl + movieId);
    }
}