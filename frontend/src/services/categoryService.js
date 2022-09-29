import axios from "axios"

export class CategoryService{
    apiUrl = "http://localhost:8080/api/v1/categories/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }
}