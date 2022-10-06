package com.kaankaplan.movieService.kafka;

import com.kaankaplan.movieService.entity.dto.EmailMessageKafkaDto;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {

    private final NewTopic newTopic;
    private final KafkaTemplate<String, EmailMessageKafkaDto> kafkaTemplate;

    @Autowired
    public KafkaProducer(NewTopic newTopic, KafkaTemplate<String, EmailMessageKafkaDto> kafkaTemplate) {
        this.newTopic = newTopic;
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(EmailMessageKafkaDto emailMessage) {
        Message<EmailMessageKafkaDto> message = MessageBuilder
                .withPayload(emailMessage)
                .setHeader(KafkaHeaders.TOPIC, newTopic.name())
                .build();

        kafkaTemplate.send(message);
    }
}
