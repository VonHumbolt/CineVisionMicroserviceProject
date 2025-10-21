import axios from "axios";

export class SaloonTimeService {

  
    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/movieSaloonTimes/";


    getMovieSaloonTimeSaloonAndMovieId(saloonId, movieId) {
        return axios.get(this.apiUrl + "getMovieSaloonTimeSaloonAndMovieId/" + saloonId + "/" + movieId);
    }

}