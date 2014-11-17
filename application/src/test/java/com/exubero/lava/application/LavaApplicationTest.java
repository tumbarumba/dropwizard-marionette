package com.exubero.lava.application;

import com.codahale.metrics.health.HealthCheckRegistry;
import io.dropwizard.jersey.setup.JerseyEnvironment;
import io.dropwizard.setup.Environment;
import org.junit.Test;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class LavaApplicationTest {
    @Test public void
    handlesResources() throws Exception {
        final Environment         environment   = mock(Environment.class);
        final JerseyEnvironment   jersey        = mock(JerseyEnvironment.class);
        final HealthCheckRegistry healthChecks  = mock(HealthCheckRegistry.class);

        final LavaConfiguration config = new LavaConfiguration();
        final LavaApplication application = new LavaApplication();

        when(environment.jersey()).thenReturn(jersey);
        when(environment.healthChecks()).thenReturn(healthChecks);

        application.run(config, environment);

        verify(jersey, times(3)).register(any(Object.class));
    }
}
