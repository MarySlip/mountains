$(document).ready(function () {
	//BURGER
	$('.header-menu__icon').click(function (event) {
		$('.header-menu__icon,.header-top-lang,.header-bottom-menu').toggleClass('active');
		$('body').toggleClass('lock')
	});



//CHECKBOX

	$.each($('.checkbox'), function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function(event){
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');


		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function(event){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	})
	$(document).on('click', '.radiobuttons__item', function(event){
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	})


//IMAGES
	$.each($('.ibg'), function (index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	})
	ibg()
});

//Убирает или добавляет Class для BURGER
$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});






//Paralax___________________________________________________________________
$(document).ready(function() {
	$(window).scroll(function(event) {
			var s=$(this).scrollTop();
			var w=$(this).outerWidth();
			var h=$('.content').outerHeight();
			var h_b = $('.parallax').outerHeight();
			var p=s/h*100;
			var p_b = s / h_b * 100;
			var o=1-1/100*p_b;


			var z_1=1+(w/10000*p_b);
		$('.parallax__fog').css('transform','scale('+z_1+')');	
		$('.parallax__fog').css('opacity', o);	

			var z_2=1+(w/5000000*p);
		$('.parallax__montain-1').css('transform', 'scale(' + z_2 + ')');

			var hr=w/2000*p_b;
			var z_3=1+(w*0.000005*p_b);
		$('.parallax__montain-2').css('transform','translate3d('+hr+'px,0,0) scale(' + z_3 + ')');

		var hr_2 = w / 1500 * p_b;
		var z_4 = 1 + (w * 0.00001 * p_b);
		$('.parallax__montain-3').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_4 + ')');
	});
});























