define([
    'marionette',
    'text!app/view/header.mustache'
], function(Marionette, headerTemplate) {
    'use strict';

    var HeaderView = Marionette.ItemView.extend({
        template: headerTemplate
    });

    return HeaderView;
});
