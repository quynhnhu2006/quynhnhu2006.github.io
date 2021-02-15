// JavaScript Document
(function($){
	"use strict";
	
/********************************slide-up**************/
	$('.dropdown_cnt').slideUp();
	$('.faq_cnt ul li').each(function(){
	$(this).find('a').on('click',function(){
		event.preventDefault();
		if(!($(this).parent('li').hasClass('li_active'))){
		   	$('.dropdown_cnt').slideUp();
			$('.faq_cnt ul li').removeClass('li_active');
			$(this).parent('li').addClass('li_active');
			$(this).next().slideDown();
		   }
		else{
			$(this).parents('#faq_cnt ul li').removeClass('active');
			$(this).parent('li').removeClass('li_active');
			$(this).next().slideUp();
			}
	 });
 });
									  
})(jQuery);									  

//parallax
(function($){
	"use strict";
	$(window).scroll(function(){
				var windowHeight = $(window).height();
				var topWindow = $(window).scrollTop();
				var blockAni = $('.parallax');
				blockAni.each(function(){
					var targetPosition = $(this).offset().top;
					if(topWindow + windowHeight > targetPosition + 10){
						$(this).addClass("css_show");
					}

				});
	});		
})(jQuery);

 