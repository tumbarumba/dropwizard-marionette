define([
    'backbone'
], function(Backbone) {
    var HelloModel = Backbone.Model.extend({
        urlRoot: '/api/hello',

        initialize: function (options) {
            this.name = options.name;
        },

        url: function() {
            return this.urlRoot + '/' + this.name;
        }
    });

  return new HelloModel;
});
