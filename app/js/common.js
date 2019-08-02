$(function() {

	new Vue({
		components: {
		  Multiselect: window.VueMultiselect.default
		},
		data: {
		  selectedCity: '',
		  optionsCity: [
			{ name: 'Омск', city: 'Omsk' },
			{ name: 'Москва', city: 'Moskov' }
		  ],

		  selectedNameInstitution: '',
		  optionsNameInstitution: [
			{ name: 'Шашлыков1', value: 'Шашлыков1' },
			{ name: 'Шашлыков2', value: 'Шашлыков2' }
		  ],

		  selectedCityInstitution: '',
		  optionsCityInstitution: [
			{ name: 'Омск', value: 'Omsk' },
			{ name: 'Москва', value: 'Moskov' }
		  ]
		}
	}).$mount('#app');

	Vue.config.devtools = true;

	var photoCarousel = $('#photo-carousel');

	photoCarousel.owlCarousel({
		items: 1,
		dots: false,
		thumbs: true,
		thumbImage: true,
		thumbContainerClass: 'owl-thumbs',
		thumbItemClass: 'owl-thumb-item',
		onInitialized: function (event) {
			var photoOwlThumbItem = $('.photo-carousel .owl-thumbs .owl-thumb-item');

			photoOwlThumbItem.each(function (i, value) {
				$('<a href="#"><i class="fas fa-trash-alt"></i></a>').appendTo(value);
			});
		}
	});

	// Remove photo item
	$('.photo-carousel .owl-thumbs .owl-thumb-item a').on('click', function () {
		console.log('remove');
		return false;
	})

	$('.tabs').tabslet();

});
