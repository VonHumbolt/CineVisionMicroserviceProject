import axios from "axios"

export class DirectorService{

    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/directors/";


    getall() {
        return axios.get(this.apiUrl + "getall")
    }

    add(director) {
        return axios.post(this.apiUrl + "add", director);
    }
}