package com.kaankaplan.userService.controller;

import com.kaankaplan.userService.business.abstracts.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customers/")
@CrossOrigin
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("isExist/{userId}")
    public boolean isExists(@PathVariable String userId){
        return customerService.isCustomerExist(userId);
    }
}
