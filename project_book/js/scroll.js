
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
	//$(window).ready(function() {
			/*$('#flipbook').turn({
								width:1000,
								height:650,
								autoCenter: true,
								display: 'double',
								acceleration: true,
								gradients: !$.isTouch,
								elevation:50,
								direction: 'ltr',
								/*when: {
									turned: function(e, page) {
										console.log('Current view: ', $(this).turn('view'));*/
									/*}
								}
			});*/
		/*$('#flipbook').turn({
			width: 1000,
			height: 650,
			duration: 1000,
			autoCenter: true,
			gradients: true,
			elevation: 50,
			direction: 'ltr',
		});
    	//change from single to double page
      	$(window).width(function(){
			  var win = $(this); //this = window
			  if (win.width() >= 480) { $('#flipbook').turn('display','double'); console.log ("run double !!"); }
			  else {
				$('#flipbook').turn({
				  width:300,
				  height:400,
				  display: 'single',
			  });
				  	console.log ("run single !!");
			  }
		});
		$(window).resize(function(){
			var win = $(this); //this = window
			if (win.width() >= 480) { $('#flipbook').turn('display','double');}
			else {
			  $('#flipbook').turn({
				  width:300,
				  height:400,
				  display: 'single',
			  });
			}
		});*/
/* turn js */
	if($('#flipbook').length) {
		if(window.innerWidth>480) {
			   $('#flipbook').turn({
				width:1000,
				height:650,
				autoCenter: true,
				display: 'double',
				acceleration: true,
				inclination:50,
				gradients: true,
				elevation:50,
				direction: 'ltr',
				zoom:2,// you can change it as you desire
				   duration:50,
			  });
         }else {
			 $('#flipbook').turn({
				width:300,
				height:400,
				elevation:50,
				inclination:50,
				display: 'single',
				autocenter:true,
				acceleration: true,
				gradients:true,
				zoom:2,// you can change it as you desire
				   duration:50,
			  });
			 
		 }
		
		$('#prevpage').click(function(){
        	$('#flipbook').turn('previous');
    	});
 
		$('#nextpage').click(function(){
			$('#flipbook').turn('next');
		});	
	$(window).bind('keydown', function(e){		
		if (e.keyCode==37)
			$('#flipbook').turn('previous');
		else if (e.keyCode==39)
			$('#flipbook').turn('next');
			
	});
}	
	//parallax
	$(window).scroll(function(){
				var windowHeight = $(window).height();
				var topWindow = $(window).scrollTop();
				var blockAni = $('.parallax');
				blockAni.each(function(){
					var targetPosition = $(this).offset().top;
					if(topWindow + windowHeight > targetPosition + 100){
						$(this).addClass("css_show");
					}
					else{
						$(this).removeClass("css_show");
					}
				});
	});		
});