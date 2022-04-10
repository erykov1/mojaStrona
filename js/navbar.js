jQuery(function($) {
    $.scrollTo(0);

    $('.scrollUp').click(function() { $.scrollTo($('#navigation'), 1000 ); });
    $('#edu-nav').click(function() { $.scrollTo($('#about-me'), 1000 ); });
    $('#hobby-nav').click(function() { $.scrollTo($('#hobby-section'), 1000 ); });
    $('#contact-nav').click(function() { $.scrollTo($('#contact-section'), 1000 ); });

}
);