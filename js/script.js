$( document ).ready(function() {
	const iconMenu = $(".menu__burger")
	const header = $(".header");
	const headerBody = $(".menu");
	const bodyMenu = $(".header__body");
	const string = $(".full-screen__icon")
	const fullScreen = $(".full-screen")
	//Меню бургер
	if(iconMenu) {
		iconMenu.click(function(event) {
			$('body').toggleClass("_lock");
			iconMenu.toggleClass("_active");
			headerBody.toggleClass("_active");
			bodyMenu.toggleClass("_active");
		});
	}
	if(string) {
		string.click(function(event) {
			window.scroll({
				left: 0,
				top: window.innerHeight - header.outerHeight(),
				behavior: "smooth"
			})
		});
	}
	$.each($('.city__your-city'), function (index, val) {
		if ($("option:selected").val() == 1) {
			$(".rus").addClass('russia');
			console.log("russia");
		} 
		if ($("option:selected").val() == 2) {
			$(".ukr").addClass('ukraine');
			console.log("ukraine");
		} 
		if ($("option:selected").val() == 3) {
			$(".uk").addClass('england');
			console.log("england");
		}
	});
	var yourCity = $(".city__your-city");
	$(document).on('click', '.city__your-city', function (event) {
		if (yourCity.hasClass('russia')) {
			yourCity.prop('selected', false);
		} else {
			yourCity.prop('selected', true);
		}

		yourCity.toggleClass('russia');

		if (yourCity.hasClass('ukraine')) {
			yourCity.prop('selected', false);
		} else {
			yourCity.prop('selected', true);
		}

		yourCity.toggleClass('ukraine');

		if (yourCity.hasClass('england')) {
			yourCity.prop('selected', false);
		} else {
			yourCity.prop('selected', true);
		}

		yourCity.toggleClass('england');

		return false

	});

});



// //CHECKBOX
// $.each($('.checkbox'), function (index, val) {
// 	if ($(this).find('input').prop('checked')==true) {
// 		$(this).addClass('active');
// 	}
// });
// $(document).on('click', '.checkbox', function (event) {
// 	if ($(this).hasClass('active')) {
// 		$(this).find('input').prop('checked', false);
// 	} else {
// 		$(this).find('input').prop('checked', true);
// 	}

// 	$(this).toggleClass('active');

// 	return false;
// });
//     //RADIO
// $.each($('.radiobuttons__item'), function (index, val) {
// 	if ($(this).find('input').prop('checked')==true) {
// 		$(this).addClass('active');
// 	}
// });
// $(document).on('click', '.radiobuttons__item', function (event) {
// 	$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
// 	$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
// 	$(this).toggleClass('active');
// 	$(this).find('input').prop('checked', true);
// 	return false;
// });






    // $(document).on('click', '.radiobuttons__item', function (event) {
    //     $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
    //     $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
    //     $(this).toggleClass('active');
    //     $(this).find('input').prop('checked', true);
    //     return false;
    // });

