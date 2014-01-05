$(document).ready(function(){
 var domain = "http://digitaltable.parseapp.com";
 window.fbAsyncInit = function() {
  FB.init({
    appId      : 235511756631747,
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

     FB.getLoginStatus(function(response) {
	 if (response.status === 'connected') {
	     loadPersonalInfo();
	 } else if (response.status === 'not_authorized') {
     	      window.location.replace(domain);

	 } else {
     	      window.location.replace(domain);	     
	 }

	 
     });

 };   
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
       var name;
       FB.api('/me', function(response) {
	   name = response.name;
	   $("h2").html("Hey, " + name + "!");
       });
       updateNews();
       updateNotifications();
   }

    function updateNews() {
	var box = $("<div class='personal-box' id='news'></div>");
	box.html("News");
	$("#personal").append(box);
	box.fitText(1.3);

    }
    
    function updateNotifications() {
	

    }
 

});

