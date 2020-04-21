package edu.cs5200.controller;

import edu.cs5200.dao.MovieDao;
import edu.cs5200.dao.MovieImp;
import edu.cs5200.models.User;
import edu.cs5200.repositories.MovieRepository;
import edu.cs5200.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {
    MovieDao movieDao = MovieImp.getInstance();

    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/api/test")
    public String createUser(){
        return "hello";
    }
}