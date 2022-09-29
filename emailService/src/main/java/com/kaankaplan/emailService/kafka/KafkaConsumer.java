package com.kaankaplan.emailService.kafka;

import com.kaankaplan.movieService.entity.dto.EmailMessageKafkaDto;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    @KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void consume(EmailMessageKafkaDto emailMessageKafkaDto){
        // send email
        System.out.println("Received from MovieService -> "  + emailMessageKafkaDto.toString());
    }
}
