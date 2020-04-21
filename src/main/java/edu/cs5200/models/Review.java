package edu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;
    @Enumerated
    private Emotion emotion;
    private Float rate;
    private String text;
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Emotion getEmotion() {
        return emotion;
    }

    public void setEmotion(Emotion emotion) {
        this.emotion = emotion;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
    public void addAuthor(User user){
        this.user=user;
        if (!user.getReviews().contains(this)){
            user.getReviews().add(this);
        }
    }

    public Review(){}
}
