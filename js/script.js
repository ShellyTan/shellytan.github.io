var $sections = $('.portfolio-sections');
var $code_section = $('#code-section');
var $graphic_section = $('#graphic-section');
var $studio_section = $('#studio-section');
var $code_nav = $('#code-nav');
var $graphics_nav = $('#graphics-nav');
var $studio_nav = $('#studio-nav');


$( document ).ready(function() {

	$('#hide').click(function() {
	    $('#construction').hide();
	});

	$graphic_section.hide();
	$studio_section.hide();

	

	$('#portfolio-nav p').on("click", function(){

		if ($(this).className == 'selected-nav') {
			return false;
		} else {
			
			// Change which nav on portfolio page is selected
			$('.selected-nav').removeClass('selected-nav');
			$(this).addClass('selected-nav');

			// Change which section of portfolio is shown
			var nav_index = $(this).parent('#portfolio-nav').find('p').index($(this));
			var section_index = [ $code_section , $graphic_section , $studio_section ];

			var visible_section = section_index[nav_index];

			$sections.hide();
			visible_section.show();
			
		}
	});


});