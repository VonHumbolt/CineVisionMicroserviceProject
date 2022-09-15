import axios from "axios";

export class CityService {

    apiUrl = "http://localhost:8080/api/v1/cities/"

    getCitiesByMovieId(movieId) {
        return axios.get(this.apiUrl + "getCitiesByMovieId/" + movieId);
    }

}