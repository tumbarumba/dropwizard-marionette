define([
    'backbone',
    'marionette',
    'app/router',
    'app/controller',
    'app/auth',
    'app/view/_layout',
    'app/view/navigation',
    'app/view/header',
    'app/view/home',
    'app/view/greeting'
], function(Backbone, Marionette, Router, Controller, auth, LayoutView, NavigationView, HeaderView, HomeView, GreetingView) {
    'use strict';

    var app = new Marionette.Application();

    app.auth = auth;
    app.auth.getAuth(function() { console.log('Auth successful'); },
                     function() { console.log('Auth failed'); });

    app.addRegions({
        wrapper: '.js-app-wrapper'
    });

    app.addInitializer(function() {
        var controller = new Controller({app: app}),
            layoutView = new LayoutView();

        // start our router
        new Router({controller: controller});

        app.on('start', function(options) {
            app.wrapper.show(layoutView);
            layoutView.navigationRegion.show(new NavigationView({controller: controller}));
            layoutView.headerRegion.show(new HeaderView());
            layoutView.contentRegion.show(new HomeView());

            // start our backbone history for our router
            Backbone.history.start({pushState: true});
        });

        app.vent.on('navigate:home', function() {
            layoutView.contentRegion.show(new HomeView());
        });

        app.vent.on('navigate:greeting', function() {
            layoutView.contentRegion.show(new GreetingView());
        });

    });

    return app;
});
