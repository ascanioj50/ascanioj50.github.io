'use strict';

/*---------------------------------------------- 
               S L I D E R
------------------------------------------------*/

function mainBanner() {

    if ($('#rev_slider').length > 0) {
        var revapi16;
        if ($('#rev_slider').revolution == undefined) {
            revslider_showDoubleJqueryError('#rev_slider');
        } else {
            revapi16 = $('#rev_slider').show().revolution({
                sliderType: 'carousel',
                jsFileLocation: '../revolution/js/',
                sliderLayout: 'fullscreen',
                dottedOverlay: 'none',
                delay: 9000,
                navigation: {
                    keyboardNavigation: 'off',
                    keyboard_direction: 'horizontal',
                    mouseScrollNavigation: 'off',
                    // mouseScrollNavigation:"on",
                    // mouseScrollReverse:"default",
                    onHoverStop: 'off',
                    touch: {
                        touchenabled: 'on',
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: 'horizontal',
                        drag_block_vertical: false
                    },

                    arrows: {
                        style: 'arrowpag',
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: false,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="arrow-text">{{param1}}</div>',
                        left: {
                            h_align: 'left',
                            v_align: 'center',
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: 'right',
                            v_align: 'center',
                            h_offset: 30,
                            v_offset: 0
                        }
                    },

                    tabs: {
                        style: 'hermes',
                        enable: true,
                        // width: 175,
                        // height: 140,
                        width: 320,
                        height: 160,
                        min_width: 150,
                        wrapper_padding: 0,
                        wrapper_color: '#000000',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 10,
                        hide_onmobile: true,
                        hide_under: 776,
                        hide_onleave: false,
                        hide_delay: 200,
                        // direction: "vertical",
                        direction: 'horizontal',
                        span: true,
                        position: 'inner',
                        space: 0,
                        // h_align: "right",
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 100
                    }
                },
                carousel: {
                    horizontal_align: 'center',
                    vertical_align: 'center',
                    fadeout: 'on',
                    vary_fade: 'on',
                    maxVisibleItems: 3,
                    infinity: 'on',
                    space: 0,
                    stretch: 'on'
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [800, 640, 480, 480],
                gridheight: [720, 720, 480, 360],
                lazyLoad: 'on',
                lazyType: 'smart',
                parallax: {
                    type: 'scroll',
                    origo: 'enterpoint',
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
                },
                shadow: 0,
                spinner: 'off',
                stopLoop: 'off',
                stopAfterLoops: 0,
                stopAtSlide: -1,
                shuffle: 'off',
                autoHeight: 'off',
                disableProgressBar: 'off',
                hideThumbsOnMobile: 'off',
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: 'off',
                    nextSlideOnWindowFocus: 'off',
                    disableFocusListener: false
                }
            });
        }
    };

    $('#thumbsButton').on('mouseenter', function (e) {
        $('body').toggleClass('showThumbnails');
    });

    $('.tp-tabs').on('mouseleave', function (e) {
        $('body').removeClass('showThumbnails');
    });
}

/*---------------------------------------------- 
            S L I D E R   S C R O L L
------------------------------------------------*/
function mainBannerScroll() {
    if ($('#rev_slider_scroll').length > 0) {
        var revapiScroll;
        if ($('#rev_slider_scroll').revolution == undefined) {
            revslider_showDoubleJqueryError('#rev_slider_scroll');
        } else {
            revapiScroll = $('#rev_slider_scroll').show().revolution({
                sliderType: 'standard',
                jsFileLocation: '../revolution/js/',
                sliderLayout: 'fullscreen',
                dottedOverlay: 'none',
                delay: 9000,
                navigation: {
                    keyboardNavigation: 'on',
                    keyboard_direction: 'vertical',
                    mouseScrollNavigation: 'on',
                    mouseScrollReverse: 'default',
                    onHoverStop: 'off',
                    touch: {
                        touchenabled: 'on',
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: 'vertical',
                        drag_block_vertical: false
                    },

                    bullets: {
                        enable: true,
                        // rtl:true,
                        hide_onmobile: true,
                        hide_under: 1024,
                        style: 'uranus',
                        hide_onleave: false,
                        direction: 'vertical',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 30,
                        v_offset: 0,
                        space: 5,
                        tmp: '<span class="tp-bullet-inner"></span>'
                    }
                },
                viewPort: {
                    enable: true,
                    outof: 'wait',
                    visible_area: '80%',
                    presize: false
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: 'single',
                shadow: 0,
                spinner: 'spinner2',
                stopLoop: 'on',
                stopAfterLoops: 0,
                stopAtSlide: 1,
                shuffle: 'off',
                autoHeight: 'off',
                fullScreenAutoWidth: 'off',
                fullScreenAlignForce: 'off',
                fullScreenOffsetContainer: '',
                fullScreenOffset: '',
                disableProgressBar: 'on',
                hideThumbsOnMobile: 'off',
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: 'off',
                    nextSlideOnWindowFocus: 'off',
                    disableFocusListener: false
                }
            });
        }
    };
}

