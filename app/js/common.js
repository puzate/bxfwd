// ANIMATIONS
jQuery(document).ready(function() {
	var home_short_btn = $(".home-short-info_describe_steps_container_position_content .__link");
	home_short_btn.click(function() {
		$(this).siblings(".__content").toggleClass('show')
	});
	$('.home-short-info_menu_btn.all button.home-short-info_menu_btn-button').click(function() {
		$('.home-short-info_menu_list_container').addClass('__open');
		$('body').addClass('o-hidden');
	});
	$('.home-short-info_menu_list_container .__btn-close .__btn').click(function() {
		$('.home-short-info_menu_list_container').removeClass('__open');
		$('body').removeClass('o-hidden')
	});
	$('body .__shadow').click(function() {
		$('.home-short-info_menu_list_container').removeClass('__open');
		$('body').removeClass('o-hidden')
	});
	if ($(window).width() < 768) {
		$('.home-short-info_menu_btn-button').click(function() {
			// return false;
			$('.home-short-info_menu_list_container').addClass('__open');
			$('body').addClass('o-hidden');
		});
	};
	$('.faq-page-main_sidebar_sm_btn').click(function() {
		$('.faq-page-main_sidebar').toggleClass('__open');
		$($(this)).toggleClass('__open')
	});
	$('.market-page_content_sidebar .__btn').click(function() {
		$($(this)).toggleClass('__open');
		$('.market-page_content_sidebar_list').toggleClass('__open')
	});
	$('.home-short-info_menu_container').remove();
	// $('body').click(function() {
	// 	$('.faq-page-main_sidebar').removeClass('__open')
	// });
	$('.delivery-page_content_list ul.__list').on('click', 'li:not(.active)', function() {
				$(this)
						.addClass('active')
						.siblings()
						.removeClass('active')
						.closest('.delivery-page_content_container')
						.find('.delivery-page_content_tabs_position')
						.removeClass('active')
						.eq($(this).index())
						.addClass('active');
	});
	$('.market-page_content_sidebar ul.market-page_content_sidebar_list').on('click', 'li:not(.active)', function() {
				$(this)
						.addClass('active')
						.siblings()
						.removeClass('active')
						.closest('.market-page_content')
						.find('.market-page_content_tabs_position')
						.removeClass('active')
						.eq($(this).index())
						.addClass('active');
	});
	$('.faq-page-main_tabs_position_tabs ul.__list').on('click', 'li:not(.active)', function() {
				$(this)
						.addClass('active')
						.siblings()
						.removeClass('active')
						.closest('.faq-page-main_tabs_position')
						.find('.faq-page-main_tabs_position_content')
						.removeClass('active')
						.eq($(this).index())
						.addClass('active');
	});
	
	$(".home-short-info_describe_head-title").waypoint(function() {
		$('.home-short-info_describe_head-title').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_title").waypoint(function() {
		$('.home-short-info_describe_title').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_step-title").waypoint(function() {
		$('.home-short-info_describe_step-title').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_steps_container_position:first-child").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:first-child').addClass('animate');
	}, { offset: '100%'});
	$(".home-short-info_describe_steps_container_position:nth-child(3)").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:nth-child(3)').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_steps_container_position:nth-child(2)").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:nth-child(2)').addClass('animate');
	}, { offset: '100%'});
	$(".home-short-info_describe_steps_container_position:nth-child(4)").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:nth-child(4)').addClass('animate');
	}, { offset: '100%'});

	$(".home-reasons_title").waypoint(function() {
		$('.home-reasons_title').addClass('animate');
	}, { offset: '100%'});
	$(".home-reasons_title").waypoint(function() {
		$('.home-reasons_reason-container > .__title').addClass('animate');
	}, { offset: '100%'});
	$(".home-reasons_title").waypoint(function() {
		$('.home-reasons_reason_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-services_title").waypoint(function() {
		$('.home-services_title').addClass('animate');
	}, { offset: '100%'});
	$(".home-services_title").waypoint(function() {
		$('.home-services_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-payments-method").waypoint(function() {
		$('.home-payments-method_title').addClass('animate');
	}, { offset: '100%'});
	$(".home-payments-method").waypoint(function() {
		$('.home-payments-method_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-service-info").waypoint(function() {
		$('.home-service-info_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-about-us").waypoint(function() {
		$('.home-about-us_content').addClass('animate');
	}, { offset: '100%'});
	$(".home-about-us").waypoint(function() {
		$('.home-about-us_feedback-form').addClass('animate');
	}, { offset: '100%'});
	$(".home-start-shopping").waypoint(function() {
		$('.home-start-shopping_title > .__title').addClass('animate');
	}, { offset: '100%'});	



	// MODAL LINKS
	if (document.location.href.indexOf('showModalTC') != -1) {
			$("#modal_terms-cond").modal('show');
	};
	if (document.location.href.indexOf('showModalRT') != -1) {
			$("#modal_terms-cond").modal('show');
	};
	if (document.location.href.indexOf('showModalPP') != -1) {
			$("#modal_terms-cond").modal('show');
	};
});
$(document).ready(function () {
		var availableTags = $('#js_city-list').find('option').map(function () {
			return this.value;
		}).get();
	$('#city').autocomplete({ source: availableTags });
	$('input.__input-range, .calculator-page-content_calculator-main .__container-info .__container-value .__input-container input').on('input change keyup', function() {
		var input = 'input.__input-range + .setyear',
				valueInput = $('input.__input-range').val(),
				UspsExMoreHeight = 144 + (valueInput * 2),
				UspsPrMoreHeight = 68 + (valueInput * 2),
				BxbryMoreHeight = 94 + (valueInput * 2),
				BxbryDeMoreHeight = 144 + (valueInput * 2),
				UspsExLowHeight = 244 + (-valueInput * 2),
				UspsPrLowHeight = 168 + (-valueInput * 2),
				BxbryLowHeight = 194 + (-valueInput * 2),
				BxbryDeLowHeight = 214 + (-valueInput * 2);
		if (valueInput > 0 && valueInput < 25) {
			$('.__usps-express .__line').css({'height': UspsExMoreHeight});
			$('.__boxberry .__line').css({'height': BxbryMoreHeight});
			$('.__usps-priority .__line').css({'height': UspsPrLowHeight});
			$('.__boxberry-delivery .__line').css({'height': UspsExLowHeight});
		}
		else if (valueInput > 25 && valueInput < 50) {
			$('.__usps-express .__line').css({'height': UspsExLowHeight});
			$('.__boxberry .__line').css({'height': BxbryLowHeight});
			$('.__usps-priority .__line').css({'height': UspsPrMoreHeight});
			$('.__boxberry-delivery .__line').css({'height': BxbryDeMoreHeight});
		};
		var Range = 'input.__input-range', // Кол-во
			Height = '.calculator-page-content_calculator-main .__container-info .__container-value.weight .__input-container input', //Вес
			Price = '.calculator-page-content_calculator-main .__container-info .__container-value.price .__input-container input', // Общая цена
			valueRange = $(Range).val(),
			valueHeight = $(Height).val(),
			valuePrice = $(Price).val(),
			// CALCULATOR FORMULA
			fullDeliveryPrice = (+valuePrice) + (+valueRange) + (+valueHeight),
			// USPS EXPRESS
			UspsExpress = $('.calculator-page-content_calculator-main .__container-price .__usps-express .__title .__price span'),
			// USPS PRIORITY
			UspsPriority = $('.calculator-page-content_calculator-main .__container-price .__usps-priority .__title .__price span'),
			// BoxBerry 
			BoxBerry = $('.calculator-page-content_calculator-main .__container-price .__boxberry .__title .__price span'),
			// BoxBerry Courier
			BoxBerryCourier = $('.calculator-page-content_calculator-main .__container-price .__boxberry-delivery .__title .__price span');
		UspsExpress.text((fullDeliveryPrice * 1.343243).toFixed(2));
		UspsPriority.text((fullDeliveryPrice * 2.7).toFixed(2));
		BoxBerry.text((fullDeliveryPrice * 1.1).toFixed(2));
		BoxBerryCourier.text((fullDeliveryPrice * 0.5).toFixed(2));
	});
		
});
$.fn.WBslider = function() {
	return this.each(function() {
		var $_this = $(this),
			$_date = $('input.__input-range#date1', $_this),
			$_title = $('.setyear', $_this),
			thumbwidth = 50,
			yrnow = '50';
		$_date.attr('max', yrnow);
		$('.endyear', $_this).text( yrnow );
		$_date.val(yrnow - 50);

		$_date.on('input change keyup', function() {
			var $_this = $(this),
				val = parseInt($_date.val(), 10);


			$_title.text( val );

			var pos = (val - $_date.attr('min'))/($_date.attr('max') - $_date.attr('min'));

			var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
				titlepos = Math.round( ( pos * $_date.width() ) - thumbwidth/4 + thumbCorrect );

			$_title.css({'left': titlepos});

			pos = Math.round( pos * 99 );
			var grad = 'linear-gradient(90deg, #27292f ' + pos + '%,#148f44 ' + (pos+1) + '%)';
			$_date.css({'background': grad});

		}).on('focus', function() {
			if ( isNaN( $(this).val() ) ) {
				$(this).val(0);
			}
		}).trigger('change');
		
		$(window).on('resize', function() {
			$_date.trigger('change');
		});
	});
};

$(function() {

	$('.slider').WBslider();

});