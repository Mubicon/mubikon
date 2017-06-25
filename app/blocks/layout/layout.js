export default function () {
	function hW() {
		var w = $('.layout__header').width();
		$('.header').width(w);
	}

	hW();

	$(window).resize(function () {
		hW();
	});
}