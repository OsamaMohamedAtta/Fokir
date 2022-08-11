/*-- Intelligent-header
------------------------------ */ 
const myElement = document.querySelector(".intelligent-header");
const headroom  = new Headroom(myElement);
headroom.init();  

/*- smoth-scroll js
-------------------------*/ 
$('.smooth-scroll a,.hire-me').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 40
    }, 1000);
    e.preventDefault();
});

/*- Extra js 
---------------------*/	    
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});
$('body').scrollspy({
    target: '.navbar-collapse',
    offset: 200
});  


/*-- Isotope active JS
-----------------------------*/
$('.grid').imagesLoaded( function() {

   // filter items on button click
   $('.portfolio-menu').on('click','button',function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
   });
    // init Isotope
    let $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item',
        }
    });
    
});
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});   
/*--- Magnific Popup
------------------------*/
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery:{
    enabled:true
}
});    
/* magnificPopup video popup */
$('.video-play').magnificPopup({
    type: 'iframe'
});

/*-- CounterUp
------------------------------*/
    
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/*-- owl active
------------------------------ */    
$('.testimonel-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay: true,
    smartSpeed: 1000,
    dots:true,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
});

//Switch dark/light back to top
$(".switch").on('click', function () {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
    }
    else {
        $("body").addClass("light");
        $(".switch").addClass("switched");
    }
});
$(document).ready(function(){
    //Scroll back to top
    let progressPath = document.querySelector('.progress-wrap path');
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    let updateProgress = function () {
        let scroll = $(window).scrollTop();
        let height = $(document).height() - $(window).height();
        let progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);	
    let offset = 50;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });				
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 'fast');
        return false;
    })
});






