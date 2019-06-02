$(function () {

	(function () {
		var triger = $('.country__triger-btn');

		triger.on('click', function () {
			$('.country__item-additionally').slideToggle(1000);
			$(this).toggleClass('rotate');

		});
	}());

});
