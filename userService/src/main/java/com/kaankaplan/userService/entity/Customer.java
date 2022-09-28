package com.kaankaplan.userService.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Customer extends User{

    private String customerName;
    private String phoneNumber;
}
