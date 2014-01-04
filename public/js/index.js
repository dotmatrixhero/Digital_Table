$(document).ready(function(){
  
 var ready = 0;

 window.fbAsyncInit = function() {
  FB.init({
    appId      : 235511756631747,
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

/*  FB.getLoginStatus(function(response) {
     if (response.status === 'connected') {
	 $("#fb-login").remove();

	 loadPersonalInfo();

    } else if (response.status === 'not_authorized') {
	 $("#personal").append('<button id="fb-login" type="button" class="btn btn-danger personal-box">Log in with Facebook</button>');
	$("#fb-login").click(function(){FB.login()});

    } else {

	$("#personal").append('<button id="fb-login" type="button" class="btn btn-danger personal-box">Log in with Facebook</button>');
	$("#fb-login").click(function(){FB.login()});
	
    }*/

      FB.Event.subscribe('auth.authResponseChange', function(response) {
	  if (response.status === 'connected') {
	      window.location.replace("http://digitaltable.parseapp.com/home.html");
	     // loadPersonalInfo();
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

  // Here we run a very simple test of the Graph API after login is successful. 
  // This testAPI() function is only called in those cases. 
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
    });
  }

   function loadPersonalInfo() {
       $("#personal").append("<div class='personal-box'></div>");
       var box = $(".personal-box");
       var name;
       FB.api('/me', function(response) {
	   name = response.name;
	   box.html("Welcome, " + name + "!");
       });
   }

  

});

