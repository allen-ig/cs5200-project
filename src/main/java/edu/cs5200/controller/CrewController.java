package edu.cs5200.controller;

import edu.cs5200.models.Crew;
import edu.cs5200.models.Movie;
import edu.cs5200.repositories.CrewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class CrewController {
    @Autowired
    CrewRepository crewRepository;

    @PostMapping("/api/crew/create")
    public void createCrew(@RequestBody Crew crew){
        crewRepository.save(crew);
    }

    @DeleteMapping("/api/crew/{crewId}/delete")
    public void deleteCrew(@PathVariable int crewId){
        crewRepository.deleteById(crewId);
    }

    @GetMapping("/api/crew/{crewId}")
    public Crew findCrewById(@PathVariable int crewId) {
        Optional<Crew> optionalCrew = crewRepository.findById(crewId);
        return optionalCrew.orElse(null);
    }

    @PutMapping("/api/user/{crewId}/update")
    public void updateMovie(@PathVariable int crewId,
                            @RequestBody Crew crew){
        crewRepository.save(crew);
    }
}
