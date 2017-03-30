(function($) {
    $(document).ready(function() {

        // // BELOW IS THE JQUERY PLUGIN FOR AUTO TYPING
        // $('span#typed').typed({
        //     // strings can be separated by commas inside the [] and must be inside ""
        //     strings: ["MICHAEL", "ANTHONY", "TEJADA"],
        //     // higher number means slower!
        //     typeSpeed: 100,
        //     // false means it goes once, true means it loops forever!
        //     loop: true, 
        //     backSpeed: 20,
        //     // higher number means longer start delay
        //     startDelay: 500
        // });



        // BELOW IS THE jQUERY PLUGIN FOR AUTO SCROLLING
        $('.scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 50000); // The higher the number, the slower the scroll
                return false;
                }
            }
        });
    });

})(jQuery)

