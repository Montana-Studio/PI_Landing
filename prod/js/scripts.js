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

	$('#plat-op1').on('click',function(e){
        $('#plat-op1 .icon-plat').addClass('active-option');
        $('#plat-op2 .icon-plat').removeClass('active-option');
		$('#plat-op3 .icon-plat').removeClass('active-option');
        $('#plat-op4 .icon-plat').removeClass('active-option');
        $('#title-mobile-op1').show();
        $('#title-mobile-op2').hide();
        $('#title-mobile-op3').hide();
        $('#title-mobile-op4').hide();
      
    });
	$('#plat-op2').on('click',function(e){
        $('#plat-op1 .icon-plat').removeClass('active-option');
        $('#plat-op2 .icon-plat').addClass('active-option');
		$('#plat-op3 .icon-plat').removeClass('active-option');
        $('#plat-op4 .icon-plat').removeClass('active-option');
		$('#title-mobile-op1').hide();
        $('#title-mobile-op2').show();
        $('#title-mobile-op3').hide();
        $('#title-mobile-op4').hide();
      
    });
	$('#plat-op3').on('click',function(e){
        $('#plat-op1 .icon-plat').removeClass('active-option');
        $('#plat-op2 .icon-plat').removeClass('active-option');
		$('#plat-op3 .icon-plat').addClass('active-option');
        $('#plat-op4 .icon-plat').removeClass('active-option');
		$('#title-mobile-op1').hide();
        $('#title-mobile-op2').hide();
        $('#title-mobile-op3').show();
        $('#title-mobile-op4').hide();
      
    });
	$('#plat-op4').on('click',function(e){
        $('#plat-op1 .icon-plat').removeClass('active-option');
        $('#plat-op2 .icon-plat').removeClass('active-option');
		$('#plat-op3 .icon-plat').removeClass('active-option');
        $('#plat-op4 .icon-plat').addClass('active-option');
		$('#title-mobile-op1').hide();
        $('#title-mobile-op2').hide();
        $('#title-mobile-op3').hide();
        $('#title-mobile-op4').show();
    });

	$('#plat2-op1').on('click',function(e){
        $('#plat2-op1').addClass('active-option');
        $('#plat2-op2').removeClass('active-option');
		$('#plat2-op3').removeClass('active-option');
        $('#plat2-op4').removeClass('active-option');
    });
	$('#plat2-op2').on('click',function(e){
        $('#plat2-op1').removeClass('active-option');
        $('#plat2-op2').addClass('active-option');
		$('#plat2-op3').removeClass('active-option');
        $('#plat2-op4').removeClass('active-option');
    });
	$('#plat2-op3').on('click',function(e){
        $('#plat2-op1').removeClass('active-option');
        $('#plat2-op2').removeClass('active-option');
		$('#plat2-op3').addClass('active-option');
        $('#plat2-op4').removeClass('active-option');
    });
	$('#plat2-op4').on('click',function(e){
        $('#plat2-op1').removeClass('active-option');
        $('#plat2-op2').removeClass('active-option');
		$('#plat2-op3').removeClass('active-option');
        $('#plat2-op4').addClass('active-option');
    });




	var $elementAnima = $('#video-descr');//elemento para animar
	var $elementAnima3 = $('#video-descr');//elemento para animar
	var $elementAnima4 = $('#video-descr');//elemento para animar

	var $elementAnima2 = $('#menu-pi-home');//elemento para animar
	var $elementAnima2a = $('#menu-pi-home');//elemento para animar
	var $elementAnima2b = $('#menu-pi-home');//elemento para animar

	var $animation_elements = $elementAnima;
	var $animation_elements3 = $elementAnima3;
	var $animation_elements4 = $elementAnima4;

	var $animation_elements2 = $elementAnima2;
	var $animation_elements2a = $elementAnima2a;
	var $animation_elements2b = $elementAnima2b;


	var $window = $(window);
	var window_top_position = $window.scrollTop();

	function check_if_in_view(){

		var window_top_position2b = $window.scrollTop();

		$.each($animation_elements2b, function(){

			if(window_top_position2b > 100){//ScrollTop PX
				$animation_elements2b.addClass('bg-menu-sticky');
			}
			if(window_top_position2b < 100){//ScrollTop PX
				$animation_elements2b.removeClass('bg-menu-sticky');
			}

		}); 


		if(document.documentElement.clientWidth >= 1024){

			var window_top_position = $window.scrollTop();

			$.each($animation_elements, function(){

				if(window_top_position > 3200){//ScrollTop PX
					$animation_elements.removeClass('bottomelements').addClass('topelements');
				}
				if(window_top_position < 3200){//ScrollTop PX
					$animation_elements.removeClass('topelements').addClass('bottomelements');
				}

			});
		}	

		if(document.documentElement.clientWidth <= 1024&&document.documentElement.clientWidth > 769){

			var window_top_position1 = $window.scrollTop();

			$.each($animation_elements, function(){

				if(window_top_position1 > 3300){//ScrollTop PX
					$animation_elements.removeClass('bottomelements').addClass('topelements');
				}
				if(window_top_position1 < 3300){//ScrollTop PX
					$animation_elements.removeClass('topelements').addClass('bottomelements');
				}

			});

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

		if(document.documentElement.clientWidth < 770&&document.documentElement.clientWidth > 671){

			var window_top_position3 = $window.scrollTop();

			$.each($animation_elements3, function(){

				if(window_top_position3 > 3900){//ScrollTop PX
					$animation_elements3.removeClass('bottomelements').addClass('topelements');
				}
				if(window_top_position3 < 3900){//ScrollTop PX
					$animation_elements3.removeClass('topelements').addClass('bottomelements');
				}

			});

			var window_top_position2a = $window.scrollTop();

			$.each($animation_elements2a, function(){

				if(window_top_position2a > 100){//ScrollTop PX
					$animation_elements2.addClass('bg-menu-mobile');
				}
				if(window_top_position2a < 100){//ScrollTop PX
					$animation_elements2.removeClass('bg-menu-mobile');
				}

			}); 
		}

		if(document.documentElement.clientWidth <= 670){ 

			var window_top_position4 = $window.scrollTop();

			$.each($animation_elements4, function(){

				if(window_top_position4 > 2500){//ScrollTop PX
					$animation_elements4.removeClass('bottomelements').addClass('topelements');
				}
				if(window_top_position4 < 2700){//ScrollTop PX
					$animation_elements4.removeClass('topelements').addClass('bottomelements');
				}

			});

		}

	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


});


