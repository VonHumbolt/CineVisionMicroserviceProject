package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.PaymentService;
import com.kaankaplan.movieService.entity.dto.TicketInformationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/movie/payments/")
@RequiredArgsConstructor
//@CrossOrigin
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("sendTicketDetail")
    public void sendTicketDetail(@RequestBody TicketInformationDto ticketInformationDto) {
        paymentService.sendTicketDetail(ticketInformationDto);
    }
}
