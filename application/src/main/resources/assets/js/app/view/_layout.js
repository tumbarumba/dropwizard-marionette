define([
    'marionette',
    'text!app/view/_layout.mustache'
], function(Marionette, layoutTemplate) {
    var LayoutView = Marionette.LayoutView.extend({
        template: layoutTemplate,

        regions: {
            navigationRegion:   '.js-navigation-region',
            headerRegion:       '.js-header-region',
            contentRegion:      '.js-content-region'
        }
    });

    return LayoutView;
});
