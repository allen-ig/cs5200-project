package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Entity

public class user extends person{
    private int grad_year;
    private float scholarship;
    @OneToMany(mappedBy = "user",cascade=CascadeType.MERGE)
    private List<user> users;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "recommender_id")
    private user user;

    @OneToMany(mappedBy = "user",cascade=CascadeType.MERGE)
    private List<review> reviews;

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

    public List<edu.northeastern.cs5200.models.user> getUsers() {
        return users;
    }

    public void setUsers(List<edu.northeastern.cs5200.models.user> users) {
        this.users = users;
    }

    public edu.northeastern.cs5200.models.user getUser() {
        return user;
    }

    public void setUser(edu.northeastern.cs5200.models.user user) {
        this.user = user;
    }
}
