package com.kaankaplan.emailService.kafka;

import com.kaankaplan.cineVision.dto.EmailMessageKafkaDto;
import com.kaankaplan.emailService.business.abstracts.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class KafkaConsumer {

    private final EmailService emailService;

    @KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void consume(EmailMessageKafkaDto emailMessageKafkaDto){
        // send email
        Map<String, String> model = new HashMap<>();
        model.put("fullName", emailMessageKafkaDto.getFullName());
        model.put("movieName", emailMessageKafkaDto.getMovieName());
        model.put("movieDay", emailMessageKafkaDto.getMovieDay());
        model.put("saloonName", emailMessageKafkaDto.getSaloonName());
        model.put("movieStartTime", emailMessageKafkaDto.getMovieStartTime());

        emailService.sendEmail(emailMessageKafkaDto.getSender(), emailMessageKafkaDto.getRecipient(), emailMessageKafkaDto.getSubtitle(), model);
    }
}
