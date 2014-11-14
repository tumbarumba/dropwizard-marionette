package com.exubero.lava.application.resources.api;

import com.codahale.metrics.annotation.Timed;
import com.exubero.lava.api.Session;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.atomic.AtomicLong;

@Path("/api/session")
@Produces(MediaType.APPLICATION_JSON)
public class SessionResource {
    private final AtomicLong counter;

    public SessionResource() {
        this.counter = new AtomicLong();
    }

    @GET
    @Timed
    public Session getSession() {
        return new Session(counter.incrementAndGet(), "Tumbarumba Rodeo");
    }
}
