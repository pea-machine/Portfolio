"use strict";

define(
    [
        'backbone',
        'jquery',
        'underscore',
        'src/model/Main',
        'tweenlite',
        'tweenmax',
        'CSSPlugin',
        'ScrollToPlugin',
        'modernizr',
        'bowser',
        'glitch',
        'src/Helpers'
    ],
    function(Backbone, $, _, Main, tweenlite, tweenmax, CSSPlugin, ScrollToPlugin, modernizr, bowser, glitch, Helpers) {
        var FullView = Backbone.View.extend({
            el: 'body',
            pageEvents: {},
            sliderContainerCurrent: 1,
            events: {
                'mouseenter nav a': '_animateGlitchBackground',
                'click a.page': '_changeView',
                'click .close': '_closeView',
                'click .right-area': '_sliderContainerScroll',
                'click .left-area': '_sliderContainerScroll'
            },

            initialize: function () {
                var that = this;
                CSSPlugin.defaultForce3D = true;
                _.extend(this.pageEvents, Backbone.Events);
                Backbone.history.on("all", function (MainRouter) {
                    this.render(Backbone.history.getFragment());
                }, this);
                this.render();
                this.loadSvgs();
                this._loadBody();
                this._glitchBackground($('header .inner'), true);
            },

            render: function () {
                var nextPage = Backbone.history.getFragment(),
                that = this;
                if (nextPage == 'home' || nextPage === '') {
                    this._toggleContent('up');
                    return;
                }
                this._toggleContent('up');
                setTimeout(function () {
                    $('.view').hide();
                    that._populatePage(nextPage);
                }, 500);
            },

            /**
             * Glitch palm background in a sequence
             * @return Void
             */
            _animateGlitchBackground: function() {
                var that = this,
                time = 0;
                TweenLite.delayedCall(time, function(){
                    $('header .inner').css({
                        'background-image': 'url(' + window.glitchPreload + ')'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(/public/img/palms.jpg)'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(' + window.glitchPreload + ')'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(/public/img/palms.jpg)'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(' + window.glitchPreload + ')'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(/public/img/palms.jpg)'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(' + window.glitchPreload + ')'
                    });
                } );
                TweenLite.delayedCall(time += 0.03, function(){
                    $('header .inner').css({
                        'background-image': 'url(/public/img/palms.jpg)'
                    });
                    that._glitchBackground($('header .inner'), true);
                } );
            },

            /**
             * Load a new page
             * @param object event Event object
             * @return Void
             */
            _changeView: function (event) {
                event.preventDefault();
                var that = this;
                this._cycleLogo();
                var newView = $(event.target).attr('href');
                Backbone.history.navigate(newView.substr(1), true);
            },

            /**
             * Close overlay and navigate back to the homepage.
             * @return Void
             */
            _closeView: function () {
                Backbone.history.navigate('', true);
                setTimeout(function(){
                    $('.content .inner').html('');
                }, 2000);
            },

            /**
             * Fetches page and inserts it into .content .inner.
             * @param string page Name of page to fetch template of
             * @return Void
             */
            _populatePage: function (page) {
                var that = this;
                $('.content .inner').load('/pages/' + page, function() {
                    that.pageEvents.trigger('pagePopulated', true);

                    if($('.content .inner').width() > 1024) {
                        $('.slider-container').css({
                            'width': ($('.content .inner').width() * $('.slider-container .item').length) - 600
                        });
                    }
                    
                    setTimeout(function(){
                        $('video').fadeIn(200);
                        $('video').first().get(0).play();
                        $('video').first().get(0).addEventListener('ended', function(){ 
                            this.currentTime = 1;
                            this.pause();
                        }, false);
                    }, 2000);
                    setTimeout(function (){
                        // Cache elements in array and loop over those arrays
                        var layingImages = [];
                        var lazyIframes = [];
                        var lazyVideos = [];
                        var windowHeight = $('.content .inner').height();
                        var windowWidth = $('.content .inner').width();
                        $.each($('.content .inner .pre-lay'), function( index, el ) {
                            var layingImage = {};
                            layingImage.element = $(el);
                            layingImage.top = $(el).offset().top;
                            layingImage.height = $(el).outerHeight();
                            layingImages.push(layingImage);
                        });
                        $.each($('.content .inner .iframeLazyLoad'), function( index, el ) {
                            var lazyIframe = {};
                            lazyIframe.element = $(el);
                            lazyIframe.top = $(el).offset().top;
                            lazyIframe.height = $(el).outerHeight();
                            lazyIframe.url = $(el).attr('data-url');
                            lazyIframe.classes = $(el).attr('data-classes');
                            lazyIframes.push(lazyIframe);
                        });
                        // Use requestAnimationFrame() for better performance
                        var scrollHandler = function (){
                            $.each(layingImages, function (index, layingImage) {
                                var windowScroll = $('.content .inner').scrollTop();
                                if (windowScroll > 
                                    (layingImage.top + layingImage.height - 
                                        (windowHeight + 200) ) ) {
                                    layingImage.element.removeClass('pre-lay');
                                }
                            });
                            $.each(lazyIframes, function (index, lazyIframe) {
                                var windowScroll = $('.content .inner').scrollTop();
                                if (windowScroll > 
                                    (lazyIframe.top - windowHeight) ) {
                                    lazyIframe.element.replaceWith($('<iframe src="' + lazyIframe.url + '" class="' + lazyIframe.classes + '" frameborder="0"></iframe>'));
                                }
                            });
                        };
                        $('.content .inner').on('scroll', function () {
                            requestAnimationFrame(scrollHandler);
                        });
                        that._toggleContent('down');
                    }, 500);
                });
            },

            /**
             * Pulls up or down overlay.
             * @param  string toggle 'up' or 'down'
             * @return Void
             */
            _toggleContent: function (toggle) {
                var fromPath, toPath;
                if (toggle == $('.content').attr('data-toggle')){
                    return;
                }

                // Browser support for clip-path isn't great so
                // do a show/hide for non-webkit and blink browsers
                if (!bowser.webkit && !bowser.blink) {
                    switch (toggle) {
                        case 'up':
                            $('.content').hide();
                        break;
                        default:
                            $('.content').show();
                        break;
                    }
                }

                // Safari leaves a transparent container there 
                // stopping the user clicking anything so we'll
                // just hide the content on close instead 🙃
                if($('html.safari').length > 0 && toggle == 'up') {
                    $('.content').fadeOut(200);
                }
                switch (toggle) {
                    case 'up':
                        fromPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120 };
                        toPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0 };
                    break;
                    default:
                        $('.content').show();
                        fromPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0 };
                        toPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120 };
                    break;
                }
                $('.content').attr('data-toggle', toggle);
                toPath.ease = Expo.easeInOut;
                toPath.onUpdate = setPoints;
                TweenMax.to(fromPath, 2, toPath);
                function setPoints () {
                    var tweens = fromPath[0] + '%' +
                        fromPath[1] + '%,' +
                        fromPath[2] + '%' +
                        fromPath[3] + '%,' +
                        fromPath[4] + '%' +
                        fromPath[5] + '%,' +
                        fromPath[6] + '%' +
                        fromPath[7] + '%';
                    TweenMax.set('.content', {
                        css: {
                            '-webkit-clip-path':
                            'polygon(' + tweens + ')',
                            'clip-path':
                            'polygon(' + tweens + ')'
                        }
                    }); 
                }
            },

            /**
             * Runs first-load animation.
             * @return Void
             */
            _loadBody: function () {
                var that = this;

                that._glitchBackground($('header'), false);

                // Glitch background
                TweenLite.delayedCall(0.5, function(){
                    $('header').css({
                        'background-image': 'url(/public/img/palms.jpg)'
                    });
                } ); 
                TweenLite.delayedCall(1.3, function(){
                    window.glitchTimer = setInterval(function(){
                        that._glitchBackground($('header'), false);
                    }, 480);
                } ); 
                TweenLite.delayedCall(5, function(){ clearInterval(window.glitchTimer); } ); 

                // Cycle logo
                if (bowser.webkit || bowser.blink) {
                    TweenLite.delayedCall(2.8, function() { that._cycleLogo(); } ); 
                    TweenLite.delayedCall(4.3, function() { that.pageEvents.trigger('pagePopulated', true); } ); 
                }

                // Pull down overlay
                var fromPath, toPath;
                fromPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0 };
                toPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120 };
                toPath.ease = RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 3,
                    points: 300,
                    taper: "in",
                    randomize: true,
                    clamp: true
                });
                toPath.delay = 2.3;
                toPath.onUpdate = setPoints;

                // Filter is still a bit buggy so reset it
                // when we're done so the logo has the
                // correct colouring
                toPath.onComplete = function () {
                    $('header, header .inner').css({
                        '-webkit-filter': 'none'
                    });
                };
                TweenMax.to(fromPath, 1, toPath);
                function setPoints () {
                    var tweens = fromPath[0] + '%' +
                        fromPath[1] + '%,' +
                        fromPath[2] + '%' +
                        fromPath[3] + '%,' +
                        fromPath[4] + '%' +
                        fromPath[5] + '%,' +
                        fromPath[6] + '%' +
                        fromPath[7] + '%';
                    TweenMax.set('header .inner', {
                        css: {
                            '-webkit-clip-path':
                            'polygon(' + tweens + ')',
                            'clip-path':
                            'polygon(' + tweens + ')'
                        }
                    }); 
                }
            },

            /**
             * Runs Peabay logo loading animation.
             * @return Void
             */
            _cycleLogo: function () {
                TweenMax.staggerFromTo($('.logo'), 
                    1, 
                    { scale: 1 }, 
                    { scale: 0.9, ease: Back.easeOut }, 
                    0.5);
                var tl = new TimelineMax({ repeat: 300, ease: Back.easeOut });
                tl.timeScale(16).
                to($('.logo #background image'), 0, { attr:{ y: '-300' } }, 0).
                to($('.logo #background image'), 0, { attr:{ y: '-600' } }, 1).
                to($('.logo #background image'), 0, { attr:{ y: '-900' } }, 2).
                to($('.logo #background image'), 0, { attr:{ y: '-1200' } }, 3).
                to($('.logo #background image'), 0, { attr:{ y: '-1500' } }, 4).
                to($('.logo #background image'), 0, { attr:{ y: '-1800' } }, 5);
                this.pageEvents.on('pagePopulated', function(msg) {
                    tl.stop();
                    $('.logo #background image').attr('y', '0');
                    TweenMax.staggerFromTo($('.logo'), 1, 
                    { scale: 0.9 }, 
                    { scale: 1, ease: Back.easeOut }, 
                    0.5);
                });
            },

            /**
             * Scrolls Slider left or right
             * @return Void
             */
            _sliderContainerScroll: function (event) {

                var that

                $.each($('.content .inner .slider-container .item .videoLazyLoad'), function (index, lazyVideo) {
                    lazyVideo = $(lazyVideo);
                    if(lazyVideo.hasClass('playing')) {
                        lazyVideo.removeClass('playing').addClass('paused');
                        lazyVideo.get(0).pause();
                    }
                });

                if($(event.target).hasClass('right-area')) {
                    var nextPos = this.sliderContainerCurrent + 1;
                    nextPos = $('.item:nth-child(' + nextPos + ')').position().left - 300;
                    TweenLite.to('.content .inner', 2, {scrollTo:{x:'+=' + nextPos + 'px'}, ease:Power2.easeOut});

                    $.each($('.item'), function(i,v) {
                        var caption = $(v).find('.caption');
                        var min = 50;
                        if(i > 0) {
                            min = 320;
                        }
                        if(caption.position().left > min) {
                            TweenLite.to(caption, 4, {'left': '-=70px', ease:Power2.easeOut});
                        }
                    });

                    this.sliderContainerCurrent++;
                } else {
                    var prevPos = this.sliderContainerCurrent - 1;
                    prevPos = $('.item:nth-child(' + prevPos + ')').position().left - 300;
                    TweenLite.to('.content .inner', 2, {scrollTo:{x:'+=' + prevPos + 'px'}, ease:Power2.easeOut});

                    $.each($('.item'), function(i,v) {
                        var caption = $(v).find('.caption');
                        var max = 400;
                        if(caption.position().left < max) {
                            TweenLite.to(caption, 4, {'left': '+=70px', ease:Power2.easeOut});
                        }
                    });

                    this.sliderContainerCurrent--;
                }

                var index = this.sliderContainerCurrent - 1;

                setTimeout(function(){

                    var elItem = $('.content .inner .slider-container .item:eq(' + index + ')');
                    var lazyVideo = elItem.find('.videoLazyLoad');
                    lazyVideo.removeClass('paused').addClass('playing');
                    lazyVideo.get(0).play();
                    lazyVideo.get(0).addEventListener('ended', function(){ 
                        this.currentTime = 1;
                        this.pause();
                    }, false);

                }, 2100);

            },

            /**
             * Glitches header background
             * @param object el jQuery object of element to glitch background of
             * @param boolean preload Output data string to window.glitchPreload if true
             * @return Void
             */
            _glitchBackground: function( el, preload ) {
                var imagePath = el.css('background-image');
                imagePath = imagePath.replace('url("','').replace('")','');
                var imgContainerEl = document.getElementById( 'img-container' );
                var canvasContainerEl = document.getElementById( 'canvas-container' );
                
                var params = {
                    amount: Math.floor(Math.random() * 10) + 1,
                    iterations: Math.floor(Math.random() * 30) + 1,
                    quality: 90,
                    seed: Math.floor(Math.random() * 10) + 1
                };
                loadImage( imagePath, function ( img ) {
                    glitch( params ).
                        fromImage( img ).
                        toDataURL().
                        then( function( dataURL ) {
                            if(preload === false){
                                el.css({
                                    'background-image': 'url(' + dataURL + ')'
                                });
                            } else {
                                window.glitchPreload = dataURL;
                            }
                        } );
                    glitch( params ).
                        fromImage( img ).
                        toImageData().
                        then( function( imageData ) {
                            var canvasEl = document.createElement( 'canvas' );
                            canvasEl.width = imageData.width;
                            canvasEl.height = imageData.height;
                            canvasEl.style.width = imageData.width + 'px';
                            var ctx = canvasEl.getContext( '2d' );
                            canvasContainerEl.appendChild( canvasEl );
                            ctx.putImageData( imageData, 0, 0 );
                        } );
                } );
                function loadImage ( src, callback ) {
                    var imageEl = new Image();
                    imageEl.onload = function () {
                        callback( imageEl );
                    };
                    imageEl.src = src;
                }
            }
        } );
        return FullView;
    }
);
