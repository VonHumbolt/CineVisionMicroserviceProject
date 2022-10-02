package com.kaankaplan.movieService.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TicketInformationDto {

    private String movieName;
    private String saloonName;
    private String movieDay;
    private String movieStartTime;
    private String email;
    private String fullName;
    private String phone;
    private String chairNumbers;

}
