$(document).ready(function(){

    var typed = new Typed('.type', {
        // Waits 1000ms after typing "First"
        strings: [
            
            'Mogan Michalvina.',
            'A Graphics Designer.!',
            'A Web Designer.!',
            'A Web developer.!',
            'A Freelancer.!',

            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 70,
            showCursor: true,
        });


        $('.service-slider').slick({
            slidesToShow:3,
            autoplay:true,
            prevArrow:'<i class="fas fa-long-arrow-alt-left left-icon"></i>',
            nextArrow:'<i class="fas fa-long-arrow-alt-right right-icon"></i>',
        });

        var mixer = mixitup(".port-img");

        new VenoBox({
            selector: '.popup',
            spinner:"wave",
            spinColor: "black"
        });

        $('.test-slider').slick({
            slidesToShow:2,
            autoplay:true,
            prevArrow:'<i class="fas fa-long-arrow-alt-left white icon1"></i>',
            nextArrow:'<i class="fas fa-long-arrow-alt-right white icon2"></i>',
        });

        $('.counter').counterUp({
            delay: 5,
            time: 1500
        });

        
        AOS.init({
            offset:500,
        });

       
});
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 600){
        $("#back-top").fadeIn();
    }else{
        $("#back-top").fadeOut();
    }

    if(scrolling > 500){
        $("nav").addClass("nav-fix");
    }else{
        $("nav").removeClass("nav-fix");
    }
});

// working setting
$("#back-top").click(function(){
    $("html,body").animate({
        scrollTop: "0px" ,
    },1500);
});