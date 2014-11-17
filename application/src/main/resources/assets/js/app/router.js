define([
    'marionette',
], function(Marionette) {
    'use strict';

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '':         'navigateHome',
            'about':    'navigateAbout'
        },

        onRoute: function(name, path, routeArgs) {
            console.log('onRoute: name(' + name + '), path(' + path + ')');
        }
    });

    return Router;
});
