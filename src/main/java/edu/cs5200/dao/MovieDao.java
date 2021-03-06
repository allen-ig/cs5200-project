package edu.cs5200.dao;

import edu.cs5200.models.*;
import edu.cs5200.models.*;

public interface MovieDao {
    public void truncateDatabase();
    public User createUser(User user);
    public Manager creatManager(Manager manager);
    public Movie createMovie(Movie movie);
    public Crew createMovie(Crew crew);
    public Review createReview(Review review);
    public User addReviewtoUser(Review review, User user);

}
