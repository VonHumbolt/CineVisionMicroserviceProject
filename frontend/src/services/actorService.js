import axios from "axios";

export class ActorService {

    apiUrl = "http://localhost:8080/api/movie/actors/"

    getActorsByMovieId(movieId) {
        return axios.get(this.apiUrl + "getActorsByMovieId/" + movieId);
    }

    getall() {
        return axios.get(this.apiUrl + "getall");
    }
    
    addActor(actorDto) {
        return axios.post(this.apiUrl + "add", actorDto);
    }
}