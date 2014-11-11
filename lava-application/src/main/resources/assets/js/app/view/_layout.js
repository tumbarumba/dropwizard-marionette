define([
    'marionette',
    'text!app/view/_layout.mustache'
], function(Marionette, mustacheTemplate) {
    var LayoutView = Marionette.LayoutView.extend({
        template: mustacheTemplate
    });

    return LayoutView;
});
