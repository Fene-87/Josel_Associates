$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });

    // aos instance
    AOS.init();
})