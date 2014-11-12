define([
    'backbone',
    'marionette',
    'app/router',
    'app/controller',
    'app/auth',
    'app/view/_layout',
    'app/view/navigation',
    'app/view/header',
    'app/view/greeting'
], function(Backbone, Marionette, Router, Controller, auth, LayoutView, NavigationView, HeaderView, GreetingView) {
    var app = new Marionette.Application();

    app.auth = auth;
    app.auth.getAuth(function() {console.log("Auth successful")},
                     function() {console.log("Auth failed")});

    app.addRegions({
        wrapper: '.js-app-wrapper'
    });

    app.addInitializer(function() {
        var controller = new Controller({app: app});

        // start our router
        new Router({controller: controller});

        app.on("start", function(options) {
            var layoutView = new LayoutView();
            app.wrapper.show(layoutView);
            layoutView.navigationRegion.show(new NavigationView());
            layoutView.headerRegion.show(new HeaderView());
            layoutView.contentRegion.show(new GreetingView());
        });

        // start our backbone history for our router
        if (Backbone.history){
          Backbone.history.start({pushState: true});
        }
    });

    return app;
});
