(function($){
	
	//色合い変更 クラス付与
	var color = localStorage.getItem('cs_color');
	if(color) $('body').addClass('color_'+color);

	//文字サイズ変更 クラス付与
	var fsize = localStorage.getItem('cs_fsize');
	if(fsize) $('body').addClass('fsize_'+fsize);

})(jQuery);