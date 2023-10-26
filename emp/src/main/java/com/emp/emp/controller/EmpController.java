package com.emp.emp.controller;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

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

import jakarta.persistence.criteria.Path;

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
    public String registerUser(@RequestParam("email") String email,
                                 @RequestParam("password") String password,
                                 @RequestParam("name") String name,
                                 @RequestParam("address") String address,
                                 @RequestParam("city") String city,
                                 @RequestParam("zip") String zip,
                                 @RequestParam("degree") String degree,
                                 @RequestParam("photo") MultipartFile photo ) throws IOException {

                    
                                    try {
                                        // Convert the MultipartFile to a byte array
                                        byte[] photoBytes = photo.getBytes();
                            
                                        // Create a new user entity
                                        EmpModel user = new EmpModel();
                                        user.setEmail(email);
                                        user.setPassword(password);
                                        user.setName(name);
                                        user.setAddress(address);
                                        user.setCity(city);
                                        user.setZip(zip);
                                        user.setDegree(degree);
                                        user.setPhoto(photoBytes);
                            
                                        // Save the user entity to the database
                                        userRepository.save(user);
                            
                                        return "User registered successfully!";
                                    } catch (IOException e) {
                                        e.printStackTrace();
                                        return "Error registering user";
                                    }
}


}