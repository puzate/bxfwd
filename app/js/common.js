// ANIMATIONS
jQuery(document).ready(function() {
	if ($(window).width() > 768 ) {
		jQuery('.calculator-page-content_calculator-main .__container-info .__container-value.price .__input-container input').lcnCircleRangeSelect();
		jQuery('.calculator-page-content_calculator-main .__container-info .__container-value.weight .__input-container input').lcnCircleRangeSelect();
	};
	if ($(window).width() < 769 ) {
		jQuery('.calculator-page-content_calculator-main .__container-info .__container-value.weight .__input-container input').attr({
			type: 'range',
			id: 'date1',
			min: '1',
			max: '50',
			step: '1',
			value: '1',
			name: 'date',
			class: '__input-range'
		}).parent().append('<span class="setyear">1</span>');
		jQuery('.calculator-page-content_calculator-main .__container-info .__container-value.price .__input-container input').attr({
			type: 'range',
			id: 'date1',
			min: '1',
			max: '500',
			step: '1',
			value: '1',
			name: 'date',
			class: '__input-range'
		}).parent().append('<span class="setyear">1</span>');
		jQuery('.calculator-page-content_calculator-main .__container-info .__container-value').addClass('slider')
	}
	$('.home-about-us_feedback-form_btn .__btn').click(function() {
		$('.home-about-us_feedback-form').toggleClass('__open');
		$('.home-about-us_feedback-form_btn').toggleClass('__open')
	});
	$('.wrapper').click(function() {
		$('.home-about-us_feedback-form').removeClass('__open');
		$('.home-about-us_feedback-form_btn').removeClass('__open');
	});
	$('.header_info_login.login .__icon-user .__btn').click(function() {
		$('.header_info_login.login .__icon-user .__dropdown-menu').toggleClass('__open')
	});
	$('.how-buy-page_content_position .__more').click(function() {
		$($(this)).parent().find('.__content').toggleClass('__open');
		$($(this)).toggleClass('__hide')
		$($(this)).parent().find('.__close').toggleClass('__show');
	});
	$('.how-buy-page_content_position .__close').click(function() {
		$($(this)).parent().find('.__content').toggleClass('__open');
		$($(this)).toggleClass('__show')
		$($(this)).parent().find('.__more').toggleClass('__hide');
	});
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
		$('.home-short-info_menu_btn-button').click(function() {
			// return false;
			$('.home-short-info_menu_list_container').addClass('__open');
			$('body').addClass('o-hidden');
		});
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
	var valueInputWeight = $('.calculator-page-content_calculator-main .__container-info .__container-value.weight .__input-container input'),
		  valueInputPrice = ('.calculator-page-content_calculator-main .__container-info .__container-value.price .__input-container input');
	// valueInputWeight.on('input change keyup', function() {
	// 	var input = '.calculator-page-content_calculator-main .__container-info .__container-value.weight .__input-container input + .values .value1',
	// 			valueInputW = $('.calculator-page-content_calculator-main .__container-info .__container-value.weight .values .value1').html(),
	// 			UspsExMoreHeightW = 144 + (valueInputW * 2),
	// 			UspsPrMoreHeightW = 68 + (valueInputW * 2),
	// 			BxbryMoreHeightW = 94 + (valueInputW * 2),
	// 			BxbryDeMoreHeightW = 144 + (valueInputW * 2),
	// 			UspsExLowHeightW = 244 + (-valueInputW * 2),
	// 			UspsPrLowHeightW = 168 + (-valueInputW * 2),
	// 			BxbryLowHeightW = 194 + (-valueInputW * 2),
	// 			BxbryDeLowHeightW = 214 + (-valueInputW * 2);
	// 	if (valueInputW > 0 && valueInputW < 25) {
	// 		$('.__usps-express .__line').css({'height': UspsExMoreHeightW});
	// 		$('.__boxberry .__line').css({'height': BxbryMoreHeightW});
	// 		$('.__usps-priority .__line').css({'height': UspsPrLowHeightW});
	// 		$('.__boxberry-delivery .__line').css({'height': UspsExLowHeightW});
	// 	}
	// 	else {
	// 		$('.__usps-express .__line').css({'height': UspsExLowHeightW});
	// 		$('.__boxberry .__line').css({'height': BxbryLowHeightW});
	// 		$('.__usps-priority .__line').css({'height': UspsPrMoreHeightW});
	// 		$('.__boxberry-delivery .__line').css({'height': BxbryDeMoreHeightW});
	// 	};
	// });
	var inputs = 'input.__input-range, .calculator-page-content_calculator-main .__container-info .__container-value .__input-container input, .calculator-page-content_calculator-main .__container-info .__container-value.weight .__input-container input';
	$(inputs).on('input change keyup', function() {
		var input = 'input.__input-range + .setyear',
				valueInput = +$('input.__input-range').val(),
				UspsExMoreHeight = 144 + (valueInput * 2),
				UspsPrMoreHeight = 68 + (valueInput * 2),
				BxbryMoreHeight = 94 + (valueInput * 2),
				BxbryDeMoreHeight = 144 + (valueInput * 2),
				UspsExLowHeight = 244 + (-valueInput * 2),
				UspsPrLowHeight = 168 + (-valueInput * 2),
				BxbryLowHeight = 194 + (-valueInput * 2),
				BxbryDeLowHeight = 214 + (-valueInput * 2),
				valueInputW = +$('.calculator-page-content_calculator-main .__container-info .__container-value.weight .values .value1').html(),
				UspsExMoreHeightW = 144 + (valueInputW * 2),
				UspsPrMoreHeightW = 68 + (valueInputW * 2),
				BxbryMoreHeightW = 94 + (valueInputW * 2),
				BxbryDeMoreHeightW = 144 + (valueInputW * 2),
				UspsExLowHeightW = 244 + (-valueInputW * 2),
				UspsPrLowHeightW = 168 + (-valueInputW * 2),
				BxbryLowHeightW = 194 + (-valueInputW * 2),
				BxbryDeLowHeightW = 214 + (-valueInputW * 2);
				valueInputP = +$('.calculator-page-content_calculator-main .__container-info .__container-value.price .values .value1').html(),
				UspsExMoreHeightP = 144 + (valueInputP * 2),
				UspsPrMoreHeightP = 68 + (valueInputP * 2),
				BxbryMoreHeightP = 94 + (valueInputP * 2),
				BxbryDeMoreHeightP = 144 + (valueInputP * 2),
				UspsExLowHeightP = 244 + (-valueInputP * 2),
				UspsPrLowHeightP = 168 + (-valueInputP * 2),
				BxbryLowHeightP = 194 + (-valueInputP * 2),
				BxbryDeLowHeightP = 214 + (-valueInputP * 2);

		if ((valueInput > 0 && valueInput < 25) || (valueInputW > 0 && valueInputW < 25) || (valueInputP > 0 && valueInputP < 280)) {
			$('.__usps-express .__line').css({'height': ((UspsExMoreHeight + UspsExMoreHeightW + (UspsExMoreHeightP / 20)) / 3)});
			$('.__boxberry .__line').css({'height': ((BxbryMoreHeight + BxbryMoreHeightW + (BxbryMoreHeightP / 20)) /3 )});
			$('.__usps-priority .__line').css({'height': ((UspsPrLowHeight + UspsPrLowHeightW + (UspsPrLowHeightP / 20 )) /3 - 30)});
			$('.__boxberry-delivery .__line').css({'height': ((BxbryDeLowHeight + BxbryDeLowHeightW + (BxbryDeLowHeightP / 20 )) /3 - 10)});
		}
		if ((valueInput >= 25 && valueInput <= 50) || (valueInputW >= 25 && valueInputW <= 50) || (valueInputP > 280 && valueInputP < 560)) {
			$('.__usps-express .__line').css({'height': ((UspsExLowHeight + UspsExLowHeightW + (UspsExLowHeightP / 20 )) /3 - 30)});
			$('.__boxberry .__line').css({'height': ((BxbryLowHeight + BxbryLowHeightW + (BxbryLowHeightP / 20 )) /3 - 30)});
			$('.__usps-priority .__line').css({'height': ((UspsPrMoreHeight + UspsPrMoreHeightW + (UspsPrMoreHeightP / 20)) /3 )});
			$('.__boxberry-delivery .__line').css({'height': ((BxbryDeMoreHeight + BxbryDeMoreHeightW + (BxbryDeMoreHeightP / 20)) /3 )});
			console.log('fuck');
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
		$_date.attr('max');
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