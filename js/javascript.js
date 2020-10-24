$(document).ready(function () {
	$('.header__burger,.header__link').click (function(event) {
		$('.header__burger,.header__menu,.header__menu__langua').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// function backToTop() {
// 	let button = $('.back-to-top');

// 	$(Window).on('scroll', () => {
// 		if ($(this).scrollTop() >= 50) {
// 			button.fadeIn();
// 		} else {
// 			button.fadeOut();
// 		}
// 	});

// 	button.on('click', (e) => {
// 		e.preventDefault();
// 		$('html').animate({scrollTop: 0});
// 	});
// }

// backToTop();

// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });

(function() {
	'use strict';
 
	function trackScroll() {
	  var scrolled = window.pageYOffset;
	  var coords = document.documentElement.clientHeight;
	  coords =- 300;
 
	  if (coords = 50) {
		 goTopBtn.classList.add('back-to-top-show');
	  }
	  if (scrolled < coords) {
		 goTopBtn.classList.remove('back-to-top-show');
	  }
	}
 
	function backToTop() {
	  if (window.pageYOffset > 0) {
		 window.scrollBy(0, -80);
		 setTimeout(backToTop, 0);
	  }
	}
 
	var goTopBtn = document.querySelector('.back-to-top');
 
	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
 })();

 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

