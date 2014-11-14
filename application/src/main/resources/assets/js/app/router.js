define([
    'marionette',
], function(Marionette) {
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
