package edu.cs5200.dao;

import edu.cs5200.models.*;
import edu.cs5200.repositories.MovieRepository;
import edu.cs5200.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import edu.cs5200.repositories.CrewRepository;
import edu.cs5200.repositories.PersonRepository;
import edu.cs5200.repositories.ReviewRepository;

public class MovieImp implements MovieDao {
    @Autowired
    CrewRepository crewRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    PersonRepository personRepository;
    @Autowired
    ReviewRepository reviewRepository;
    @Override
    public void truncateDatabase() {
        crewRepository.deleteAll();
        movieRepository.deleteAll();
        personRepository.deleteAll();
        reviewRepository.deleteAll();

    }

    @Override
    public User createUser(User user) {
        return personRepository.save(user);
    }

    @Override
    public Manager creatManager(Manager manager) {
        return personRepository.save(manager);
    }

    @Override
    public Movie createMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Crew createMovie(Crew crew) {
        return crewRepository.save(crew);
    }

    @Override
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public User addReviewtoUser(Review review, User user) {
        user.addReview(review);
        personRepository.save(user);
        return user;
    }

    private static MovieImp movieImp;
    public static MovieImp getInstance(){
        if (movieImp == null) movieImp = new MovieImp();
        return movieImp;
    }
}
