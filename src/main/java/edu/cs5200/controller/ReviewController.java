package edu.cs5200.controller;

import edu.cs5200.models.Movie;
import edu.cs5200.models.Person;
import edu.cs5200.models.Review;
import edu.cs5200.models.User;
import edu.cs5200.repositories.MovieRepository;
import edu.cs5200.repositories.PersonRepository;
import edu.cs5200.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.cs5200.repositories.ReviewRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    @PostMapping("/api/review/{userId}/{movieId}/create")
    public void createReview(
            @PathVariable int userId,
            @PathVariable String movieId,
            @RequestBody Review review){
        Optional<User> p = userRepository.findById(userId);
        Optional<Movie> optionalMovie = movieRepository.findById(movieId);
        User user = null;
        Movie movie = null;
        if (p.isPresent() && optionalMovie.isPresent()) {
            user = p.get();
            movie = optionalMovie.get();
        }
        review.setUser(user);
        review.setMovie(movie);
        reviewRepository.save(review);
    }

    @GetMapping("/api/reviews/all/movie/{movieId}")
    public List<Review> findAllReviewsForMovie(@PathVariable String movieId){
        Optional<Movie> optionalMovie = movieRepository.findById(movieId);
        List<Review> res = new ArrayList<>();
        if (optionalMovie.isPresent()){
            res = reviewRepository.findReviewByMovie(optionalMovie.get());
        }
        return res;
    }

    @GetMapping("/api/reviews/all/user/{userId}")
    public List<Review> findAllReviewsForUser(@PathVariable Integer userId){
        Optional<User> optionalUser = userRepository.findById(userId);
        List<Review> res = new ArrayList<>();
        if (optionalUser.isPresent()){
            res = reviewRepository.findReviewByUser(optionalUser.get());
        }
        return res;
    }
}
