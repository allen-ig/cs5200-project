package edu.cs5200.controller;

import edu.cs5200.models.Movie;
import edu.cs5200.models.Person;
import edu.cs5200.models.Review;
import edu.cs5200.models.User;
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

    @PostMapping("/api/review/{userId}/create")
    public void createReview(
            @PathVariable int userId,
            @RequestBody Movie movie){
        Optional<User> p = userRepository.findById(userId);
        User user = null;
        if (p.isPresent()) {
            user = p.get();
        }
        Review review1 = new Review();
        review1.setUser(user);
//        reviewRepository.save(review);
    }

    @GetMapping("/api/review/all/{movieId}")
    public List<Movie> findAllReviewsForMovie(@PathVariable String movieId){
        List<Movie> res = new ArrayList<>();

        return res;
    }
}
