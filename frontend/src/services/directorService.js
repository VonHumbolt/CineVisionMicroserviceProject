import axios from "axios"

export class DirectorService{
    apiUrl = "http://localhost:8080/api/v1/directors/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }
}