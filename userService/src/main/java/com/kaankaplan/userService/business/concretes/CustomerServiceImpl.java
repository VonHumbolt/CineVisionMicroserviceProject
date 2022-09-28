package com.kaankaplan.userService.business.concretes;

import com.kaankaplan.userService.business.abstracts.CustomerService;
import com.kaankaplan.userService.dao.CustomerDao;
import com.kaankaplan.userService.entity.Customer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerDao customerDao;

    @Override
    public Boolean isCustomerExist(String userId) {

        Customer customer = customerDao.getCustomerByUserId(userId);

        if (customer == null) {
            return false;
        }

        return true;
    }
}
