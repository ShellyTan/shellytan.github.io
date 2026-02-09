var $body = $('body');
var $sections = $('.portfolio-sections');
var $portfolio_nav = $('#portfolio-nav');
var $code_section = $('#code-section');
var $graphic_section = $('#graphic-section');
var $studio_section = $('#studio-section');
var $back_to_top = $('.back-to-top');

var section_index = [ $code_section , $graphic_section , $studio_section ];

var on_page_scroll = function(){

    if(window.pageYOffset > 800) {
        $back_to_top.fadeIn(1000);
    } else {
        $back_to_top.fadeOut(1000);
    }
}

var back_to_top = function(){
    $body.scrollTo($portfolio_nav, { duration:450 }, 'y');
    return false;
}

var lazy_load = function(){
	$('img.gifs').lazyload({
	    threshold : 200
	});
}

var table_top = function(){
	Tabletop.init({ 
		key: '1gh2al3t_pro4ejyWkZmEsJaQZWrUD06f21mXX0tTRpQ',
		callback: function(data, tabletop) { 
		    load_data(data);
		},
		simpleSheet: true 
    });
}

var load_data = function(data){
	var index = data.length; 

	$.each(data, function(k,v) {
		v.date_id = slugify(v.date);
		var r = ich.gifstemplate(v);
		$('#gifs-container').prepend(r);
	});

	timeout(index);
}

var timeout = function(index){
	if( $('img.gifs').length === index ){
		lazy_load();
	}else{
		console.log('not loaded');
		setTimeout( timeout(index), 50 );
	}
}

var slugify = function(txt){
    return txt.replace(/\s/g,'-').replace(/,/g,'').toLowerCase();
}

$( document ).ready(function() {

	$back_to_top.hide();
	$graphic_section.hide();
	$studio_section.hide();


	$('#portfolio-nav p').on("click", function(){

		if ($(this).className === 'selected-nav') {
			return false;
		} else {
			
			// Change which nav on portfolio page is selected
			$('.selected-nav').removeClass('selected-nav');
			$(this).addClass('selected-nav');

			// Change which section of portfolio is shown
			var nav_index = $(this).data('section');

			$sections.hide();
			$(nav_index).show();
		}
	});

    $(window).on('scroll', on_page_scroll);

	$back_to_top.on('click', back_to_top);

	ich.grabTemplates();
	table_top();
	
});