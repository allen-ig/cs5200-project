package server.controller;

import server.models.Movie;
import server.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.repositories.ReviewRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;

    @PostMapping("/api/review/create")
    public void createReview(@RequestBody Review review){
        reviewRepository.save(review);
    }

    @GetMapping("/api/review/all/{movieId}")
    public List<Movie> findAllReviewsForMovie(@PathVariable String movieId){
        List<Movie> res = new ArrayList<>();

        return res;
    }
}
