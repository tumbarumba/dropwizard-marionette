define([
    'backbone',
    'marionette'
], function(Backbone, Marionette) {
    var Controller = Marionette.Controller.extend({
        initialize: function(options) {
            this.app = options.app;
            this.addressBar = new Backbone.Router();
        },

        navigateHome: function() {
            this.addressBar.navigate('/');
            console.log('controller: navigateHome');
        },

        navigateAbout: function() {
            this.addressBar.navigate('/about');
            console.log('controller: navigateAbout');
        }
    });

    return Controller;
});
