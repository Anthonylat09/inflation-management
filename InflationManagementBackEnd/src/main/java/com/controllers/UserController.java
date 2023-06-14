package com.controllers;

import com.annotations.IsAuthenticated;
import com.entities.User;
import com.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @IsAuthenticated
    @GetMapping("all")
    @ResponseBody
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.of(Optional.of(userService.getAllUsers()));
    }

    @IsAuthenticated
    @GetMapping("{id}")
    @ResponseBody
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        return ResponseEntity.of(Optional.of(userService.getUserById(id)));
    }

    @IsAuthenticated
    @PostMapping
    @ResponseBody
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @IsAuthenticated
    @PutMapping("{id}")
    @ResponseBody
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @IsAuthenticated
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id) {
        boolean deleted = userService.deleteUser(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
