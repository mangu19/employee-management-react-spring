package com.emp.emp.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.emp.emp.model.EmpModel;
import com.emp.emp.repo.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/users")
public class EmpController {
    private UserRepository userRepository ;

    @Autowired
    public void UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public EmpModel registerUser(@RequestPart("user") EmpModel user,
                             @RequestPart("photoFile") MultipartFile photoFile) {
        // Handle file upload, save the file, and update the user's photoPath
        if (!photoFile.isEmpty()) {
            String fileName = "unique_filename_here"; // You may want to generate a unique file name
            String uploadDir = "path_to_upload_directory_here"; // Update this with your file storage location
            String fileExtension = FilenameUtils.getExtension(photoFile.getOriginalFilename());
            String filePath = uploadDir + File.separator + fileName + "." + fileExtension;

            try {
                Files.copy(photoFile.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
                ((com.emp.emp.model.EmpModel) user).setPhoto(filePath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // Save the user to the database
        return userRepository.save(user);
    }
}

