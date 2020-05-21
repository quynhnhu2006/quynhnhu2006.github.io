
$(function(){
 	// scroll//
	$(window).on('scroll', function(event) {
			if($(this).scrollTop()>200) {
				$('.header_bar').addClass('header_bar_active');
				$('.header_bar ul li a').addClass('header_bar_ul_active');
				event.preventDefault();
				}
			else{
				$('.header_bar').removeClass('header_bar_active');
				$('.header_bar ul li a').removeClass('header_bar_ul_active');
				event.preventDefault();
			}
	});
	
	$('#header ul li').each(function() {
		$(this).find('a').on('click', function(event){
			event.preventDefault();
			var stt= $(this).parent().index();
			console.log('index la:'+stt);
			var vitri= $('#section'+stt+'').offset().top;
			console.log('vitri la:'+vitri);
			$('html').animate({scrollTop: vitri }, 600); 
		});
	});
	
	// lat sach//
	$(window).ready(function() {
		$('#flipbook').turn({
			 				width:1000,
			                height:650,
							autoCenter: true,
							display: 'double',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
			                direction: 'ltr',
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
		$('#prevpage').click(function(){
        	$('#flipbook').turn('previous');
    	});
 
		$('#nextpage').click(function(){
			$('#flipbook').turn('next');
		});
	});
	
	
	$(window).bind('keydown', function(e){		
		if (e.keyCode==37)
			$('#flipbook').turn('previous');
		else if (e.keyCode==39)
			$('#flipbook').turn('next');
			
	});
});