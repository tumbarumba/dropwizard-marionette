package com.exubero.lava.application.resources;

import com.google.common.io.Resources;
import com.sun.jersey.api.NotFoundException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.net.URL;
import java.nio.charset.Charset;

@Path("/")
@Produces(MediaType.TEXT_HTML)
public class ApplicationHtmlResource {

    @GET
    public String root() {
        return applicationHtml();
    }

    @GET @Path("about")
    public String about() {
        return applicationHtml();
    }

    public String applicationHtml() {
        try {
            return Resources.toString(htmlResourceUrl(), Charset.forName("UTF-8"));
        } catch (IOException e) {
            throw new WebApplicationException(e);
        }
    }

    private URL htmlResourceUrl() {
        URL url = getClass().getResource("/assets/application.html");
        if (url == null) {
            throw new NotFoundException("application.html missing");
        }
        return url;
    }
}
