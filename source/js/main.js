// @prepros-prepend jquery.js
// @prepros-prepend animation.js


(function($) {

$(function() {

	// debug css
	// [].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.box-title h2').animated('fadeIn');

	$('.features .item, .blog .item').animated('fadeInUp');
	$('.story .col').animated('fadeInRight');

	$('.clients .review').animated('zoomIn');
	$('.expierence .desc').animated('fadeInLeft');
	$('.expierence .skills').animated('fadeInRight');
	$('.ready a.btn, .footer .row').animated('zoomIn');

	$('button.toggle').click(function() {
		var $this = $(this);

		if ($this.hasClass('on')) {
			$this.removeClass('on');
			$('.header nav.nav').css({ display: 'none' });
		} else {
			$this.addClass('on');
			$('.header nav.nav').css({ display: 'inline-block' });
		}
	});

	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

});

})(jQuery)