package edu.cs5200.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Movie {
    @javax.persistence.Id
    @Column(name = "id", length = 50, nullable = false)
    private String imdbId;
    private String name;
    private int year;
    private String language;
    private String genre;

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @OneToMany(mappedBy = "movie",cascade= CascadeType.MERGE)
    private List<Review> Reviews;

    @OneToMany(mappedBy = "movie",cascade= CascadeType.MERGE)
    private List<Crew> Crews;

    public List<Crew> getCrews() {
        return Crews;
    }

    public void setCrews(List<Crew> Crews) {
        this.Crews = Crews;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<Review> getReviews() {
        return Reviews;
    }

    public void setReviews(List<Review> Reviews) {
        this.Reviews = Reviews;
    }
}
