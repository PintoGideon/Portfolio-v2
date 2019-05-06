$(window).on('load', function() {
	$('.loader .inner').fadeOut(300, function() {
		$('.loader').fadeOut(500);
	});
});

$(document).ready(function() {
	var scrolllink = $('.scroll');
	scrolllink.click(function(e) {
		e.preventDefault();
		$('body,html').animate(
			{
				scrollTop: $(this.hash).offset().top
			},
			1000
		);
	});

	$('.nav li a ').click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr('href');
		var targetPosition = $(targetElement).offset().top;
		$('html,body').animate(
			{
				scrollTop: targetPosition - 50
			},
			'slow'
		);
	});

	const nav = $('.nav');
	const navTop = nav.offset().top;

	$(window).on('scroll', stickyNaviation);

	function stickyNaviation() {
		var body = $('body');
		if ($(window).scrollTop() >= navTop) {
			body.css('padding-top', nav.outerHeight() + 'px');
			body.addClass('fixedNav');
		} else {
			body.css('padding-top', 0);
			body.removeClass('fixedNav');
		}
	}
});
