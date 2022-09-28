import axios from "axios";

export class UserService {

    apiUrl = "http://localhost:8081/api/v1/customers/"

    addCustomer(customer) {
        return axios.post(this.apiUrl + "add", customer);
    }

}