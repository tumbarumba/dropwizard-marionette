define([
    'marionette',
], function(Marionette) {
    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '':         'gotoHome',
            'about':    'gotoAbout'
        }
    });

    return Router;
});
