$(function() {
	//xu ly class.nut 

	$('#id_modal_box li').each(function( index ) {
	 	$(this).find('a').click(function() {
			event.preventDefault();
			//copy noi dung cua div
			var imgCopy = $(this).find('.modal_img').clone();
			var txtCopy = $(this).find('.modal_text').clone();
			//bo noi dung vua lay duoc vao modal box
			$('.noidung').find('.img').append(imgCopy.html());
			$('.noidung').find('.text').append(txtCopy.html());
			//hien thi modal box ra man hinh
			disModal();
			delModal();
		});
	});

	function disModal(){		
			//xu li class cho noidung
			$('.noidung').addClass('noidunghienra');
			//xu li class cho mo mo
			$('.momo').addClass('momohienra');
	};
	function delModal(){
		$(document).on('click','.momo, .nutdong a',function(){
			//xoa li class cho noidung
			$('.noidung').removeClass('noidunghienra');
			$('.momo').removeClass('momohienra');
			// xoa noi dung da chua trong modal box
			$('.noidung').find('.img').empty();
			$('.noidung').find('.text').empty();
		});
	}
	
});