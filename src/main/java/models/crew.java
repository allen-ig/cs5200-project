package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
public class crew {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "movie_id")
    private movie movie;

    private String name;
    private Date birth_year;
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public edu.northeastern.cs5200.models.movie getMovie() {
        return movie;
    }

    public void setMovie(edu.northeastern.cs5200.models.movie movie) {
        this.movie = movie;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirth_year() {
        return birth_year;
    }

    public void setBirth_year(Date birth_year) {
        this.birth_year = birth_year;
    }
}
