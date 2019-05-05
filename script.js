/* CONSOLE NOTES */
const developer = [
	{
		name: 'Hana Drdla',
		title: 'Front end developer',
		work: 'Freelance',
		skills: [ 'html', 'css', 'javascript', 'react', 'git', 'restful API', 'node', 'MySQL' ],
		software: [ 'VS code', 'sketch', 'photoshop', 'illustrator', 'sourcetree', 'sequelpro', 'postman' ],
		contact: 'hanadrdla@gmail.com'
	}
];
console.log('%c Thanks for visiting', 'font-size:50px; background:lightpink; text-shadow: 5px 5px 0 lightgrey');
console.info('Website coded by:');
developer.forEach((developer) => {
	console.groupCollapsed(`${developer.name}`);
	console.log(`${developer.title}`);
	console.log('Looking for help with a project?');
	console.log(`Contact: ${developer.contact}`);
	console.groupEnd(`${developer.name}`);
});

/* NAV SCROLL */

$(document).ready(function() {
	$(document).on('scroll', onScroll);

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		$(document).off('scroll');

		$('a').each(function() {
			$(this).removeClass('active');
		});
		$(this).addClass('active');

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			scrollTop: $target.offset().top + 2
		}, 500, 'swing', function() {
			window.location.hash = target;
			$(document).on('scroll', onScroll);
		});
	});
});

function onScroll(event) {
	var scrollPosition = $(document).scrollTop();
	$('nav a').each(function() {
		var currentLink = $(this);
		var refElement = $(currentLink.attr('href'));
		if (
			refElement.position().top <= scrollPosition &&
			refElement.position().top + refElement.height() > scrollPosition
		) {
			$('nav ul li a').removeClass('active');
			currentLink.addClass('active');
		} else {
			currentLink.removeClass('active');
		}
	});
}
