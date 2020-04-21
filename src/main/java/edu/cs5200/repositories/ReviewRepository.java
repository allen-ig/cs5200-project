package edu.cs5200.repositories;

import edu.cs5200.models.Movie;
import edu.cs5200.models.Review;
import edu.cs5200.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends CrudRepository<Review,Integer> {
    @Query("select r from Review r where r.user=:user")
    public List<Review> findReviewByUser(@Param("user") User user);

    @Query("select r from Review r where r.movie=:movie")
    public List<Review> findReviewByMovie(@Param("movie") Movie movie);
}
