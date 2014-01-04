$(document).ready(function() {
    var domain = "http://digitaltable.parseapp.com";

    createHead("Digital Table");
    createNotConnectedBar();
    
    function createHead(title) {
	var first_div = $('<div/>', {
	     class: 'navbar-header'
	 }).appendTo("nav");
	
	var button = 
	    $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".bs-js-navbar-collapse">');
	
	$('<span>', {
	    class:'sr-only'
	}).html("Toggle navigation").appendTo(button);
	
	for(var x = 0; x < 3; x++) {
	    $('<span>', {
		class:'icon-bar'
	    }).appendTo(button);
	}
	
	button.appendTo(first_div);	
	
	$('<a>', {
	    id:'navbar-title',
	    href:'#',
	    class:'navbar-brand',
	    text:title
	}).appendTo(first_div);	 
    }

    function createNotConnectedBar() {
	var first_div = $('<div/>', {
	    class:'collapse navbar-collapse bs-js-navbar-collapse'
	});
	
	var list_head = $('<ul class="nav navbar-nav">');
	
	var home_list_element = $('<li>');
	
	var home_link = $("<a>", {
	    id:'home-link',
	    role:'button',
	    html:'Home',
	    href: domain
	});

	var about_list_element = $('<li>');
	
	var about_link = $("<a>", {
	    id:'about-link',
	    role:'button',
	    html:'About',
	    href: domain + "/about.html"
	});

	var contact_list_element = $('<li>');
	
	var contact_link = $("<a>", {
	    id:'contact-link',
	    role:'button',
	    html:'Contact',
	    href: domain + "/contact.html"
	});



	$("nav").append(first_div);
	first_div.append(list_head);
	list_head.append(home_list_element);
	home_list_element.append(home_link);
	list_head.append(about_list_element);
	about_list_element.append(about_link);
	list_head.append(contact_list_element);
	contact_list_element.append(contact_link);
    }


/*
    <li class="active"><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li class="dropdown">

       <div class="collapse navbar-collapse bs-js-navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a id="drop1" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <b class="caret"></b></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="drop1">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Another action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Something else here</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Separated link</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" id="drop2" role="button" class="dropdown-toggle" data-toggle="dropdown">Dropdown 2 <b class="caret"></b></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="drop2">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Another action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Something else here</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Separated link</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li id="fat-menu" class="dropdown">
              <a href="#" id="drop3" role="button" class="dropdown-toggle" data-toggle="dropdown">Dropdown 3 <b class="caret"></b></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="drop3">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Another action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Something else here</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="http://twitter.com/fat">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.nav-collapse -->
');*/
});
