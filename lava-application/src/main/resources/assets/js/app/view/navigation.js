define([
    'marionette',
    'text!app/view/navigation.mustache'
], function(Marionette, navigationTemplate) {
    var NavigationView = Marionette.ItemView.extend({
        template: navigationTemplate
    });

    return NavigationView;
});
