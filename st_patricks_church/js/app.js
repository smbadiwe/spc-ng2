(function ($, document, window) {

	$(document).ready(function () {

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function () {
			$(".mobile-navigation").slideToggle();
		});

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
						icon: "images/map-pin.png"
					}
				}
			});

		}

		$('.site-content').on('click', 'a', function (e) {
			var url = e.target.href;
			var id = url.substring(url.lastIndexOf('#') + 1);
			$("a[href=#" + id + "]").parent("li").addClass("current-menu-item").siblings().removeClass("current-menu-item");
			var mobileNav = $(".mobile-navigation");
			if (mobileNav) {
				mobileNav.slideToggle();
			}
		});
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