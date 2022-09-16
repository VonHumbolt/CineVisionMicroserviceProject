import axios from "axios";

export class SaloonTimeService {

    apiUrl = "http://localhost:8080/api/v1/movieSaloonTimes/"

    getMovieSaloonTimeSaloonAndMovieId(saloonId, movieId) {
        return axios.get(this.apiUrl + "getMovieSaloonTimeSaloonAndMovieId/" + saloonId + "/" + movieId);
    }

}