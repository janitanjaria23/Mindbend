var scroll = new Fx.Scroll('contenedor', {
	wait: false,
	duration: 1500,
	offset: {'x': 0, 'y': 0},
	transition: Fx.Transitions.Sine.easeInOut
});

$('slideout').addEvent('click', function(e){
	e = new Event(e);
	mySlide.slideOut();
	scroll.toElement('content1');
	e.stop();
});
 
$('link2').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content2');
});
 
$('link3').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content3');
});
$('link4').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content4');
});
$('link5').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content5');
});
// Slide About
var mySlide = new Fx.Slide('nosotros');
mySlide.hide();
 


