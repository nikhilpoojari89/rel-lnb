// ;(function(window) {

// 	'use strict';

	var mainContainer = $('.main-wrap'),
		openCtrl = $('.navbar__list--search'),
		closeCtrl = $('#btn-search-close')
		searchContainer = $('.search-block'),
		inputSearch = $('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.on('click', openSearch);
		closeCtrl.on('click', closeSearch);
		$(document).on('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		mainContainer.addClass('main-wrap--hide');
		searchContainer.addClass('search--open');
		setTimeout(function() {
			inputSearch.focus();
		}, 500);
	}

	function closeSearch() {
		mainContainer.removeClass('main-wrap--hide');
		searchContainer.removeClass('search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

// })(window);