package com.kaankaplan.userService.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRegisterRequestDto {

    private String customerName;
    private String email;
    private String phone;
    private String password;
}
