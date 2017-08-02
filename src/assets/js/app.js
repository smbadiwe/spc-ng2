(function ($, document, window) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.site-header').addClass("sticky");
		} else {
			$('.site-header').removeClass("sticky");
		}
	});
})(jQuery, document, window);