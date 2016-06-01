"use strict";

define(
    [
        'backbone',
        'jquery',
        'underscore',
        'src/model/Main',
        'tweenlite',
        'tweenmax',
        'modernizr',
        'bowser'
    ],
    function(Backbone, $, _, Main, tweenlite, tweenmax, modernizr, bowser) {
        var MainView = Backbone.View.extend({
            el: 'body',
            pageEvents: {},
            events: {
                'click a.page': '_changeView',
                'click .close': '_closeView'
            },
            initialize: function () {
                _.extend(this.pageEvents, Backbone.Events);
                Backbone.history.on("all", function (MainRouter) {
                    this.render(Backbone.history.getFragment());
                }, this);
                this.render();
                this._loadSvgs();
                this._loadBody();

                setTimeout(function(){
                    var iframeDiv = $('.iframeLazyLoad');
                    iframeDiv.url = iframeDiv.attr('data-url');
                    $('.iframeLazyLoad').replace($('<iframe src="' + iframeDiv.url + '" width="1000" height="562" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'));
                }, 3000);

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
             * Load a new page
             * @param object event Event object
             * @return Void
             */
            _changeView: function (event) {
                event.preventDefault();
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
                    setTimeout(function (){
                        // Cache images to take the load off scroll()
                        var layingImages = [];
                        var windowHeight = $('.content .inner').height();
                        $.each($('.content .inner .pre-lay'), function( index, el ) {
                            var layingImage = {};
                            layingImage.element = $(el);
                            layingImage.top = $(el).offset().top;
                            layingImage.height = $(el).outerHeight();
                            layingImages.push(layingImage);
                        });
                        // Use requestAnimationFrame() to only do animation before next repaint
                        var scrollHandler = function (){
                            $.each(layingImages, function (index, layingImage) {
                                var windowScroll = $('.content .inner').scrollTop();
                                if (windowScroll > 
                                    (layingImage.top + 
                                        layingImage.height - 
                                        (windowHeight + 200) ) ) {
                                    layingImage.element.removeClass('pre-lay');
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
             * Runs Peabay logo loading animation.
             * @return Void
             */
            _cycleLogo: function () {
                TweenMax.staggerFromTo($('.logo'), 
                    1, 
                    { scale: 1 }, 
                    { scale: 0.9, ease: Back.easeOut }, 
                    0.5);
                var tl = new TimelineMax({ repeat: 300 });
                tl.timeScale(15).
                to($('.logo path'), 0, { css:{ className: 'zebra' } }, 0).
                to($('.logo path'), 0, { css:{ className: 'blackwhite' } }, 1).
                to($('.logo path'), 0, { css:{ className: 'whirl' } }, 2).
                to($('.logo path'), 0, { css:{ className: 'mosaic' } }, 3).
                to($('.logo path'), 0, { css:{ className: 'swan' } }, 4).
                to($('.logo path'), 0, { css:{ className: 'teal' } }, 5);
                this.pageEvents.on('pagePopulated', function(msg) {
                    tl.stop();
                    $('.logo path').attr('class', '');
                    TweenMax.staggerFromTo($('.logo'), 1, 
                    { scale: 0.9 }, 
                    { scale: 1, ease: Back.easeOut }, 
                    0.5);
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
                toPath.ease = Expo.easeOut;
                toPath.onUpdate = setPoints;
                TweenMax.to(fromPath, 3, toPath);
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
                var fromPath, toPath;
                fromPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0 };
                toPath = { 0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120 };
                toPath.ease = RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 3,
                    points: 150,
                    taper: "in",
                    randomize: true,
                    clamp: true
                });
                toPath.onUpdate = setPoints;
                // Filter is still a bit buggy so reset it
                // when we're done so the logo has the
                // correct colouring
                toPath.onComplete = function () {
                    $('header, header .inner').css({
                        '-webkit-filter': 'none'
                    });
                };
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
             * Fetches SVG if supported, otherwise PNG/ JPG image.
             * Replaces elements with class .svgImg which require attributes 
             * data-url, data-fallback-url and data-classes.
             * @return Void
             */
            _loadSvgs: function () {
                $.each($('.svgImg'), function( index, el ) {
                    if ($('html.firefox').length > 0 || 
                        $('html.internet-explorer').length > 0) {
                        $(el).replaceWith(
                            $('<img src="' + $(el).attr('data-fallback-url') + '">').
                            addClass($(el).attr('data-classes')));
                    } else {
                        $.ajax({
                          method: 'GET',
                          url: $(el).attr('data-url'),
                          dataType: 'html',
                          cache: true
                        }).done(function( data ) {
                            $(el).replaceWith($(data).
                                addClass($(el).attr('data-classes')));
                        });
                    }
                });
            }
        });
        return MainView;
    }
);
