import axios from "axios";

export class PaymentService {


    apiUrl = process.env.REACT_APP_API_URL + "/api/movie/payments/";


    sendTicketDetail(ticketDetail) {
        return axios.post(this.apiUrl + "sendTicketDetail", ticketDetail);
    }
}