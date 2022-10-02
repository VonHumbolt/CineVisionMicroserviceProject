import axios from "axios";

export class UserService {

    apiUrl = "http://localhost:8080/api/user/customers/"

    addCustomer(customer) {
        return axios.post(this.apiUrl + "add", customer);
    }

}