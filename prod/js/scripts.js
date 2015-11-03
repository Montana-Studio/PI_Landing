
/*function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.cli-section').css('height',unitHeight);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.video-container video').addClass('fadeIn animated');

    });
}  

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

	scaleVideoContainer();

	initBannerVideoSize('.video-container .poster img');
	initBannerVideoSize('.video-container .filter');
	initBannerVideoSize('.video-container video');

	$(window).on('resize', function() {
	    scaleVideoContainer();
	    scaleBannerVideoSize('.video-container .poster img');
	    scaleBannerVideoSize('.video-container .filter');
	    scaleBannerVideoSize('.video-container video');
	});

}*/

 

$( document ).ready(function() {

	 $('.icon-mobile-menu').on('click', function(e) {
		$('.mobile-menulist').toggleClass('show'); 
		$('.menu-mobile').toggleClass('show'); 
		$('.icon-mobile-menu').toggleClass('icon-color'); 
		$('.mobile-menulist ul').toggleClass('list-style-menu'); 
		e.preventDefault();
	 });

	$('a.animation-pi').on('click',function(e){
        e.preventDefault();
        var strAncla=$(this).attr('href');
         
        $('body,html').stop(true,true).animate({
            scrollTop: $(strAncla).offset().top
        },1000);
    });

	$('a.animation-pi').on('click',function(e){
		$('.mobile-menulist').removeClass('show'); 
		$('.menu-mobile').removeClass('show'); 
		$('.icon-mobile-menu').removeClass('icon-color'); 
		$('.mobile-menulist ul').removeClass('list-style-menu'); 
	});	

	$('#influencer-section').jParticle({
		background:'#2c327c',
		color:'#02b794'
	});


	var $elementAnima = $('#video-descr');//elemento para animar
	var $elementAnima2 = $('#menu-pi-home');//elemento para animar
	var $animation_elements = $elementAnima;
	var $animation_elements2 = $elementAnima2;
	var $window = $(window);
	var window_top_position = $window.scrollTop();

	function check_if_in_view(){


		if(document.documentElement.clientWidth >= 1024){

			var window_top_position = $window.scrollTop();

			$.each($animation_elements, function(){

				if(window_top_position > 2600){//ScrollTop PX
					$animation_elements.removeClass('bottomelements').addClass('topelements');
				}
				if(window_top_position < 2400){//ScrollTop PX
					$animation_elements.removeClass('topelements').addClass('bottomelements');
				}

			});
		}	

		if(document.documentElement.clientWidth < 1024&&document.documentElement.clientWidth > 600){

			var window_top_position1 = $window.scrollTop();

			$.each($animation_elements, function(){

				if(window_top_position1 > 2400){//ScrollTop PX
					$animation_elements.removeClass('bottomelements').addClass('topelements');
				}
				if(window_top_position1 < 2400){//ScrollTop PX
					$animation_elements.removeClass('topelements').addClass('bottomelements');
				}

			});
		}

		if(document.documentElement.clientWidth <= 600){

			var window_top_position2 = $window.scrollTop();

			$.each($animation_elements2, function(){

				if(window_top_position2 > 100){//ScrollTop PX
					$animation_elements2.addClass('bg-menu-mobile');
				}
				if(window_top_position2 < 100){//ScrollTop PX
					$animation_elements2.removeClass('bg-menu-mobile');
				}

			});
		}

	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


});


