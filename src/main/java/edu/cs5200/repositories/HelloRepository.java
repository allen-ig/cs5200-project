package edu.cs5200.repositories;

import edu.cs5200.models.HelloObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelloRepository extends JpaRepository<HelloObject, Integer>{

}
