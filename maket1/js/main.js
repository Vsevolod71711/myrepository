$(function(){
    
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function(){
        $('.directions__filter-btn').removeClass        ('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows:false,
        slidesToShow: 4,
        Infinite: true,
        draggable:false,
        
    })
    $('.team__slider-prev').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')({
        })
    })
    $('.team__slider-next').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')({
        })
    })

    $('.testimonials__slider').slick({
        arrows:false,
        slidesToShow: 1,       
        dots:true,
        appendDots: $('.testimonials__dots'),         
    })
    $('.testimonials__prev').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')({
        })
    })
    $('.testimonials__next').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')({
        })
    })

    //$('.program__acc-link').on('click', function (e) {
        //e.preventDefault()
        //$(this).toggleClass('program__acc-link--active')
        //$(this).children('.program__acc-text').slideToggle()
   // })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if($(this).hasClass('program__acc-link--active')){
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } 
        else{
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.159902, 61.402554],
            zoom: 16
        });
    }

    $('a[href^="#"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top -100 // #4
        }, 2000); // #5
        });

        setInterval(() => {
            if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
                $('.burger').addClass('burger--follow')
            }
            else{
                $('.burger').removeClass('burger--follow')
            }
        }, 0);
        
        $('.burger, .overlay').on('click', function (e) {
            e.preventDefault()
            $('.header__top').toggleClass('header__top--open')
            $('.overlay').toggleClass('overlay--show')
        })
})