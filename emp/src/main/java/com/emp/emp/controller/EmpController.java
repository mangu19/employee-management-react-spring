package com.emp.emp.controller;


import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.emp.emp.model.EmpModel;
import com.emp.emp.repo.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class EmpController {
    private UserRepository userRepository ;

    @Autowired
    public void UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public EmpModel registerUser(@RequestPart("user") EmpModel user,
                             @RequestParam("file") MultipartFile file) throws IOException {

                    
                    user.setPhoto(file.getBytes());
      
        return userRepository.save(user);
    }
}

