import axios from "axios";

export class MovieImageService {

    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/images/";

    
    addMovieImage(imageDto) {
        return axios.post(this.apiUrl + "add", imageDto);
    }
}