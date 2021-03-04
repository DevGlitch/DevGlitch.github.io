/*
 *
 *		CUSTOM.JS
 *
 */

// WAVES EFFECT //
!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===d.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves"))){e=n;break}if(n.classList.contains("waves")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.waves)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*15+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;var o=(n=a[a.length-1]).getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},u)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-waves-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(u(".waves")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);

(function($) {

    'use strict';

    // DETECT TOUCH DEVICE //
    function is_touch_device() {
        return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
    }

    // STICKY //
    function sticky() {

        var sticky_point = $('#header').innerHeight() + 100;

        $('#header').clone().attr({
            id: 'header-sticky',
            class: ''
        }).insertAfter('header');

        $(window).scroll(function() {

            if ($(window).scrollTop() > sticky_point) {
                $('#header-sticky').slideDown(300).addClass('header-sticky');
            } else {
                $('#header-sticky').slideUp(100).removeClass('header-sticky');
            }

        });

    }

    // PROGRESS BARS //
    function progress_bars() {

        $('.progress .progress-bar:in-viewport').each(function() {

            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $(this).animate({
                    width: $(this).attr('data-width') + '%'
                }, 2000);
            }

        });

    }

    // PIE CHARTS //
    function pie_chart() {

        if (typeof $.fn.easyPieChart !== 'undefined') {

            var barColor = '#6e14c9';

            if ($('body').hasClass('page-style-2') && $(window).width() > 1199) {
                barColor = '#33aef6';
            }

            if ($('body').hasClass('page-style-5') && $(window).width() > 1199) {
                barColor = '#fff';
            }

            $('.pie-chart:in-viewport').each(function() {

                $(this).easyPieChart({
                    animate: 1500,
                    lineCap: 'square',
                    lineWidth: $(this).attr('data-line-width'),
                    size: $(this).attr('data-size'),
                    barColor: barColor,
                    trackColor: $(this).attr('data-track-color'),
                    scaleColor: 'transparent',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.pie-chart-percent .value').text(Math.round(percent));
                    }
                });

            });

        }

    }

    // COUNTER //
    function counter() {

        if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {

            $('.counter .counter-value:in-viewport').each(function() {

                if (!$(this).hasClass('animated')) {
                    $(this).addClass('animated');
                    $(this).jQuerySimpleCounter({
                        start: 0,
                        end: $(this).attr('data-value'),
                        duration: 2000
                    });
                }

            });

        }
    }

    // SHOW/HIDE SCROLL UP //
    function show_hide_scroll_top() {

        if ($(window).scrollTop() > $(window).height() / 2) {
            $('#scroll-up').fadeIn(300);
        } else {
            $('#scroll-up').fadeOut(300);
        }

    }

    // SCROLL UP //
    function scroll_up() {

        $('#scroll-up').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    }

    // MULTILAYER PARALLAX //
    function multilayer_parallax() {

        $('.multilayer-parallax .parallax-layer').each(function() {

            var x = parseInt($(this).attr('data-x'), 10),
                y = parseInt($(this).attr('data-y'), 10);

            $(this).css({
                'left': x + '%',
                'top': y + '%'
            });

            if ($(this).attr('data-x') === 'center') {
                $(this).addClass('x-center');
            }

        });

    }

    // SMOOTH SCROLLING //
    function smooth_scrolling() {

        $('.menu a, #mobile-menu a').on('click', function() {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1500);

                    return false;

                }

            }

        });

    }

	// DEMOS //
	function demos() {
		$('#demos-panel > h3').on('click', function(e) {
			console.log('asdasdas');
			e.preventDefault();
			e.stopPropagation();
			$('#demos-panel').toggleClass('open');

		});

		$('#demos-panel').on('click', function(e) {

			e.stopPropagation();

		});

		$('body').on('click', function() {
			if ($('#demos-panel').hasClass('open')) {
				$('#demos-panel').removeClass('open');
			}
		});
	}

    // DOCUMENT READY //
    $(document).ready(function() {

        $('html,body').animate({
            scrollTop: $(window).scrollTop() + 1
        }, 1000);

        // SCROLLSPY //
        $('body').scrollspy({
            target: 'nav',
            offset: 50
        });

        // STICKY //
        if ($('body').hasClass('sticky-header')) {
            sticky();
        }
        ;

        // FANCYBOX //
        if (typeof $.fn.fancybox !== 'undefined') {

            $('.fancybox').fancybox({
                prevEffect: 'none',
                nextEffect: 'none',
                padding: 0
            });

        }

        // OWL Carousel //
        if (typeof $.fn.owlCarousel !== 'undefined') {

            $('.owl-carousel.images-slider .item').height($('.main-slider').innerHeight());

            // IMAGES SLIDER //
            $('.owl-carousel.images-slider').owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                smartSpeed: 1200,
                loop: true,
                nav: false,
                navText: false,
                dots: true,
                mouseDrag: true,
                touchDrag: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });

        }

        // ISOTOPE //
        if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {

            $('.isotope').imagesLoaded(function() {

                var container = $('.isotope'),
                    container_masonry = $('.isotope.masonry'),
                    gutter = 0,
                    col_width = 1;

                if (($(window).width() > 1600)) {
                    col_width = 2;
                }

                if (($(window).width() > 1200) && ($(window).width() < 1300)) {
                    gutter = 3;
                } else {
                    gutter = 0;
                }

                container.isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.4s'
                });

                container_masonry.isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: col_width,
                        gutter: gutter
                    },
                    transitionDuration: '0.4s'
                });

                $('.filter li a').on('click', function() {
                    $('.filter li a').removeClass('active');
                    $(this).addClass('active');

                    var selector = $(this).attr('data-filter');

                    container.isotope({
                        filter: selector
                    });

                    container_masonry.isotope({
                        filter: selector
                    });

                    return false;
                });

                $(window).resize(function() {

                    container.isotope();
                    container_masonry.isotope();

                });

                $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                    container.isotope();
                    container_masonry.isotope();
                })

            });

        }

        // PARALLAX //
        if (typeof $.fn.stellar !== 'undefined') {

            // MULTILAYER PARALLAX //
            multilayer_parallax();

            if (!is_touch_device()) {

                $(window).stellar({
                    horizontalScrolling: false,
                    verticalScrolling: true,
                    responsive: true
                });

            } else {

                $('.parallax').addClass('parallax-disable');

            }

        }

        // SHOW/HIDE SCROLL UP
        show_hide_scroll_top();

        // SCROLL UP //
        scroll_up();

        // PROGRESS BARS //
        progress_bars();

        // PIE CHARTS //
        pie_chart();

        // COUNTER //
        counter();

        // SMOOTH SCROLLING
        smooth_scrolling();

        // CHANGE TAB REFRESH //
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            progress_bars();
            pie_chart();
            counter();
        });

		// DEMOS //
		demos();

    });

    // WINDOW SCROLL //
    $(window).scroll(function() {

        progress_bars();
        pie_chart();
        counter();
        show_hide_scroll_top();

    });

})(window.jQuery);