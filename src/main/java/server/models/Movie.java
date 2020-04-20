package server.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Movie {
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
    private List<Review> Reviews;

    @OneToMany(mappedBy = "movie",cascade= CascadeType.MERGE)
    private List<Crew> Crews;

    public List<Crew> getCrews() {
        return Crews;
    }

    public void setCrews(List<Crew> Crews) {
        this.Crews = Crews;
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

    public List<Review> getReviews() {
        return Reviews;
    }

    public void setReviews(List<Review> Reviews) {
        this.Reviews = Reviews;
    }
}
