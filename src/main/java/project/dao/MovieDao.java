package project.dao;

import project.models.*;

public interface MovieDao {
    public void truncateDatabase();
    public User createUser(User user);
    public Manager creatManager(Manager manager);
    public Movie createMovie(Movie movie);
    public Crew createMovie(Crew crew);
    public Review createReview(Review review);
    public User addReviewtoUser(Review review, User user);

}
