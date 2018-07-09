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
