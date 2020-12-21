// JavaScript Document
(function($){
	"use strict";
	
	if ($(window).width() < 480) {
		/* chen noi dung menu */
    $('.drawer').append($('nav ul'));
	$('.drawer').append($('#tmp_size_lang'));
		/* nut menu */
		$('#toggle').click(function() {
			console.log("run");
			$(this).toggleClass('toggle-active');
			$('#overlay').toggleClass('nav-active');
		});
		/* noi dung menu */
		$("#overlay").click(function(){
			$("#toggle").toggleClass("toggle-active");
			$('#overlay').toggleClass('nav-active');
		});
	}
	//slider
	jQuery(function($){
		$('.slider1').each(function(){
			$(this).slick({
				autoplay:true,
				autoplaySpeed:4000,
				dots:false,
				infinite: true,
				slidesToShow:3,
				prevArrow: "<a href='javascript:void(0);' class='slick-prev slick-arrow'><img src='project_japanese/image/icon_preview.png' alt='' width='18' height='32' /></a>",
				nextArrow: "<a href='javascript:void(0);' class='slick-next slick-arrow'><img src='project_japanese/image/icon_next.png' alt='' width='18' height='32' /></a>",
				responsive: [{
					 breakpoint: 1400, // 1300px以下のサイズに適用
						settings: {
						   slidesToShow:3
						}
					}, {
					  breakpoint: 480, // 480px以下のサイズに適用
						settings: {
						   slidesToShow: 1
						 }
					}
				]	
			});
		});
		});	
		//slider
	jQuery(function($){
		$('.slider2').each(function(){
			$(this).slick({
				autoplay:true,
				autoplaySpeed:1000,
				dots:false,
				infinite: true,
				slidesToShow:1,
				prevArrow: "<a href='javascript:void(0);' class='slick-prev slick-arrow'><img src='project_japanese/image/icon_preview.png' alt='' width='18' height='32' /></a>",
				nextArrow: "<a href='javascript:void(0);' class='slick-next slick-arrow'><img src='project_japanese/image/icon_next.png' alt='' width='18' height='32' /></a>",
				customPaging: function (slider, i) {
					return ('<a href="javascript:void(0)"><span>' + (i + 1) + '</span></a>');
				}
			});
		});	
		
	});	
	
	$('.pnavi .ptop a').click(function(){
		$('html').animate({
			scrollTop:0
		},400);
		return false;
	});
	if ($(window).width() >= 640 ) {
		$(window).on('scroll', function(event) {
			if($(this).scrollTop()>350){
				$('.pnavi').addClass('pnavi_show');
			}
			else{
				$('.pnavi').removeClass('pnavi_show');
			}
			//footer//
			
				var scrollHeight=$(document).height();
				var scrollPosition = $(window).height() + $(window).scrollTop();
				var footHeight=$('.wrap_footer').height();
				if ( scrollHeight - scrollPosition  <= footHeight ) {
					$('.pnavi').addClass('pnavi_fix');
				}
				else{
					$('.pnavi').removeClass('pnavi_fix');
				}
		});
	}

/********************************slide-up**************/
	$('.dropdown_Noun_cnt_02').slideUp();
	$('.left_navi ul li').each(function(){
	$(this).find('.study-header-list').on('click',function(){
		event.preventDefault();
		if(!($(this).parent('li').hasClass('li_active'))){
		   	$('.dropdown_Noun_cnt_02').slideUp();
			$('.left_navi ul li').removeClass('li_active');
			$(this).parent('li').addClass('li_active');
			$(this).next().slideDown();
		   }
		else{
			$(this).parents('.left_navi ul li').removeClass('li_active');
			$(this).next().slideUp();
			}
	 });
 });
									  
	$('.dropdown_Noun_cnt_01').slideUp();
	$('.left_navi_1 ul li').each(function(){	
	$(this).find('.study-header-list_01').on('click',function(){
		event.preventDefault();
		if(!($(this).parent('li').hasClass('li_active_02'))){
		   	$('.dropdown_Noun_cnt_01').slideUp();
			$('.left_navi_1 ul li').removeClass('li_active_02');
			$(this).parent('li').addClass('li_active_02');
			$(this).next().slideDown();
		   }
		else{
			$(this).parents('.left_navi_1 ul li').removeClass('li_active_02');
			$(this).next().slideUp();
			}
	 });
 });
								
})(jQuery);

//parallax
function changeStyle(options) {
		var c = $.extend({
			switchArea: 'changestyle_area',
			switchClass: 'changestyle',
			defaultLinkName: 'default',
		},options);
	
		$('.'+c.switchClass).on('click.changeStyle', function(){
			var sName =$(this).closest('.'+c.switchArea).attr('id').replace('tmp_','cs_');
			var value = $(this).attr('name');
			if(sName){
				if(value == c.defaultLinkName){
					setStyle(sName);
				}else{
					setStyle(sName, value);
				}
			}
			return false;
		});
	
		function setStyle(sName, value) {
			var classList = $('body').attr('class').split(' ');
			var cListLength = classList.length;
			var regexp = new RegExp(sName.replace('cs_','') + '(.*?)', 'g');
			if(cListLength > 0){
				for(i=0;i<cListLength;i++){
					var m = classList[i].match(regexp);
					if(m) $('body').removeClass(classList[i]);
				}
			}
			if(value){
				localStorage.setItem(sName, value);
				$('body').addClass(sName.replace('cs_','')+'_'+value);
			} else {
				localStorage.removeItem(sName);
			}
	
		}
}		
changeStyle();


//parallax
(function($){
	"use strict";
	$(window).scroll(function(){
				var windowHeight = $(window).height();
				var topWindow = $(window).scrollTop();
				var blockAni = $('.parallax');
				blockAni.each(function(){
					var targetPosition = $(this).offset().top;
					if(topWindow + windowHeight > targetPosition + 30){
						$(this).addClass("css_show");
					}

				});
	});		
})(jQuery);
