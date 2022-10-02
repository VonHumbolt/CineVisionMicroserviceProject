import axios from "axios";

export class PaymentService {

    apiUrl = "http://localhost:8080/api/movie/payments/"

    sendTicketDetail(ticketDetail) {
        return axios.post(this.apiUrl + "sendTicketDetail", ticketDetail);
    }
}