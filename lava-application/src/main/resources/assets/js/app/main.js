require.config({
    baseUrl: 'js',
    paths: {
        jquery:     'lib/jquery-1.11.1.min',
        underscore: 'lib/underscore-1.7.0.min',
        backbone:   'lib/backbone-1.1.2-min',
        marionette: 'lib/backbone.marionette.umd-2.2.0.min',
        handlebars: 'lib/handlebars-2.0.0',
        text:       'lib/require-2.0.12'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        handlebars: {
            deps: ['jquery', 'marionette'],
            exports: 'Handlebars'
        }
    },
    urlArgs: '_=' + (new Date().getTime())
});

require([
    'underscore',
    'marionette',
    'handlebars',
    'app/app'
], function(_, Marionette, Handlebars, App) {

    // setup our templates to use curly braces
    _.templateSettings = {
        evaluate : /\{\[([\s\S]+?)\]\}/g,
        interpolate : /\{\{([\s\S]+?)\}\}/g
    };

    // enables loading templates using ajax.
    Marionette.TemplateCache.prototype.loadTemplate = function(templateId, callback) {
        var template = templateId;

        // Make sure we have a template before trying to compile it
        if (!template || template.length === 0) {
            var msg = "Could not find template: '" + templateId + "'";
            var err = new Error(msg);
            err.name = "NoTemplateError";
            throw err;
        }
        return template;
    };

    // enables handlebars as our template library
    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };

    // handlebars helper dateFormat (momentjs)
    Handlebars.registerHelper('dateFormat', function(context, block) {
        if (window.moment) {
            var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
            return moment(context).format(f); //had to remove Date(context)
        } else {
            return context;   //  moment plugin not available. return data as is.
        };
    });

    App.Auth.on('change', _.once(function(){
        App.start();
    }));
});
