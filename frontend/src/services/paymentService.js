import axios from "axios";

export class PaymentService {

    apiUrl = "http://localhost:8080/api/v1/payments/"

    sendTicketDetail(ticketDetail) {
        return axios.post(this.apiUrl + "sendTicketDetail", ticketDetail);
    }
}