/*---------------------------------------------- 
            S L I D E R   T E X T
------------------------------------------------*/
function sliderSuperSlidesText() {
    if ($('#height_slider_text').length > 0) {
        var slides = $('#height_slider_text').superslides({
            hashchange: false,
            animation: 'fade',
            play: 10000
        });
    }
    if ($('#owl-main-text').length > 0) {
        $('#owl-main-text').owlCarousel({
            autoPlay: 10000,
            goToFirst: true,
            goToFirstSpeed: 2000,
            navigation: false,
            slideSpeed: 700,
            pagination: false,
            transitionStyle: 'fadeUp',
            singleItem: true
        });
    };
}

/*---------------------------------------------- 
           M E N U  F U L L S C R E E N
------------------------------------------------*/
function menuFull() {
    if ($('#trigger-overlay').length > 0) {
        $('#trigger-overlay').click(function () {
            if ($('.overlay').hasClass('open')) {
                $('.overlay').removeClass('open');
                $(this).removeClass('is-active');
            } else {
                $('.overlay').addClass('open');
                $(this).addClass('is-active');
            }
            return false;
        });
        $('.overlay').find('a').on('click', function (e) {
            $('.overlay').removeClass('open'), $('.dropdown-icon').removeClass('is-active');
        });
    }
}

/*---------------------------------------------- 
           A N I M A T I O N  I N V I E W
------------------------------------------------*/
function animationInview() {
    /*Sections appears in scroll*/
    $('.row').bind('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('visible');
        }
    });
    // $('.grid-item').bind('inview', function(event, isInView) {
    //     if (isInView) {
    //         $(this).addClass('visible');
    //     }
    // });
}

function countdownComingSoon() {
    if ($('#timer').length > 0) {
        // Create a countdown instance. Change the launchDay according to your needs.
        // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
        // Thus the launchDay below denotes 7 December, 2014.
        var launchDay = new Date(2017, 12 - 1, 7);
        $('#timer').countdown({
            until: launchDay
        });
    }
}

$('.type-it').typeIt({
     strings: ["thinking", "color", "typography", "concepting", "white"],
     speed: 110,
     breakLines: false,
     autoStart: false,
     loop: true
});

// DOM ready function
(function ($) {
    mainBanner();
    mainBannerScroll();
    sliderSuperSlidesText();
    menuFull();
    countdownComingSoon();
})(jQuery);

(function ($) {

    $(window).on('load', function () {
        /*---------------------------------------------- 
                         L O A D E R
        ------------------------------------------------*/
        $('#mask').delay(500).fadeOut('slow', function () {
            animationInview();
        });

        /*---------------------------------------------- 
                         I S O T O P E
        ------------------------------------------------*/
        var $container = $('.grid-gallery').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });
        // // filter items on button click
        $('.js-filters').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        }).each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // load more
        $('.js-loadmore').on('click', function () {
            var newItems = $('.js-more-items').appendTo($container);
            $container.isotope('insert', newItems);
            $(this).hide();
            return false;
        });
    });
})(jQuery);