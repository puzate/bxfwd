// ANIMATIONS
jQuery(document).ready(function() {
	$('.home-about-us_feedback-form_btn .__btn').click(function() {
		$('.home-about-us_feedback-form').toggleClass('__open');
		$('.home-about-us_feedback-form_btn').toggleClass('__open')
	});
	$('.calculator-page-content_main_prices-inputs_sum input.__input').on('change', function() {
		if (+$(".calculator-page-content_main_prices-inputs_sum input.__input").val() > 1 ) {
			$(".calculator-page-content_main_prices-inputs_sum input.__input").parent().addClass('active')
		} else {
			$(".calculator-page-content_main_prices-inputs_sum input.__input").parent().removeClass('active')
		};
	});
	$('.calculator-page-content_main_prices-inputs_price input.__input').on('change', function() {
		if (+$(".calculator-page-content_main_prices-inputs_price input.__input").val() > 1 ) {
			$(".calculator-page-content_main_prices-inputs_price input.__input").parent().addClass('active')
		} else {
			$(".calculator-page-content_main_prices-inputs_price input.__input").parent().removeClass('active')
		};
	});
	$('.wrapper').click(function() {
		$('.home-about-us_feedback-form').removeClass('__open');
		$('.home-about-us_feedback-form_btn').removeClass('__open');
	});
	$('.header_info_login.login .__icon-user .__btn').click(function() {
		$('.header_info_login.login .__icon-user .__dropdown-menu').toggleClass('__open');
		$(this).toggleClass('__open');
	});
	$('.faq-page-main_sidebar_btn .__btn').click(function() {
		$('.faq-page-main_sidebar').toggleClass('__open')
		$(this).toggleClass('__open')
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
	$('.faq-page-main_sidebar .__list > li').on('click', function() {
		$('.faq-page-main_sidebar .__list > li').removeClass('active')
		$(this).addClass('active');
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
	// CITY VARIABLES
	$( function() {
		var availableTags = [
			"Киев",
			"Москва",
			"Минск",
			"Севастополь"
		];
		$( "#js_city_dropdown" ).autocomplete({
			source: availableTags,
			open: function () {
				$(this).data("uiAutocomplete").menu.element.addClass("__data-list_input");
			}
		});
	} );
	$('.calculator-page-content_main_button .__btn').on('click', function() {
		var inputRangeVal = +$('.calculator-page-content_main_range .__input-range').val(),
				inputSumVal = +$('.calculator-page-content_main_prices-inputs_sum .__input').val(),
				inputPriceVal = +$('.calculator-page-content_main_prices-inputs_price .__input').val(),
				// formula хз чего
				inputsValue = inputRangeVal + inputSumVal + inputPriceVal,
				// переменные каждого апи
				uspsExpress = (Math.round((inputsValue * 0.7) * 100)  / 100 ),
				uspsPriority = (Math.round((inputsValue * 1.3) * 100)  / 100 ),
				bbPickup = (Math.round((inputsValue * 0.4) * 100)  / 100 )
				bbCourier = (Math.round((inputsValue * 1) * 100)  / 100 )
		$('.calculator-page-content_main_calculated_block.usps-express .block__price .__price').html(uspsExpress).parent()
		.animate({'height':	uspsExpress, 'opacity': '1', 'min-height': '30'}, 2000);
		$('.calculator-page-content_main_calculated_block.usps-priority .block__price .__price').html(uspsPriority).parent()
		.animate({'height':	uspsPriority, 'opacity': '1', 'min-height': '30'}, 2000);
		$('.calculator-page-content_main_calculated_block.box-pickup .block__price .__price').html(bbPickup).parent()
		.animate({'height':	bbPickup, 'opacity': '1', 'min-height': '30'}, 2000);
		$('.calculator-page-content_main_calculated_block.box-courier .block__price .__price').html(bbCourier).parent()
		.animate({'height':	bbCourier , 'opacity': '1', 'min-height': '30'}, 2000);
	});
		
});
$.fn.WBslider = function() {
	return this.each(function() {
		var $_this = $(this),
			$_date = $('input.__input-range#js_input-range', $_this),
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