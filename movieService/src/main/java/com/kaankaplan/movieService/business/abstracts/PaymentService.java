package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.dto.TicketInformationDto;

public interface PaymentService {

    void sendTicketDetail(TicketInformationDto ticketInformationDto);
}
