define([
    'marionette',
    'text!app/view/home.mustache',
    'app/model/hello'
], function(Marionette, homeTemplate) {
    'use strict';

    var HomeView = Marionette.LayoutView.extend({
            template: homeTemplate
        });

    return HomeView;
});
