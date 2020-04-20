package edu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity

public class User extends Person {
    private int grad_year;
    private float scholarship;
    @OneToMany(mappedBy = "user",cascade=CascadeType.MERGE)
    private List<User> Users;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "recommender_id")
    private User user;

    @OneToMany(mappedBy = "user",cascade=CascadeType.MERGE)
    private List<Review> Reviews;

//    @ManyToOne(fetch = FetchType.EAGER,optional = true,cascade = CascadeType.ALL)
//    @JsonIgnore
//    @JoinColumn(name = "section_id")
//    private section section;


    public int getGrad_year() {
        return grad_year;
    }

    public void setGrad_year(int grad_year) {
        this.grad_year = grad_year;
    }

    public float getScholarship() {
        return scholarship;
    }

    public void setScholarship(float scholarship) {
        this.scholarship = scholarship;
    }

    public List<User> getUsers() {
        return Users;
    }

    public void setUsers(List<User> Users) {
        this.Users = Users;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Review> getReviews() {
        return Reviews;
    }

    public void setReviews(List<Review> reviews) {
        Reviews = reviews;
    }

    public void addReview(Review review){
        this.Reviews.add(review);
        if (review.getUser()!=this){
            review.setUser(this);
        }
    }

}
