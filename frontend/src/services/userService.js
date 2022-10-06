import axios from "axios";

export class UserService {

    apiUrl = "http://localhost:8080/api/user/users/"

    addCustomer(customer) {
        return axios.post(this.apiUrl + "add", customer);
    }

    login(loginDto) {
        return axios.post("http://localhost:8080/api/user/auth/login", loginDto);
    }
}