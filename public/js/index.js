$(document).ready(function(){
var domain = "http://digitaltable.parseapp.com";
  
 window.fbAsyncInit = function() {
  FB.init({
    appId      : 235511756631747,
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

      FB.Event.subscribe('auth.authResponseChange', function(response) {
	  if (response.status === 'connected') {
	      $("#fb-login").remove();
	      window.location.replace(domain + "/home.html");
	  } else if (response.status === 'not_authorized') {
	      FB.login();
	  } else {
	      FB.login();
	  }
      });
  };

    $("#personal").append('<button id="fb-login" type="button" class="btn btn-danger personal-box">Log in with Facebook</button>');

    $("#fb-login").click(function(){FB.login()});
    

  // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));
    

    $("h1").fitText(.8);
    $("h2").fitText(1.6);
    $("#fb-login").fitText(1);

	
});

