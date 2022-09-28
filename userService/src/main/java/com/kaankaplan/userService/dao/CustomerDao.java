package com.kaankaplan.userService.dao;

import com.kaankaplan.userService.entity.Customer;
import com.kaankaplan.userService.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerDao extends MongoRepository<Customer, String> {

    Customer getCustomerByUserId(String userId);
}
