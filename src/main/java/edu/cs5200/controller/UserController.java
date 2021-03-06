package edu.cs5200.controller;

import edu.cs5200.models.Movie;
import edu.cs5200.models.User;
import edu.cs5200.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/user/create")
    public void createUser(@RequestBody User user){
        userRepository.save(user);
    }

    @DeleteMapping("/api/user/{userId}/delete")
    public void deleteUser(@PathVariable int userId){
        userRepository.deleteById(userId);
    }

    @GetMapping("/api/user/{userId}")
    public User findUserById(@PathVariable int userId){
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.orElse(null);
    }

    @GetMapping("/api/user/username/{username}")
    public User findUserByUsername(@PathVariable String username){
        return userRepository.findUserByUsername(username);
    }

    @GetMapping("/api/user/all")
    public List<User> findAllUsers(){
        Iterable<User> iterable = userRepository.findAll();
        List<User> res = new ArrayList<>();
        for (User user: iterable){
            res.add(user);
        }
        return res;
    }

    @PatchMapping("/api/user/{userId}/update")
    public void updateUser(@PathVariable int userId,
                            @RequestBody User user){
        User temp = userRepository.findById(userId).get();
        temp.setFirstname(user.getFirstname());
        temp.setLastname(user.getLastname());
        temp.setUsername(user.getUsername());
        temp.setPassword(user.getPassword());
        userRepository.save(temp);
    }

    @GetMapping("/api/user/recommenders/{userId}")
    public List<User> findAllRecommenders(@PathVariable int userId){
        Optional<User> optionalUser = userRepository.findById(userId);
        User user = optionalUser.orElse(null);
        return userRepository.findAllRecommenderForUser(user);
    }

    @PostMapping("/api/user/create/{recommender_id}")
    public void createUserByRecommendation(
            @PathVariable int recommender_id,
            @RequestBody User user){
        Optional<User> optionalUser = userRepository.findById(recommender_id);
        User temp = optionalUser.get();
        user.setUser(temp);
        userRepository.save(user);
    }
}
