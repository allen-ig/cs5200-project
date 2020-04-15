package edu.northeastern.cs5200.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class movie {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String name;
    private boolean is_adult;
    private String language;
    private String genre;

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @OneToMany(mappedBy = "movie",cascade= CascadeType.MERGE)
    private List<review> reviews;

    @OneToMany(mappedBy = "movie",cascade= CascadeType.MERGE)
    private List<crew> crews;

    public List<crew> getCrews() {
        return crews;
    }

    public void setCrews(List<crew> crews) {
        this.crews = crews;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isIs_adult() {
        return is_adult;
    }

    public void setIs_adult(boolean is_adult) {
        this.is_adult = is_adult;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<review> getReviews() {
        return reviews;
    }

    public void setReviews(List<review> reviews) {
        this.reviews = reviews;
    }
}
