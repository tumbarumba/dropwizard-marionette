package com.exubero.lava;

import com.exubero.lava.health.TemplateHealthCheck;
import com.exubero.lava.resources.HelloWorldResource;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class LavaApplication extends Application<LavaConfiguration> {
    public static void main(String[] args) throws Exception{
        new LavaApplication().run(args);
    }

    @Override
    public String getName() {
        return "lava";
    }

    @Override
    public void initialize(Bootstrap<LavaConfiguration> bootstrap) {

    }

    @Override
    public void run(LavaConfiguration configuration, Environment environment) throws Exception {
        final TemplateHealthCheck healthCheck = new TemplateHealthCheck(configuration.getTemplate());
        final HelloWorldResource resource = new HelloWorldResource(
                configuration.getTemplate(), configuration.getDefaultName());

        environment.healthChecks().register("template", healthCheck);
        environment.jersey().register(resource);
    }


}
