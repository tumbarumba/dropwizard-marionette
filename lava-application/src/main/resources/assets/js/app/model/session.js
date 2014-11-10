define([
    'backbone'
], function(Backbone) {
    var SessionModel = Backbone.Model.extend({
        urlRoot: '/api/session',
        initialize: function () {
            var that = this;

            // Hook into jquery
            // Use withCredentials to send the server cookies
            // The server must allow this through response headers
            $.ajaxPrefilter(function( options, originalOptions, jqXHR) {
                options.xhrFields = {
                    withCredentials: true
                };
            });
        },

        login: function(creds) {
            // Do a POST to /api/session and send the serialized form creds
            var that = this;
            this.save(creds, {
                success: function (model, resp) {
                    if (resp.success == false) {
                        alert(resp.message);
                    }
                    that.unset('password');
                    that.set(resp.data);
                }
            });
        },

        logout: function() {
            // Do a DELETE to /api/session and clear the client side data
            var that = this;
            this.destroy({
                success: function (model, resp) {
                    model.clear({silent:true});

                    // Set auth to false to trigger a change:logged_in event
                    // The server also returns a new csrf token so that
                    // the user can relogin without refreshing the page
                    that.set({logged_in: false});
                }
            });
        },

        getAuth: function(callback) {
            // getAuth is wrapped around our router
            // before we start any routers let us see if the user is valid
            this.fetch({
                success: callback
            });
        }
  });

  return new SessionModel;
});
