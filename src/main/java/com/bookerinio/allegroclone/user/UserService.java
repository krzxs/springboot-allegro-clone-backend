package com.bookerinio.allegroclone.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserDetails(String uniqueId) {
        return userRepository.findAllByUniqueId(uniqueId);
    }
}
