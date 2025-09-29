jQuery(function($){
	$(document).ready(function() {
		if(cur_page_data.pageid == 1){
			$('.menu_row').css('width','90%');	
		}
		
		$(function()
		{
			new WOW().init();
		});
	});
});
