$(function(){
	$('li.smallbox').each(function(){
		$(this).find('a').on('click',function(){
			event.preventDefault();
			$('.modalbox_cnt').addClass('modalbox_cnt_active');
			$('.modalbox_overlay').addClass('modalbox_overlay_active');
			var get_img = $(this).children('.box_wrap').find('span').clone();
			$('.modalbox_cnt').find('.modalbox_get').append(get_img);
			$(document).on('click','.modalbox_overlay, .close_button a',function(){
				event.preventDefault();
				$('.modalbox_cnt').removeClass('modalbox_cnt_active');
				$('.modalbox_overlay').removeClass('modalbox_overlay_active');
				$('.modalbox_cnt').find('.modalbox_get').empty();//xoa du lieu trong ham//
			});
		});
	});
	//top scroll//
	$('.pnavi .ptop a').click(function(event) {
		event.preventDefault();
		$('html').animate({scrollTop:0}, 600);
	});
	if ($(window).width() >= 640 ) {
		$(window).on('scroll', function(event) {
			if($(this).scrollTop()>200){
				$('.pnavi').addClass('pnavi_show');
			}
			else{
				$('.pnavi').removeClass('pnavi_show');
			}
			//footer//
			
				scrollHeight=$(document).height();
				scrollPosition = $(window).height() + $(window).scrollTop();
				footHeight=$('#tmp_footer').height();
				if ( scrollHeight - scrollPosition  <= footHeight ) {
					$('.pnavi').addClass('pnavi_fix');
				}
				else{
					$('.pnavi').removeClass('pnavi_fix');
				}
		});
	}
});