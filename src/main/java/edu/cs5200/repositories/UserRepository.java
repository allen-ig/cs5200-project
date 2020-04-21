package edu.cs5200.repositories;

import edu.cs5200.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

}
