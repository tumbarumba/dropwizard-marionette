define([
    'marionette',
    'text!app/view/navigation.mustache'
], function(Marionette, navigationTemplate) {
    var NavigationView = Marionette.ItemView.extend({
        template: navigationTemplate,

        events: {
            'click a.home':     'navigateHome',
            'click a.about':    'navigateAbout'
        },

        initialize: function(options) {
            this.controller = options.controller;
        },

        navigateHome: function(event) {
            event.preventDefault();
            this.controller.gotoHome();
        },

        navigateAbout: function(event) {
            event.preventDefault();
            this.controller.gotoAbout();
        }

    });

    return NavigationView;
});
