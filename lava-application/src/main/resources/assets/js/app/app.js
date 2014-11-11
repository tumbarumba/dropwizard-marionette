define([
    'backbone',
    'marionette',
    'app/router',
    'app/controller',
    'app/auth',
    'app/view/_layout'
], function(Backbone, Marionette, Router, Controller, auth, Layout) {
    var app = new Marionette.Application();

    app.auth = auth;
    app.auth.getAuth(function() {console.log("Auth successful")},
                     function() {console.log("Auth failed")});

    app.addRegions({
        container: 'body > .container'
    });

    app.addInitializer(function() {
        // start our router
        new Router({controller: new Controller(app)});

        app.on("start", function(options) {
            var layout = new Layout();
            app.container.show(layout);
        });

        // start our backbone history for our router
        if (Backbone.history){
          Backbone.history.start({pushState: true});
        }
    });

    return app;
});
