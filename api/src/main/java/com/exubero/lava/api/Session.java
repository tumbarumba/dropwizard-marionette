package com.exubero.lava.api;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Session {
    private long id;
    private String name;

    public Session() {
        // Jackson serialization
    }

    public Session(long id, String name) {
        this.id = id;
        this.name = name;
    }

    @JsonProperty
    public long getId() {
        return id;
    }

    @JsonProperty
    public String getName() {
        return name;
    }

}
