define([
    'marionette',
    'text!app/view/greeting.mustache',
    'app/model/hello'
], function(Marionette, greetingTemplate, HelloModel) {
    var HelloView = Marionette.ItemView.extend({
            model: HelloModel,
            template: '{{content}}',
            tagName: 'p',
            className: 'hello'
        }),
        GreetingView = Marionette.LayoutView.extend({
            template: greetingTemplate,

            events: {
                'click button.doGreet': 'onGreet'
            },

            regions: {
                messageRegion: '.js-message-region'
            },

            onGreet: function(event) {
                var name = this.$('.name').val(),
                    hello = new HelloModel({name: name}),
                    view = this;

                event.preventDefault();

                console.log('Looking to greet ' + name);
                hello.on('sync', function() {
                    console.log('Greeting received for ' + name);
                    view.messageRegion.show(new HelloView({model: hello}));
                });
                hello.fetch();
            }
        });

    return GreetingView;
});
