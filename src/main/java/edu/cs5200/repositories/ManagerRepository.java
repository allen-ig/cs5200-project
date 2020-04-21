package edu.cs5200.repositories;

import edu.cs5200.models.Manager;
import org.springframework.data.repository.CrudRepository;

public interface ManagerRepository extends CrudRepository<Manager, Integer> {
}
