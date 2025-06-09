(function ($) {
    "use strict";
    // function getUserLocation() {
    //     // Make a request to ipinfo.io to get user's location
    //     // fetch('https://ipinfo.io/json/?token=0b36dede6c7aa0')
    //     //     .then(data => {
    //     //         console.log(data);
    //     //     })
    //     //     .catch(error => {
    //     //         console.error('Error:', error);
    //     //     });
    // }
    

    // function setTextAndPrice() {
    //     // getUserLocation().then((res) => {
    //         // let location = res;
    //         let location = "IN";
    //         // console.log(res);
    //         let spans = document.querySelectorAll(".price-text");
    //         let price;
    //         spans.forEach(function(span) {
    //             var india = span.getAttribute("ip");
    //             var out = span.getAttribute("op");

    //             if (location === "IN") {
    //                 price = india + " Rs/mo"; // Price in USD for India.
    //             } else {
    //                 price = "$" + out; + "/mo" // Price in USD for other countries.
    //             }
    //             span.innerHTML = price;
    //         })
    //     // })
    // }

    // setTextAndPrice();
    
    // Call the function with the user's location.
    

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 3000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Lazy load videos
    document.addEventListener("DOMContentLoaded", function () {
        const videos = document.querySelectorAll(".video-card iframe");
        videos.forEach((video) => {
            video.setAttribute("loading", "lazy");
        });
    });
      
    
})(jQuery);

