define([
    'marionette',
    'text!app/view/greeting.mustache'
], function(Marionette, greetingTemplate) {
    var GreetingView = Marionette.ItemView.extend({
        template: greetingTemplate,

        events: {
            'click button.doGreet': 'onGreet'
        },

        initialize: function(options) {
            console.log('GreetingView#initialize');
        },

        onGreet: function() {
            var name = this.$('.name').val();
            console.log('Greeting ' + name);
        }
    });

    return GreetingView;
});
