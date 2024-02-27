package com.example.demo.pojo;

public class TheaterStatusRequest {
	
	private int status;

    // Constructor, getters, and setters
    public TheaterStatusRequest() {}

    public TheaterStatusRequest(int status) {
        this.status = status;
    }
    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

}
