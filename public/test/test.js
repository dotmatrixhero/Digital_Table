// (function() {

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

        this.pusher  = new Pusher('3c7da757d0d8da6f399e', { encrypted : true });
        this.channel = this.pusher.subscribe('my_channel');

        var self = this;
        this.channel.bind('my_event', function(data) {
            var message = new Message({ text : data.message });
            self.appendToList(message);
        });

        this.render();
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

    appendToList : function (message) {
        $("ul", this.el).append($("<li>").text(message.get("text")));
    }
});

var chatView = new ChatView;

  //   // Enable pusher logging - don't include this in production
  //   $(document).ready(function(){
  //   Pusher.log = function(message) {
  //   if (window.console && window.console.log) {
  //   window.console.log(message);
  //   }
  //   };

  //   var pusher = new Pusher('8bbfd60eceec4161e2a8');
  //   var channel = pusher.subscribe('test_channel');
  //   channel.bind('my_event', function(data) {
  //   alert(data.message);

  //   });

  //   $("#message").keyup(function (e) {
  //   if (e.keyCode == 13) {
  //   send();
  //   }
  //   });
  //   $("#chat").click(send);

  //   function send() {
  //   var text = $("#message").val();
  //   JSON.parse('{"message": "' + text + '" }');
  //   $.post("http://digitaltable.parseapp.com/test",text);
  //   }

  //   });

// })();
