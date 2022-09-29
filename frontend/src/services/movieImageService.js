import axios from "axios";

export class MovieImageService {

    apiUrl = "http://localhost:8080/api/v1/images/"
    
    addMovieImage(imageUrl, movieId) {
        return axios.get(this.apiUrl + "add/" + movieId + "/" + "?imageUrl=" + imageUrl);
    }
}