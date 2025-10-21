import axios from "axios";

export class CityService {

    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/cities/";


    getCitiesByMovieId(movieId) {
        return axios.get(this.apiUrl + "getCitiesByMovieId/" + movieId);
    }

    getall() {
        return axios.get(this.apiUrl + "getall");
    }

    addCity(cityDto) {
        return axios.post(this.apiUrl + "add", cityDto);
    }
}