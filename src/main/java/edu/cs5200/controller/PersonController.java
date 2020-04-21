package edu.cs5200.controller;

import edu.cs5200.models.Person;
import edu.cs5200.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping("/api/person/username/{username}")
    public Person findPersonByUsername(@PathVariable String username){
        return personRepository.findPersonByUsername(username);
    }
}
