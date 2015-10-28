$(document).ready(function() {
    $('#specs-one').on('click', function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
	});

	$('#specs-two').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		
	});
	$('#specs-three').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		
	});
	$('#specs-four').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
	});

	$('.accordion').accordion({defaultOpen: '#specs-one'});

	$(window).load(function(){
		$('.container-All').mCustomScrollbar({
			theme:'minimal',
		});
	});
});

