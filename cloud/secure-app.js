

// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

var Pusher = require('cloud/pusher.js');
var pusher = new Pusher({ appId: "XXXXXXXXX", key: "XXXXXXXXXXX", secret: "XXXXXXXXXXXXXX"});

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body


// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/hello', function(req, res) {
    res.render('hello', { message: 'Congrats, you just set up your app!' });
    pusher.trigger( 'my-channel', 'my-event', { message: "hello world" } );

});


// server always listening? If the server hears an event triggered, then it saves?
// Or is all saving done on the javascript end? I think it should be done 
// server side. Server side 




// // Example reading from the request body of an HTTP post request.
app.post('/test', function(req, res) {
    //  POST http://example.parseapp.com/test (with request body "message=hello")
    var msg = req.body.message;
    console.log("msg=" + msg);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Thank you.' + msg);
    res.end();
    //     res.send(req.body.message);
    //     res.json({ message: req.body.message });
    pusher.trigger( "private-my-channel", 'Message', req.body);
});


app.post( '/pusher/auth', function( req, res ) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var auth = pusher.auth( socketId, channel );
    res.send( auth );
} );

// Example reading from the request query string of an HTTP get request.
app.get('/pusher/auth', function(req, res) {
    // GET http://example.parseapp.com/test?message=hello
    res.writeHead(200, {'Content-Type': 'application/json'});
    var url = require('url');c
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var socketId = query["socket_id"];
    var channel = query["channel_name"];
    var auth = pusher.auth( socketId, channel );
    var content = query['callback'] + "(" + JSON.stringify(auth) + ")";
    res.write(content);
    res.end();
});

// Attach the Express app to Cloud Code.
app.listen(); 

