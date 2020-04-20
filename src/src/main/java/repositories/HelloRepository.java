package repositories;

import models.HelloObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelloRepository extends JpaRepository<HelloObject, Integer>{

}
