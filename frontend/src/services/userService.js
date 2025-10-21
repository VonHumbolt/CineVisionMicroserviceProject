import axios from "axios";

export class UserService {


    apiUrl = process.env.REACT_APP_API_URL + "/api/user/users/";


    addCustomer(customer) {
        return axios.post(this.apiUrl + "add", customer);
    }

    login(loginDto) {
        return axios.post("http://localhost:8080/api/user/auth/login", loginDto);
    }
}