package edu.cs5200.controller;

import edu.cs5200.dao.MovieDao;
import edu.cs5200.dao.MovieImp;
import edu.cs5200.models.Movie;
import edu.cs5200.models.User;
import edu.cs5200.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
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

    @PutMapping("/api/movie/{movieId}/update")
    public void updateMovie(@PathVariable String movieId,
                            @RequestBody Movie movie){
        Movie temp = movieRepository.findById(movieId).get();
        temp.setLanguage(movie.getLanguage());
        temp.setName(movie.getName());
        temp.setYear(movie.getYear());
        temp.setImdbId(movieId);
        movieRepository.save(temp);
    }

    @GetMapping("/api/movie/all")
    public List<Movie> findAllMovie(){
        Iterable<Movie> iterable = movieRepository.findAll();
        List<Movie> res = new ArrayList<>();
        for (Movie movie: iterable){
            res.add(movie);
        }
        return res;
    }
}