import axios from "axios"

export class CategoryService{
    apiUrl = "http://localhost:8080/api/movie/categories/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }
}