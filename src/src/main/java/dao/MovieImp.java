package dao;

import models.*;
import org.springframework.beans.factory.annotation.Autowired;
import repositories.CrewRepository;
import repositories.MovieRepository;
import repositories.PersonRepository;
import repositories.ReviewRepository;

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
}
