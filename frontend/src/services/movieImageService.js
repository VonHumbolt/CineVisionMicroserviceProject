import axios from "axios";

export class MovieImageService {

    apiUrl = "http://localhost:8080/api/movie/images/"
    
    addMovieImage(imageDto) {
        return axios.post(this.apiUrl + "add", imageDto);
    }
}