var $body = $('body');
var $sections = $('.portfolio-sections');
var $portfolio_nav = $('#portfolio-nav');
var $code_section = $('#code-section');
var $graphic_section = $('#graphic-section');
var $studio_section = $('#studio-section');
var $back_to_top = $('.back-to-top');

var section_index = [ $code_section , $graphic_section , $studio_section ];

var on_page_scroll = function() {

    if(window.pageYOffset > 800) {
        $back_to_top.fadeIn(1000);
    } else {
        $back_to_top.fadeOut(1000);
    }
};

var back_to_top = function() {
    $body.scrollTo($portfolio_nav, { duration:450 }, 'y');
    return false;
};

$( document ).ready(function() {

	$back_to_top.hide();
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
			
			var visible_section = section_index[nav_index];

			$sections.hide();
			visible_section.show();

			
		}
	});


    $(window).on('scroll', on_page_scroll);

	$back_to_top.on('click', back_to_top);

	


});