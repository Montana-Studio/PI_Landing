
function scaleVideoContainer() {

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

}

 

	$( document ).ready(function() {

		$('a.animation-pi').on('click',function(e){
	        //prevenir en comportamiento predeterminado del enlace
	        e.preventDefault();
	        //obtenemos el id del elemento en el que debemos posicionarnos
	        var strAncla=$(this).attr('href');
	         
	        //utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
	        $('body,html').stop(true,true).animate({
	            //realizamos la animacion hacia el ancla
	            scrollTop: $(strAncla).offset().top
	        },1000);
	    });

		$('#influencer-section').jParticle({
			background:'#2c327c',
			color:'#02b794'
		});

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

	});

}