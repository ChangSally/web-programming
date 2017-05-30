$(document).ready(function() {

	// when a nav parent is clicked
	$(".side-nav .menu").click(function() {
    var $ul = $(this).parent("nav").children("ul");
		// if section is already active and clicked again
		if ( $ul.hasClass("active") ) {
			$ul.removeClass("active");
			$ul.slideUp();
		} else {
		// if section is made active
			$ul.addClass("active");
			$ul.slideDown();
			return false;
		}
	}); // end click event handler
});