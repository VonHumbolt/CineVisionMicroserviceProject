import axios from "axios"

export class CategoryService{
    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/categories/";

    getall() {
        return axios.get(this.apiUrl + "getall")
    }
}