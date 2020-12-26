
(function($){

	$(function(){
$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
});
$("#overlay").click(function(){
	$("#toggle").removeClass("toggle-active");
    $('#overlay').toggleClass('nav-active');
});
		jQuery(function($){
		$('.slider').each(function(){
			$(this).slick({
				autoplay:false,
				autoplaySpeed:200,
				dots:true,
				arrows:false,
			});
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
})(jQuery);
