package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.entity.dto.EmailMessageKafkaDto;
import com.kaankaplan.movieService.business.abstracts.PaymentService;
import com.kaankaplan.movieService.entity.dto.TicketInformationDto;
import com.kaankaplan.movieService.kafka.KafkaProducer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final KafkaProducer kafkaProducer;

    @Override
    public void sendTicketDetail(TicketInformationDto ticketInformationDto) {

        EmailMessageKafkaDto emailMessage = EmailMessageKafkaDto.builder()
                .sender("python3.testmail@gmail.com")
                .recipient(ticketInformationDto.getEmail())
                .subtitle("CineVision Bilet Detay")
                .fullName(ticketInformationDto.getFullName())
                .movieName(ticketInformationDto.getMovieName())
                .movieDay(ticketInformationDto.getMovieDay())
                .movieStartTime(ticketInformationDto.getMovieStartTime())
                .saloonName(ticketInformationDto.getSaloonName())
                .chairNumbers(ticketInformationDto.getChairNumbers())
                .build();

        kafkaProducer.sendMessage(emailMessage);
    }
}
