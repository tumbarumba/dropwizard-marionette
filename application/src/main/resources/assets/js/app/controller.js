define([
    'marionette',
], function(Marionette) {
    var Controller = Marionette.Controller.extend({
        initialize: function(options) {
            this.app = options.app;
        },

        gotoHome: function() {
            console.log('controller: gotoHome');
        },

        gotoAbout: function() {
            console.log('controller: gotoAbout');
        }
    });

    return Controller;
});
