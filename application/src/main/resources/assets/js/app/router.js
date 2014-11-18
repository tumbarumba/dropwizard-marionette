define([
    'marionette',
], function(Marionette) {
    'use strict';

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '':         'navigateHome',
            'greeting': 'navigateGreeting'
        },

        onRoute: function(name, path, routeArgs) {
            console.log('onRoute: name(' + name + '), path(' + path + ')');
        }
    });

    return Router;
});
