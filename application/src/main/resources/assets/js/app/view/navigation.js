define([
    'marionette',
    'text!app/view/navigation.mustache'
], function(Marionette, navigationTemplate) {
    'use strict';

    var NavigationView = Marionette.ItemView.extend({
        template: navigationTemplate,

        events: {
            'click a.home':     'navigateHome',
            'click a.greeting': 'navigateGreeting'
        },

        initialize: function(options) {
            this.controller = options.controller;
        },

        navigateHome: function(event) {
            event.preventDefault();
            this.controller.navigateHome();
        },

        navigateGreeting: function(event) {
            event.preventDefault();
            this.controller.navigateGreeting();
        }

    });

    return NavigationView;
});
