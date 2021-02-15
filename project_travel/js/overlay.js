// JavaScript Document
(function($){
	"use strict";
$(function(){

	$('#toggle').click(function() {
		$(this).toggleClass('toggle-active');
		$('#overlay').toggleClass('nav-active');
	});
	$("#overlay").click(function(){
		$("#toggle").removeClass("toggle-active");
		$('#overlay').toggleClass('nav-active');
	});
	

	//slider
	jQuery(function($){
		$('.slider').each(function(){
			$(this).slick({
				autoplay:true,
				autoplaySpeed:4000,
				dots:false,
				infinite: true,
				prevArrow: "<a href='javascript:void(0);' class='slick-prev slick-arrow'><img src='images/icon_preview.png' alt='' width='18' height='32' /></a>",
				nextArrow: "<a href='javascript:void(0);' class='slick-next slick-arrow'><img src='images/icon_next.png' alt='' width='18' height='32' /></a>",
				customPaging: function (slider, i) {
					return ('<a href="javascript:void(0)"><span>' + (i + 1) + '</span></a>');
				}
			});
		});	
	});	
	
	//lay so index
	$(".menu ul li,.sub_navi ul li").each(function(){
	$(this).find('a').click(function(){
	var index = $(this).parent().index();	
	//var vitri = '#tmp_item_' + index; tmp_item_0		
	//var vitri = $('#tmp_item_'+index+'');    $('#tmp_item_0')
	var vitri = $('#tmp_item_'+index+'').offset().top;
	
	console.log('div muon toi la:' + index);
	console.log('vi tri la:' + vitri);
	$('body,html').animate({scrollTop: vitri}, 400);
		if($(this).parents('.sub_navi')){
	  		console.log('chy dk o');
			$(".sub_navi ul li a").removeClass('active');
			$(this).addClass('active');
		}
	});	
		
	});
	//lay vitri scrolltop.hien subnavi
	$(window).on('scroll',function(){
		if($(this).scrollTop()>600){
			$('.sub_navi').addClass('show');
		}else{
			$('.sub_navi').removeClass('show');
		}	
		
	});
	//
	//ページトップへ戻る
	
	$('.pagetop').click(function () {
				$('body,html').animate({			
				scrollTop: 0
				}, 400);
				return false;
	});
	
	$(window).on('scroll',function(){
		if($(this).scrollTop()>400){
			$('.pagetop').parent().addClass('hienra');
		}else{
			$('.pagetop').parent().removeClass('hienra');
		}	
		
	});
	
});
})(jQuery);

//parallax

(function($){
		"use strict";
	$(function(){
	if($(window).width()>=480)
	$(window).scroll(function(){
				var windowHeight = $(window).height();
				var topWindow = $(window).scrollTop();
				var blockAni = $('.parallax');
				blockAni.each(function(){
					var targetPosition = $(this).offset().top;
					if(topWindow + windowHeight > targetPosition + 100){
						$(this).addClass("css_show");
					}

				});
	});		
});
})(jQuery);

 