$(document).ready(function() {
    adjustBackground();
    $("h1").fitText(.8);
    $("h2").fitText(1.6);

    $(window).resize(adjustBackground);
    function adjustBackground() {
	if($(window).width() < 730) {		
		$(".personal-box").css('margin-bottom', "300px");		
	}else{
	    $(".personal-box").css('margin-top', "5%");
	}
    }
});
