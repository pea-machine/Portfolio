
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
        'bowser',
        'glitch',
        'src/Helpers'
    ],
    function(Backbone, $, _, Main, tweenlite, tweenmax, modernizr, bowser, glitch, Helpers) {
        var BasicView = Backbone.View.extend({
            el: 'body',
            sliderContainerCurrent: 1,
            pageEvents: {},
            events: {
                'click a.page': '_changeView',
                'click .close': '_closeView',
                'click .right-area': '_sliderContainerScroll',
                'click .left-area': '_sliderContainerScroll'
            },

            initialize: function () {
                var that = this;
                _.extend(this.pageEvents, Backbone.Events);
                Backbone.history.on("all", function (MainRouter) {
                    this.render(Backbone.history.getFragment());
                }, this);
                this.render();
                this.loadSvgs();
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
                this._animateLogo();         
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
                        var windowHeight = $('.content .inner').height();
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
                            $.each(lazyIframes, function (index, lazyIframe) {
                                var windowScroll = $('.content .inner').scrollTop();
                                if (windowScroll > 
                                    (lazyIframe.top - 
                                        windowHeight) ) {
                                    lazyIframe.element.replaceWith($('<iframe src="' + lazyIframe.url + '" class="' + lazyIframe.classes + '" frameborder="0"></iframe>'));
                                }
                            });
                        };
                        $('.content .inner').on('scroll', function () {
                            requestAnimationFrame(scrollHandler);
                        });
                    }, 500);
                    that._toggleContent('down');
                });
            },

            /**
             * Pulls up or down overlay.
             * @param  string toggle 'up' or 'down'
             * @return Void
             */
            _toggleContent: function (toggle) {
                if (toggle == $('.content').attr('data-toggle')){
                    return;
                }
                switch (toggle) {
                    case 'up':
                        $('.content').hide();
                    break;
                    default:
                        $('.content').show();
                    break;
                }
                $('.content').attr('data-toggle', toggle);
            },

            /**
             * Runs Peabay logo loading animation.
             * @return Void
             */
            _animateLogo: function () {
                TweenMax.to($('.logo'), 1, {scale:'0.9', yoyo:true, repeat: 10, repeatDelay:0, ease:Power2.easeOut});
                this.pageEvents.on('pagePopulated', function(msg) {
                   TweenMax.to($('.logo'), 0.5, {scale:1, ease:Power2.easeOut});
                });
            },

            /**
             * Scrolls Slider left or right
             * @return Void
             */
            _sliderContainerScroll: function (event) {
                if($(event.target).hasClass('right-area')) {
                    var nextPos = this.sliderContainerCurrent + 1;
                    nextPos = $('.item:nth-child(' + nextPos + ')').position().left - 300;
                    TweenLite.to('.content .inner', 2, {scrollTo:{x:'+=' + nextPos + 'px'}, ease:Power2.easeOut});
                    this.sliderContainerCurrent++;
                } else {
                    var prevPos = this.sliderContainerCurrent - 1;
                    prevPos = $('.item:nth-child(' + prevPos + ')').position().left - 300;
                    TweenLite.to('.content .inner', 2, {scrollTo:{x:'+=' + prevPos + 'px'}, ease:Power2.easeOut});
                    this.sliderContainerCurrent--;
                }
            }
        });
        return BasicView;
    }
);
