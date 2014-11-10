define([
    'marionette',
    'app/router',
    'app/controller',
    'app/view/_layout'
], function(Marionette, Router, Controller, Layout) {
    var App = new Marionette.Application();

    App.Auth = Auth;
    App.Auth.getAuth();

    App.addRegions({
        wrapper: '#wrapper'
    });

    App.addInitializer(function() {
        // start our router
        new Router({controller: Controller.initialize(App)});

        App.bind("initialize:after", function(options) {
            var layout = new Layout();
            App.wrapper.show(layout);
        });

        // start our backbone history for our router
        if (Backbone.history){
          Backbone.history.start({pushState: true});
        }
    });

    return App;
});
