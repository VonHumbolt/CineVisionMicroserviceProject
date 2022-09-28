import axios from "axios";

export class CommentService {

    apiUrl = "http://localhost:8080/api/v1/comments/"

    getCommentsByMovieId(movieId, pageNo, pageSize=5) {
        return axios.get(this.apiUrl + "getCommentsByMovieId/" + movieId + "/" + pageNo + "/" + pageSize);
    }
}