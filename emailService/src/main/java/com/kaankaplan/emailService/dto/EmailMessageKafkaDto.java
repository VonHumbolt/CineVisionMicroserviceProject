package com.kaankaplan.emailService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmailMessageKafkaDto {

    private String sender;
    private String recipient;
    private String subtitle;
    private String movieName;
    private String saloonName;
    private String movieDay;
    private String movieStartTime;
    private String fullName;
    private String chairNumbers;
}
