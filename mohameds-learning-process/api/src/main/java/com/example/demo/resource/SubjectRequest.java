package com.example.demo.resource;

public class SubjectRequest {
    private String name;
    private String description;
    private String note;
    private String imageUrl;

    public SubjectRequest(){

    }

    public SubjectRequest(String name) {
        this.name = name;
    }

    public SubjectRequest(String name, String description, String note, String imageUrl) {
        this.name = name;
        this.description = description;
        this.note = note;
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public String getNote(){
        return note;
    }
    public void setNote(String note){this.note = note;}

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
