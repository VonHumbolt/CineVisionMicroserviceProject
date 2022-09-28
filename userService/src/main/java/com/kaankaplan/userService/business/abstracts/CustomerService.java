package com.kaankaplan.userService.business.abstracts;

import com.kaankaplan.userService.entity.dto.CustomerRequestDto;

public interface CustomerService {

    Boolean isCustomerExist(String userId);

    void addCustomer(CustomerRequestDto customerRequestDto);
}
