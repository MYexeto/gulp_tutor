$(document).ready(function(){
    $('.courusel__inner').slick({
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron-right-solid.png"></button>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                infinite: true,
                dots: true
            }
        }],
    });
  });