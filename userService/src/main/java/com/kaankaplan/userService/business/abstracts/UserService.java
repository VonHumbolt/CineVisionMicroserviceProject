package com.kaankaplan.userService.business.abstracts;

import com.kaankaplan.userService.entity.User;
import com.kaankaplan.userService.entity.dto.UserRegisterRequestDto;

public interface UserService {

    Boolean isUserExist(String userId);

    void addUser(UserRegisterRequestDto userRegisterRequestDto);

    User getUserByEmail(String email);

    boolean isUserCustomer();

    boolean isUserAdmin();
}
