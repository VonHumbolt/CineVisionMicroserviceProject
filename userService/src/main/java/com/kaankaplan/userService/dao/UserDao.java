package com.kaankaplan.userService.dao;

import com.kaankaplan.userService.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDao extends MongoRepository<User, String> {

    User findUserByUserId(String userId);

    User findUserByEmail(String email);
}
