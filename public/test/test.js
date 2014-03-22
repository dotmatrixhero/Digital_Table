// (function() {

var User = Backbone.Model.extend({
    defaults : {
        id : 0
    },

    initialize : function () {
    }
});

var Message = Backbone.Model.extend({
    defaults : {
        text : "",
        from : 0,
        to   : [],
        hash : 0
    },

    initialize : function () {
    }
});

// var MessageView = Backbone.View.extend({
//     tagName : "li",
//     initialize : function () {
//
//     }
// });

var Chat = Backbone.Collection.extend({
    model : Message
});

var ChatView = Backbone.View.extend({
    el : $("section#chat"),

    events : {
        'click button#add' : 'messageClick',
        'keypress input#message' : 'messageEnter'
    },

    initialize : function () {
        this.collection = new Chat();
        this.collection.bind('add', this.appendToList);

        this.pusher  = new Pusher('3c7da757d0d8da6f399e', { encrypted : true,
                                                            authTransport : 'jsonp',
                                                            authEndpoint: 'http://digitaltable.parseapp.com/pusher/auth'});
        this.pusher.connection.bind('error', function(err) { 
            console.log("Connection Error");
        });
        console.log(this.pusher.connection.state);

        this.channel = this.pusher.subscribe('private-my-channel');
        this.channel.bind('pusher:subscription_succeeded', function() {
            console.log("Subscription Success!");
        });
        this.channel.bind('pusher:subscription_error', function(status) {
            if(status == 408 || status == 503){
                console.log("Subscription Error");
            }
        });
        console.log(this.channel.pusher.connection.state);

        this.channel.bind('my-event', _.bind(this.pullMessage, this));
        this.render();

        // Remember to unsubscribe
    },

    render : function () {
        $(this.el).append($("<ul>"));
        $(this.el).append($("<input>").attr("id", "message"));
        $(this.el).append($("<button>").attr("id", "add")
                                       .text("Chat"));
    },

    messageClick : function () {
        this.addMessage();
    },

    messageEnter : function (e) {
        if (e.which === 13)
        {
            this.addMessage();
        }
    },

    addMessage : function () {
        var input = $("input", this.el);
        var inputText = input.val();

        if (inputText.length)
        {
            var message = new Message({ text : inputText });
            this.collection.add(message);

            // Post it Live!
            $.post("http://digitaltable.parseapp.com/test", {"message" : inputText});
        }

        input.val("");
    },

    pullMessage : function(data) {
        var message = new Message({ text : data.message });
        this.appendToList(message);
    },

    appendToList : function (message) {
        $("ul", this.el).append($("<li>").text(message.get("text")));
    }
});

var chatView = new ChatView;

// })();
