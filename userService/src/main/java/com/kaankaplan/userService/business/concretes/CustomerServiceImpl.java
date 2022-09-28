package com.kaankaplan.userService.business.concretes;

import com.kaankaplan.userService.business.abstracts.ClaimService;
import com.kaankaplan.userService.business.abstracts.CustomerService;
import com.kaankaplan.userService.dao.CustomerDao;
import com.kaankaplan.userService.entity.Claim;
import com.kaankaplan.userService.entity.Customer;
import com.kaankaplan.userService.entity.dto.CustomerRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerDao customerDao;
    private final ClaimService claimService;

    @Override
    public Boolean isCustomerExist(String userId) {

        Customer customer = customerDao.getCustomerByUserId(userId);

        if (customer == null) {
            return false;
        }

        return true;
    }

    @Override
    public void addCustomer(CustomerRequestDto customerRequestDto) {

        Claim claim = claimService.getClaimByClaimName("CUSTOMER");

        Customer customer = new Customer();
        customer.setEmail(customerRequestDto.getEmail());
        customer.setCustomerName(customerRequestDto.getCustomerName());
        customer.setPhoneNumber(customerRequestDto.getPhone());
        customer.setPassword(customerRequestDto.getPassword());
        customer.setClaim(claim);

        customerDao.insert(customer);
    }
}
