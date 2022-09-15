import axios from "axios";

export class ActorService {

    apiUrl = "http://localhost:8080/api/v1/actors/"

    getActorsByMovieId(movieId) {
        return axios.get(this.apiUrl + "getActorsByMovieId/" + movieId);
    }

}