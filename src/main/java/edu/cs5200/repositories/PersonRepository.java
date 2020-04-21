package edu.cs5200.repositories;

import edu.cs5200.models.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PersonRepository extends CrudRepository<Person,Integer> {
    @Query("select p from Person p where p.username=:username")
    public Person findPersonByUsername(@Param("username") String username);
}
