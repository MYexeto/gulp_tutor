$(document).ready(function () {
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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSLide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSLide('.catalog-item__back');
    toggleSLide('.catalog-item__link');

    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });


    $('.button_mini').on('click', function () {
        $('.overlay, #order').fadeIn('slow');
    });


    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        });
    });


    function valudateForms(form){
        $(form).validate({
            rules:{
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            }
    
        });
    }
    valudateForms('#consultation form');
    valudateForms('#consultation-form');
    valudateForms('#order form');
});