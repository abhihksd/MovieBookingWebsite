//package com.example.demo.controllers;
//
//import java.io.IOException;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.example.demo.entities.ImageEntity;
//import com.example.demo.repositories.ImagesRepository;
//
//@RestController
//@RequestMapping("/images")
//public class ImageController {
//	@Autowired
//    private ImagesRepository imageRepository;
//
//	@PostMapping("/upload")
//	public ResponseEntity<String> handleImageUpload(@RequestParam("image") MultipartFile file) {
//	    try {
//	        // Logging before saving
//	        System.out.println("Received image: " + file.getOriginalFilename());
//
//	        ImageEntity imageEntity = new ImageEntity();
//	        imageEntity.setImg_data(file.getBytes());
//	        imageRepository.save(imageEntity);
//
//	        // Logging after saving
//	        System.out.println("Image saved successfully!");
//
//	        return ResponseEntity.status(HttpStatus.OK).body("Image uploaded successfully!");
//	    } catch (IOException e) {
//	        // Logging the exception
//	        e.printStackTrace();
//	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image");
//	    }
//	}
//
//	@GetMapping("/{image_id}")
//	public ResponseEntity<byte[]> getImageById(@PathVariable Long image_id) {
//	    Optional<ImageEntity> optionalImageEntity = imageRepository.findById(image_id);
//	    return optionalImageEntity.map(imageEntity ->
//	            ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageEntity.getImg_data()))
//	            .orElse(ResponseEntity.notFound().build());
//	}
//
//}
