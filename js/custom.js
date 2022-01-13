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
    
});