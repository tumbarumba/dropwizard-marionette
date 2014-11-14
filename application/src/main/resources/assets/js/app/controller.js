define([
    'backbone',
    'marionette'
], function(Backbone, Marionette) {
    var Controller = Marionette.Controller.extend({
        initialize: function(options) {
            this.app = options.app;
        },

        navigateHome: function() {
            Backbone.history.navigate('/');
            console.log('controller: navigateHome');
        },

        navigateAbout: function() {
            Backbone.history.navigate('/about');
            console.log('controller: navigateAbout');
        }
    });

    return Controller;
});
