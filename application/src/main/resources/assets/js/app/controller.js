define([
    'backbone',
    'marionette'
], function(Backbone, Marionette) {
    'use strict';

    var Controller = Marionette.Controller.extend({
        initialize: function(options) {
            this.app = options.app;
        },

        navigateHome: function() {
            Backbone.history.navigate('/');
            console.log('controller: navigateHome');
            app.vent.trigger('navigate:home');
        },

        navigateGreeting: function() {
            Backbone.history.navigate('/greeting');
            console.log('controller: navigateGreeting');
            app.vent.trigger('navigate:greeting');
        }
    });

    return Controller;
});
