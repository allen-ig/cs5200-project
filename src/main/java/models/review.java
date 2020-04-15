package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "movie_id")
    private movie movie;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private user user;

    private Float rate;
    private String text;


    public user getUser() {
        return user;
    }

    public void setUser(user user) {
        this.user = user;
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

    public review(){}
}
