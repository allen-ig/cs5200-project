package server.controller;

import server.dao.MovieDao;
import server.dao.MovieImp;
import server.models.User;
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