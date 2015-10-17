$(document).ready(function(e){

	$('.gallery img:first-child').addClass('shown').next().addClass('hide');
	
	var name = $('.shown').attr('title');
	$('h1').text(name);

	$('.next').on('click', function(){
		var $shown = $('.shown');
		var title = $shown.removeClass('shown').next().addClass('shown').attr('title');
		$('h1').text(title);
	});
	
	$('.prev').on('click', function(){
		var $shown = $('.shown');
		var title = $shown.removeClass('shown').prev().addClass('shown').attr('title');
		$('h1').text(title);
	});


});