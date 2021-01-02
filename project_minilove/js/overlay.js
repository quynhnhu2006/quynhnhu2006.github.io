
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
				autoplay:true,
				fade: true,
				autoplaySpeed:1000,
				dots:false,
				arrows:false,
			});
		});
	});

//========================================
//▼リンク領域の拡張
//========================================
linkParent($('.list_product li'));
function linkParent(o) {
	if(o.length && o.find('a').length){
		o.css('cursor','pointer').click(function(){
			var ob = $(this).find('a');
			var ot = ob.attr('target');
			if(ot == '_blank'){
				window.open().location.href = ob.attr('href');
			} else {
				window.location.href = ob.attr('href');
			}
			return false;
		});
	}
}		
		
});
})(jQuery);
