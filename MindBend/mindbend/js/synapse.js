$(document).ready(function() {

	if (document.title != "Synapse 2012") {
		// DO nothing
	} else {
		$("body").queryLoader2();
		roundCorners();
	}
	
	$('a.panel').click(function () {

		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		current = $(this);
		
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		return false;
	});
	
	resizeFooter();
	relocateWrapper();
	
	
	$(window).resize(function () {
		relocateWrapper();
		resizeFooter();
		
	});
	
	// Overlay effect.
	$(function() {
		$("#triggers a[rel]").overlay({effect: 'apple'});
	});
	
	// Tabs
	/*
	$(function() {
		$("ul.skin2").tabs("div.skin2 > div");
	});
	*/
	
	// Accordion setup
	$(function() { 
		$("#accordion").tabs("#accordion div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
	});
});

function roundCorners(){
$('#sponsorContent').corner();
$('.sponsor_content_blocks').corner();
$('.sponsor_content_blocks_small').corner();
$('.frontpage_block').corner();
$('#contact_content').corner();
}


function resizeFooter() {
	if (window.innerHeight > 600)
		$('#footer').css('height', window.innerHeight - 600);
	else 
		$('#footer').css('height', "30px");
}

function relocateWrapper() {
	$('#wrapper').css('left', (window.innerWidth - 1280) / 2);
}

jQuery(function($){
	
	$('.circle').mosaic({
		opacity		:	0.8			//Opacity for overlay (0-1)
	});
	
	$('.fade').mosaic();
	
	$('.bar').mosaic({
		animation	:	'slide'		//fade or slide
	});
	
	$('.bar2').mosaic({
		animation	:	'slide'		//fade or slide
	});
	
	$('.bar3').mosaic({
		animation	:	'slide',	//fade or slide
		anchor_y	:	'top'		//Vertical anchor position
	});
	
	$('.cover').mosaic({
		animation	:	'slide',	//fade or slide
		hover_x		:	'400px'		//Horizontal position on hover
	});
	
	$('.cover2').mosaic({
		animation	:	'slide',	//fade or slide
		anchor_y	:	'top',		//Vertical anchor position
		hover_y		:	'80px'		//Vertical position on hover
	});
	
	$('.cover3').mosaic({
		animation	:	'slide',	//fade or slide
		hover_x		:	'400px',	//Horizontal position on hover
		hover_y		:	'300px'		//Vertical position on hover
	});

});