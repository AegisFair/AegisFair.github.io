$(function(){
    $('#my-menu').mmenu({
       extensions: [
           'widescreen',
           'theme-black',
           'effect-menu-slide',
           'pagedim-black',
        ],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Smitler">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    var apiMmenu = $('#my-menu').data('mmenu');
    apiMmenu.bind('opened', function(){
        $('.hamburger').addClass('is-active');
    }).bind('closed', function(){
        $('.hamburger').removeClass('is-active');
    })
    
    /*$('.carousel-services').on('initialized.owl.carousel', function(){
        setTimeout(
            function(){
                carouselService();
            },100);
    })*/
    $('.carousel-services-composition .h3').each(function(){
        $(this).html($(this).html().replace(/(\S+)\s*$/,'<span>$1</span>'))
    })
    $('section .h2').each(function(){
        $(this).html($(this).html().replace(/^(\S+)/,'<span>$1</span>'))
    })

    $('.carousel-services').owlCarousel({
        loop: false,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }

    });
    
    $('select').selectize({
        sortField: 'text'
    })
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoHeight: true
    });
    $('.partners').owlCarousel({
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
       
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    });

    $(window).scroll(function(){
        if($(this).scrollTop() > $(this).height()){
            $('.top').addClass('active');
        }else{
            $('.top').removeClass('active');
        }
    })
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop: 0},'slow','swing');
    })

    //E-mail Ajax Send
    // FOR DEPLOY!
    /*$("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/maiill.php", //Change
            data: th.serialize()
        }).done(function() {
            th.find('.success').addClass('active').css('display','flex')//.hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                console.log(th)
                th.find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });*/
    // Alternative ajax, for presentation
    $('.callback button').on('click', function(){
        $('.success').addClass('active').css('display','flex');
        setTimeout(function() {
            $('.success').removeClass('active').fadeOut();
        }, 3000);
    })
    //
    function carouselService(){
        $('.carousel-services-item').each(function (){
                var contentHeight = $(this).find('.carousel-services-content').outerHeight();
                $(this).find('.carousel-services-image').css('min-height',contentHeight);
        })
    };
    
    // resize Window
    function onResize(){
        $(".carousel-services-content").equalHeights();
        carouselService();
    }onResize();
    window.onresize = onResize;

    $(window).on('load',function(){
        $('.preloader').delay(1000).fadeOut('slow');
    })
});