package com.bookerinio.allegroclone.user;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RequestMapping("allegro/users")
@CrossOrigin
@RestController
public class UserController {

    private final UserService userService;

    @PostMapping("saveUser")
    public User saveUser(@RequestBody User user) {
        user.setUniqueId(UUID.randomUUID().toString());
        return userService.saveUser(user);
    }

    @GetMapping("getUserDetails/{uniqueId}")
    public User getUserDetails(@PathVariable String uniqueId) {
        return userService.getUserDetails(uniqueId);
    }
}
