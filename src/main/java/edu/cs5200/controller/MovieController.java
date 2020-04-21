package edu.cs5200.controller;

import edu.cs5200.dao.MovieDao;
import edu.cs5200.dao.MovieImp;
import edu.cs5200.models.Movie;
import edu.cs5200.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class MovieController {
    MovieDao movieDao = MovieImp.getInstance();

    @Autowired
    MovieRepository movieRepository;

    @PostMapping("/api/movie/create")
    public void createMovie(@RequestBody Movie movie){
        movie.setImdbId(movie.getImdbId());
        movieRepository.save(movie);
    }

    @DeleteMapping("/api/movie/{movieId}/delete")
    public void deleteMovie(@PathVariable String movieId){
        movieRepository.deleteById(movieId);
    }

    @GetMapping("/api/movie/{movieId}")
    public Movie findMovieById(@PathVariable String movieId){
        Optional<Movie> optionalMovie = movieRepository.findById(movieId);
        return optionalMovie.orElse(null);
    }
}