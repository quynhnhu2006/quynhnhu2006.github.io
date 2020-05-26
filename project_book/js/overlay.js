// JavaScript Document
$(function(){
	$('.aboutus_content_text').slideUp();
	$('.aboutus_content').each(function(){
		$(this).find('a').on('click',function(){
			event.preventDefault();
			if(!($(this).parents('.aboutus_content').hasClass('active'))){
				$('.aboutus_content_text').slideUp();
				$('.aboutus_content').removeClass('active');
				$(this).parents('.aboutus_content').addClass('active');
				$(this).parent().next().slideDown();
			   }
			else{
				$(this).parents('.aboutus_content').removeClass('active');
			   $(this).parent().next().slideUp();
			}
		}); 
	});

	//over lay//
	// JavaScript Document

			$('#toggle').click(function() {
			    $(this).toggleClass('toggle-active');
			    $('#overlay').toggleClass('nav-active');
			});
			$("#overlay").click(function(){
				$("#toggle").removeClass("toggle-active");
			    $('#overlay').toggleClass('nav-active');
			});
			//ページトップへ戻る
			$('#pagetop a').click(function () {
						$('body,html').animate({			
						scrollTop: 0
						}, 400);
						return false;
			});

		/*$('.slider').each(function(){
			$(this).slick({
				autoplay:false,
				autoplaySpeed:1000,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode:true,
				dots:false,
				arrows:false,
			});
		});*/
		$('.slider').each(function(){
			$('.slider').slick({
				autoplay:false,
				autoplaySpeed:1000,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode:true,
				dots:false,
				arrows:false,
				responsive: [{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}]
			});
		});
		$('.slider2').each(function(){
			$(this).slick({
				autoplay:false,
				autoplaySpeed:4000,
				slidesToShow: 4,
				slidesToScroll: 1,
				centerMode:true,
				dots:false,
				arrows:true,
				responsive: [{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}]
			});
		});
	

});
