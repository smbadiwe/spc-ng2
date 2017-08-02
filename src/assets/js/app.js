

(function ($, document, window) {

	$(document).ready(function () {

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if (map.length) {

			map.gmap3({
				map: {
					options: {
						center: [latitude, longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker: {
					latLng: [latitude, longitude],
					options: {
						icon: "assets/images/map-pin.png"
					}
				}
			});

		}

	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.site-header').addClass("sticky");
		} else {
			$('.site-header').removeClass("sticky");
		}
	});

	$(window).load(function () {

	});

})(jQuery, document, window);