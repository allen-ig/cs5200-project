package edu.cs5200.repositories;

import edu.cs5200.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("select u.Users from User u where u.user=:user")
    public List<User> findAllRecommenderForUser(@Param("user") User user);

    @Query("select u from User u where u.username=:username")
    public User findUserByUsername(@Param("username") String username);
}
