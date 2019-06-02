$(function () {

	(function () {
		var triger = $('.country__triger-btn');

		triger.on('click', function () {
			$('.country__item-additionally').slideToggle(1000);
			$(this).toggleClass('rotate');

		});
	}());

	
	// modal

	(function() {
		var closeBtns = $('.modal-close, .modal-overlay');
		closeBtns.on('click', handleModalClose);

		function handleModalClose() {
			var modal = $(this).parents('.modal');
			$(document.body).removeClass('overflow');
			modal.removeClass('is-open');
		}

	}());


	// filter countries
	(function() {
		var input = $('#search-cuntry');
		var items = $('.country-list-item');

		input.on('input', handleChange);

		function handleChange(e) {
			var val = e.target.value;
			items.removeClass('hidden');

			items.each(function() {
				handleItem(this, val);
			});
		}

		function handleItem(item, val) {
			var $item = $(item);
			var name = $item.find('.country-list-name').text();
			if (!name.trim().toLowerCase().includes(val.trim().toLowerCase())) {
				$item.addClass('hidden');
			}

		}
	}());

});
