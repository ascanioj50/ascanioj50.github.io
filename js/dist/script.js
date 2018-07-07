(function ($) {

    // scroll animations for the homepage
    const homepageScrolling = {
        cacheDom: function () {
            this.projects = $('.project');
        },

        animateHomepageMobile: function (element) {

            let $element = $(element),
                tl = new TimelineMax();

            tl.staggerFrom([$element.find('.project-image-container'), $element.find('.project-content')], 0.6, { y: '+=120', autoAlpha: 0, ease: Power3.easeOut }, '0.2');

            let scene = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0.6
            }).setTween(tl)
            //.addIndicators()
            .addTo(page.controller);
        },

        animateHomepage: function (element) {
            let $element = $(element),
                $image = $element.find('img'),
                $content = $element.find('.project-content'),
                $caption = $element.find('figcaption'),
                $title = $element.find('.project-title'),
                $teaser = $element.find('.project-teaser'),
                $cta = $element.find('.project-cta'),
                $info = $element.find('.project-content__information'),
                tl = new TimelineMax();
            tl2 = new TimelineMax();

            tl.to($image, 0.6, { y: '-=180p', ease: Power1.easeOut }).to($content, 0.6, { y: '-=90px', ease: Power1.easeOut }, '-=0.6').to($caption, 0.6, { y: '+=45px', ease: Power1.easeOut }, '-=1.2');

            let scene = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 1,
                duration: '150%'
            }).setTween(tl)
            //.addIndicators()
            .addTo(page.controller);
        },

        loopElements: function () {
            this.projects.each((index, element) => {
                if ($(window).width() > 768) {
                    this.animateHomepage(element);
                } else {
                    this.animateHomepageMobile(element);
                }
            });
        },

        animateThankYou: function () {
            let tl2 = new TimelineMax();

            tl2.staggerFrom($('.thanks-text').children(), 0.6, { y: '+=20', scale: 0.95, autoAlpha: 0, rotation: 3, ease: Power2.easeOut }, '0.2');
            let scene2 = new ScrollMagic.Scene({
                triggerElement: '.thank-you',
                triggerHook: 0.8
            }).setTween(tl2)
            //.addIndicators()
            .addTo(page.controller);
        },

        init: function () {
            this.cacheDom();
            this.loopElements();
            this.animateThankYou();
        }

        // scroll animations for the about page
    };const aboutpageScrolling = {
        cacheDom: function () {
            this.animationSections = $('.about-animation-section');
        },

        animateAboutPage: function (element) {
            let $element = $(element),
                tl = new TimelineMax();

            tl
            //.from($element.children(), 0.6, {y: '+=80px', autoAlpha: 0, ease: Power1.easeOut});
            .from($element.children(), 1.2, { y: '+=20', scale: 0.95, autoAlpha: 0, rotation: 3, ease: Power2.easeOut });

            let scene = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0.8
            }).setTween(tl)
            //.addIndicators()
            .addTo(page.controller);
        },

        loopElements: function () {
            this.animationSections.each((index, element) => {
                this.animateAboutPage(element);
            });
        },

        init: function () {
            this.cacheDom();
            this.loopElements();
        }

        // scroll animations for the projects page
    };const projectpageScrolling = {
        cacheDom: function () {
            this.elementContainer = $('.scroll-animation');
        },

        animateProjectSection: function (element) {
            let $element = $(element),
                tl = new TimelineMax(),
                animObj = {};

            if ($element.hasClass('scroll-animation-image')) {
                animObj = { y: '+=40', autoAlpha: 0, scale: 0.95, ease: Power2.easeOut };
            } else if ($element.hasClass('scroll-animation-text')) {
                animObj = { y: '+=20', scale: 0.95, autoAlpha: 0, rotation: 3, ease: Power2.easeOut };
            }

            tl.from($element.children(), 1.2, animObj);

            let scene = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0.8
            }).setTween(tl)
            //.addIndicators()
            .addTo(page.controller);
        },

        loopElements: function () {
            this.elementContainer.each((index, element) => {
                this.animateProjectSection(element);
            });
        },

        init: function () {
            this.cacheDom();
            this.loopElements();
        }
    };

    const privateProjectCheck = {

        cacheDom: function () {
            this.overlay = $('.password-overlay');
            this.passwordField = $('.password-field');
            this.submitButton = $('.submit-button');
        },

        animateProjectIn: function () {
            page.body.data('page-type', 'projects');
            let tl = new TimelineMax();
            splitText = new SplitText('.project-details-headline', { type: 'lines' });

            tl.staggerTo($('.password-animate-in'), 0.4, { y: '-=100px', autoAlpha: 0, ease: Power3.easeIn }, '0.05').to(this.overlay, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn }, '-=0.2').set($('.page-wrapper--project-details'), { autoAlpha: 1 }).from($('.hero-image-img'), 1.4, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '+=0.8').staggerFrom(splitText.lines, 2, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.1', '-=1.1');
        },

        checkPassword: function () {
            this.submitButton.on('click', e => {
                let passwordEntered = this.passwordField.val();

                $.ajax({
                    type: 'POST',
                    url: './function.php',

                    success: data => {
                        if (passwordEntered == data) {
                            page.isProtected = false;
                            this.animateProjectIn();
                        } else {
                            page.isProtected = true;
                        }
                    }

                });
            });
        },

        animateOverlayIn: function () {
            let tl = new TimelineMax();

            tl.staggerFrom($('.password-animate-in'), 0.6, { y: '+=100px', autoAlpha: 0, ease: Power3.easeOut }, '0.2', '+=1');
        },

        init: function () {
            this.cacheDom();
            this.animateOverlayIn();
            this.passwordField.focus();
            this.checkPassword();
        }

    };

    const pageLoad = {
        cacheDom: function () {
            this.document = $(document);
            this.page = document.querySelector('#page-wrapper');
        },

        loadNewPage: function (url) {
            return fetch(url, {
                method: 'GET'
            }).then(response => {
                return response.text();
            });
        },

        animatePage: function (oldContent, newContent, url, pageType) {
            let navigationLink = document.querySelector('.navigation__link');

            if (url != this.pageURL) {

                // fade in new content - project
                if (pageType == 'projects') {

                    // check for private projects
                    if (page.isProtected) {

                        // check for password and animate the project in
                        privateProjectCheck.init();
                    } else {
                        page.body.data('page-type', 'projects');
                        let tl = new TimelineMax();
                        splitText = new SplitText('.project-details-headline', { type: 'lines' });

                        if ($(window).width() > 768) {
                            tl.set($('.page-wrapper--project-details'), { autoAlpha: 1 })
                            //.from($('.project-details-headline'), 2, {y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut}, '+=0.6')
                            .from($('.hero-image-img'), 1.4, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '+=0.8').staggerFrom(splitText.lines, 2, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.1', '-=1.1');
                        } else {
                            tl.set($('.page-wrapper--project-details'), { autoAlpha: 1 })
                            //.from($('.project-details-headline'), 2, {y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut}, '+=0.6')
                            .from($('.hero-image-img'), 1.4, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '+=0.8').staggerFrom(splitText.lines, 2, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.1', '-=1.1').staggerFrom([$('.hero-image-role'), $('.project-details-intro-text')], 1.0, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.2', '-=1.9');
                        }
                    }

                    // initialize scroll animations for the project page
                    projectpageScrolling.init();
                }

                // fade in new content - about
                if (pageType == 'about') {
                    page.body.data('page-type', 'about');
                    let tl = new TimelineMax(),
                        splitText = new SplitText('.page-title-animation-about', { type: 'lines' });

                    tl.set($('.page-wrapper--project-details'), { autoAlpha: 1 }).staggerFrom(splitText.lines, 2, { y: '+=400', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.2');

                    // initialize scroll animations for the about page
                    aboutpageScrolling.init();
                }

                // fade in new content - index
                if (pageType == 'index') {
                    page.body.data('page-type', 'index');
                    let tl = new TimelineMax(),
                        splitText = new SplitText('.page-title-animation', { type: 'lines' }),
                        $pageTitle = $('.page-title-animation'),
                        $pageSubtitle = $('.page-subtitle-animation ');

                    tl.set($('.page-wrapper--project-details'), { autoAlpha: 1 }).staggerFrom(splitText.lines, 2, { y: '+=350', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.2').from($pageSubtitle, 2, { y: '+=200', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '-=1.4');

                    // initialize scroll animations for the homepage
                    homepageScrolling.init();
                }

                // remove old page
                this.page.removeChild(oldContent);
            }
        },

        changePage: function (pageType) {
            // get url of the page
            let url = window.location.href;
            this.loadNewPage(url).then(responseTxt => {
                let $container = document.createElement('div');
                $container.innerHTML = responseTxt;
                let oldContent = document.querySelector('.page-wrapper-inner'),
                    newContent = $container.querySelector('.page-wrapper-inner');
                // insert the content before the footer element
                this.page.insertBefore(newContent, document.querySelector('#insert-footer'));

                // start page loading animaiton
                this.animatePage(oldContent, newContent, url, pageType);
            });
        },

        clickListener: function () {
            this.document.on('click', '.link--internal', event => {

                let tl = new TimelineMax();
                $target = $(event.target), url = $target.attr('href');
                $overlay = $('.overlay-loading');

                // check if element is the link
                // url = ( url != undefined ) ? url : $target.parent().attr('href');
                url = url != undefined ? url : $target.closest('a').attr('href');

                if (url == $("body").data("current-page")) {} else {}

                // project animation - fade out of the elements
                if ($target.hasClass('project-cta') || $target.closest('a').hasClass('project-cta')) {

                    if ($target.hasClass('protected')) {
                        page.isProtected = true;
                    } else {
                        page.isProtected = false;
                    }
                    this.loadProjects(tl, $target, url, $overlay);
                }

                if (url == 'index.html') {
                    this.loadIndex(tl, $target, url, $overlay);
                }

                if (url == 'about.html' || url == 'imprint.html') {
                    this.loadAbout(tl, $target, url, $overlay);
                }

                // add the new url to the history pushstate
                history.pushState(null, null, url);

                // call the function to change the page
                event.preventDefault();
            });
        },

        loadProjects: function (tl, $target, url, $overlay) {

            let $projectContent = $('.project-content'),
                $projectContentChilds = $projectContent.children(),
                $imageContainer = $('.project-image-container');

            $projectContent.css('overflow', 'hidden');
            $projectContent.find('a').css('display', 'inline-block');

            tl.to($projectContentChilds, 0.6, { y: '-=400', ease: Power3.easeIn }).to($imageContainer.find('figcaption'), 0.6, { autoAlpha: 0, y: '-=400', ease: Power3.easeIn }, '-=0.6').set($imageContainer, { css: { overflow: 'hidden' } }, '-=0.4').to($imageContainer.find('img'), 0.6, { y: '-=500', ease: Power3.easeIn }, '-=0.4').to(window, 1, { scrollTo: '#page-top', onComplete: () => {
                    this.changePage('projects');
                    $('.page-scroll').find('span').text('scroll');
                } }, '-=0.2').to($('.page-wrapper-inner--index').children(), 0.6, { autoAlpha: 0, ease: Power3.easeIn }, '-=0.6').to([$('.page-title'), $('.project')], 0.6, { autoAlpha: 0, ease: Power3.easeIn }, '-=1.4').fromTo($overlay, 0.6, { scaleY: 0, transformOrigin: '100% 100%' }, { scaleY: 1, ease: Power2.easeOut }, '-=0.4').to($overlay, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn }, '+=0.4');
        },

        loadIndex: function (tl, $target, url, $overlay) {
            let pageElements = $('.page-loading-transform-up');

            tl.fromTo(pageElements, 0.6, { y: '0' }, { y: '-=200', autoAlpha: 0, ease: Power4.easeIn }, '0.2').to(window, 1, { scrollTo: '#page-top', onComplete: () => {
                    this.changePage('index');
                    $('.page-scroll').find('span').html('scroll to projects');
                } }, '-=0.2').fromTo($overlay, 0.6, { scaleY: 0, transformOrigin: '100% 100%' }, { scaleY: 1, ease: Power2.easeOut }, '-=0.4').to($overlay, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn });
        },

        loadAbout: function (tl, $target, url, $overlay) {
            let pageElements = $('.page-loading-transform-up');

            tl.fromTo(pageElements, 0.6, { y: '0' }, { y: '-=200', autoAlpha: 0, ease: Power4.easeIn }, '0.2').to(window, 1, { scrollTo: '#page-top', onComplete: () => {
                    this.changePage('about');
                    $('.page-scroll').find('span').text('scroll');
                } }, '-=0.2').fromTo($overlay, 0.6, { scaleY: 0, transformOrigin: '100% 100%' }, { scaleY: 1, ease: Power2.easeOut }, '-=0.6').to($overlay, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn });
        },

        init: function () {
            this.cacheDom();
            this.clickListener();
        }
    };

    const page = {
        cacheDom: function () {
            this.controller = new ScrollMagic.Controller();
            this.window = $(window);
            this.body = $('body');
            this.pageWrapper = $('#page-wrapper');
            this.isProtected = false;
            //   this.internalLinks = $('.link--internal');
        },

        //   // internal link click listener 
        //   internalLinkListener : function(){
        //     this.internalLinks.on('click', (event) => {
        //         console.log('test');
        //         event.preventDefault();
        //     });
        //   },


        // animation to load the content and show the preloader
        loadAnimation: function () {

            if ($('.page-title-animation').length) {

                let tl = new TimelineMax(),
                    splitText = new SplitText('.page-title-animation', { type: 'lines' }),
                    $preloader = $('#preloader'),
                    $preloaderHL1 = $('.animation-text-1'),
                    $preloaderHL2 = $('.animation-text-2'),
                    $preloaderBG1 = $('.preloader-bg--white'),
                    $preloaderBG2 = $('.preloader-bg--white-2'),
                    $animElements = $('.animate-loading'),
                    $title = $('.page-title-animation'),
                    $subtitle = $('.page-subtitle-animation');
                //$elements     = $pageWrapper.find('section').children();


                tl.set([$preloaderHL1, $preloaderHL2], { autoAlpha: 1 }).from($preloaderHL1, 0.6, { y: '+=100px', transformOrigin: '50% 50%', rotation: 5, ease: Power3.easeOut }, '0.6').to($preloaderHL1, 0.4, { y: '-=200px', autoAlpha: 0, rotation: -5, ease: Power4.easeIn }, '+=1').to($preloaderBG1, 0.6, { y: '0', ease: Power2.easeOut }, '-=0.4').to($preloaderBG1, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn }).from($preloaderHL2, 0.6, { y: '+=100px', transformOrigin: '50% 50%', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }).to($preloaderHL2, 0.4, { y: '-=200px', rotation: -5, ease: Power4.easeIn }, '+=1').to($preloaderBG2, 0.6, { y: '0', ease: Power2.easeOut }, '-=0.4').to($preloaderBG2, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn }).to($preloader, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power2.easeOut }, '-=0.4').staggerFrom($animElements, 0.6, { y: '+=100px', rotation: 5, ease: Power3.easeOut }, '0.1', '-=0.4')
                //.from($title, 0.6, {y: '+=300px', rotation: 5, ease: Power3.easeOut})
                .staggerFrom(splitText.lines, 2, { y: '+=350', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.2', '-=0.4').from($subtitle, 0.6, { y: '+=100', rotation: 5, ease: Power3.easeOut }, '-=0.5');
            } else {
                let tl = new TimelineMax(),
                    splitText = new SplitText('.project-details-headline', { type: 'lines' }),
                    $preloader = $('#preloader'),
                    $preloaderHL1 = $('.animation-text-1'),
                    $preloaderHL2 = $('.animation-text-2'),
                    $preloaderBG1 = $('.preloader-bg--white'),
                    $preloaderBG2 = $('.preloader-bg--white-2'),
                    $animElements = $('.animate-loading'),
                    $title = $('.page-title-animation');
                //$elements     = $pageWrapper.find('section').children();


                tl.set([$preloaderHL1, $preloaderHL2], { autoAlpha: 1 }).from($preloaderHL1, 0.6, { y: '+=100px', transformOrigin: '50% 50%', rotation: 5, ease: Power3.easeOut }, '0.6').to($preloaderHL1, 0.4, { y: '-=200px', autoAlpha: 0, rotation: -5, ease: Power4.easeIn }, '+=1').to($preloaderBG1, 0.6, { y: '0', ease: Power2.easeOut }, '-=0.4').to($preloaderBG1, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn }).from($preloaderHL2, 0.6, { y: '+=100px', transformOrigin: '50% 50%', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }).to($preloaderHL2, 0.4, { y: '-=200px', rotation: -5, ease: Power4.easeIn }, '+=1').to($preloaderBG2, 0.6, { y: '0', ease: Power2.easeOut }, '-=0.4').to($preloaderBG2, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn }).to($preloader, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power2.easeOut }, '-=0.4').staggerFrom($animElements, 0.6, { y: '+=100px', rotation: 5, ease: Power3.easeOut }, '0.1', '-=0.4')
                //.from($title, 0.6, {y: '+=300px', rotation: 5, ease: Power3.easeOut})
                .from($('.hero-image-img'), 1.4, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '-=1').staggerFrom(splitText.lines, 2, { y: '+=100', autoAlpha: 0, rotation: 5, ease: Power3.easeOut }, '0.1', '-=1.1');
            }
        },

        windowPopStateListener: function () {
            window.addEventListener('popstate', () => {
                let currPageType = page.body.data('page-type'),
                    tl = new TimelineMax(),
                    pageElements = $('.page-loading-transform-up');

                tl.fromTo(pageElements, 0.6, { y: '0' }, { y: '-=200', autoAlpha: 0, ease: Power4.easeIn }, '0.2').to(window, 1, { scrollTo: '#page-top', onComplete: () => {
                        pageLoad.changePage(currPageType);
                        $('.page-scroll').find('span').html('scroll');
                    } }, '-=0.2').fromTo($overlay, 0.6, { scaleY: 0, transformOrigin: '100% 100%' }, { scaleY: 1, ease: Power2.easeOut }, '-=0.4').to($overlay, 0.6, { scaleY: 0, transformOrigin: '0 0', ease: Power3.easeIn });
            });
        },

        init: function () {
            console.log('Yo! :) I hope you like my website! If you are interested in me or my work I would love to hear from you! :)');
            this.loadAnimation();
            this.cacheDom();
            //this.internalLinkListener();
            pageLoad.init();
            projectpageScrolling.init();
            homepageScrolling.init();
            aboutpageScrolling.init();

            // check for private projects
            privateProjectCheck.init();

            this.windowPopStateListener();
        }

        // init page
    };page.init();
})(jQuery);