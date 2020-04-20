package edu.cs5200.controller;

import edu.cs5200.dao.MovieDao;
import edu.cs5200.dao.MovieImp;
import edu.cs5200.models.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {
    MovieDao movieDao = MovieImp.getInstance();

    @PostMapping("/api/user/create")
    public void createUser(@RequestBody User user){
        movieDao.createUser(user);
    }

    @GetMapping("/api/test")
    public String createUser(){
        return "hello";
    }
}