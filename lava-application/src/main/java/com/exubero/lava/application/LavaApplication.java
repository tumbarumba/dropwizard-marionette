package com.exubero.lava.application;

import com.codahale.metrics.health.HealthCheckRegistry;
import com.exubero.lava.application.health.TemplateHealthCheck;
import com.exubero.lava.application.resources.HelloWorldResource;
import com.exubero.lava.application.resources.SessionResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.jersey.setup.JerseyEnvironment;
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
        bootstrap.addBundle(new AssetsBundle("/assets", "/", "index.html"));
    }

    @Override
    public void run(LavaConfiguration configuration, Environment environment) throws Exception {
        configureHealthChecks(configuration, environment.healthChecks());
        configureResources(configuration, environment.jersey());
    }

    private void configureHealthChecks(LavaConfiguration configuration, HealthCheckRegistry healthCheckRegistry) {
        final TemplateHealthCheck healthCheck = new TemplateHealthCheck(configuration.getTemplate());
        healthCheckRegistry.register("template", healthCheck);
    }

    private void configureResources(LavaConfiguration config, JerseyEnvironment jersey) {
        jersey.setUrlPattern("/api/*");
        jersey.register(new HelloWorldResource(config.getTemplate(), config.getDefaultName()));
        jersey.register(new SessionResource());
    }

}
