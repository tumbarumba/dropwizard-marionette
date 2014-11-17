package com.exubero.lava.application.resources.api;

import com.codahale.metrics.annotation.Timed;
import com.exubero.lava.api.Saying;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.atomic.AtomicLong;

@Path("/api/hello")
@Produces(MediaType.APPLICATION_JSON)
public class HelloWorldResource {
    private final String template;
    private final String defaultName;
    private final AtomicLong counter;

    public HelloWorldResource(String template, String defaultName) {
        this.template = template;
        this.defaultName = defaultName;
        this.counter = new AtomicLong();
    }

    @GET
    @Timed
    public Saying sayHelloStranger() {
        return sayHelloFriend("stranger");
    }

    @GET
    @Path("{name}")
    @Timed
    public Saying sayHelloFriend(@PathParam("name") String name) {
        final String greeting = String.format(template, name);
        return new Saying(counter.incrementAndGet(), greeting);
    }

}
