define(
    [
        'backbone',
        'jquery',
        'underscore',
        'src/Model/Main',
        'tweenlite',
        'tweenmax',
        'easepack',
        'modernizr',
        'bowser'
    ],
    function(Backbone, $, _, Main, tweenlite, tweenmax, easepack, modernizr, bowser) {
        var defaultView = 'home';
        var MainView = Backbone.View.extend({
            el: 'body',
            pageEvents: {},
            events: {
                'click a.page': '_changeView',
                'click .close': '_closeView'
            },
            initialize: function() {
                _.extend(this.pageEvents, Backbone.Events);
                this._loadBody();
            },
            _changeView: function(event) {
                event.preventDefault();
                this._cycleLogo();
                newView = $(event.target).attr('href');
                router.navigate(newView.substr(1), true);
                return false;
            },
            _closeView: function() {
                router.navigate('home', true);
            },
            render: function(currentPageName) {
                var nextPage = Backbone.history.getFragment();
                var view = this;
                if(nextPage == 'home' || nextPage == '') {
                    this._toggleContent('up');
                    return;
                }
                if (currentPageName != 'home') {
                    this._toggleContent('up');
                    setTimeout(function() {
                        $('.view').hide();
                        view._populatePage(nextPage);
                    }, 500);
                } else {
                     view._populatePage(nextPage);
                }
            },
            _populatePage: function(page) {
                var view = this;
                $('.content .inner').load('/pages/' + page, function() {
                    setTimeout(function(){
                        view._toggleContent('down');
                        view.pageEvents.trigger('pagePopulated', true);

                
                $('.content .inner').on('scroll', function() {

                    $.each($('.pre-lay'), function( index, el ) {

                        var hT = $(el).offset().top,
                           hH = $(el).outerHeight(),
                           wH = $('.content .inner').height(),
                               wS = $(this).scrollTop();
                           if (wS > (hT+hH-(wH+400))) {
                               $(el).removeClass('pre-lay');
                           }
                        });

                    });

                    }, 1000);
                });
            },
            _cycleLogo: function(){
                TweenMax.staggerFromTo($('.logo'), 1, 
                { scale: 1 }, 
                { scale: 0.9, ease: Back.easeOut }, 
                0.5);
                var tl = new TimelineMax({repeat: 300});
                tl.timeScale(15)
                .to($('.logo path'), 0, {css:{className: 'zebra'}}, 0)
                .to($('.logo path'), 0, {css:{className: 'blackwhite'}}, 1)
                .to($('.logo path'), 0, {css:{className: 'whirl'}}, 2)
                .to($('.logo path'), 0, {css:{className: 'mosaic'}}, 2)
                .to($('.logo path'), 0, {css:{className: 'swan'}}, 3)
                .to($('.logo path'), 0, {css:{className: 'teal'}}, 4);
                this.pageEvents.on('pagePopulated', function(msg) {
                    tl.stop();
                    $('.logo path').attr('class', '');
                    TweenMax.staggerFromTo($('.logo'), 1, 
                    { scale: 0.9 }, 
                    { scale: 1, ease: Back.easeOut }, 
                    0.5);
                });
            },
            _toggleContent: function(toggle) {

                if(toggle == $('.content').attr('data-toggle')){
                    return;
                }

                // Firefox can't handle clip-path polygons so just show/hide .content
                if(bowser.firefox) {
                    switch(toggle) {
                        case 'up':
                            $('.content').hide();
                        break;
                        default:
                            $('.content').show();
                        break;
                    }
                }

                switch(toggle) {
                    case 'up':
                        fromPath = {0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120};
                        toPath = {0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0};
                    break;
                    default:
                        fromPath = {0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0};
                        toPath = {0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120};
                    break;
                }
                $('.content').attr('data-toggle', toggle);

                var arr1 = fromPath;
                var arr2 = toPath;

                arr2.ease = Expo.easeOut;
                arr2.onUpdate = setPoints;

                TweenMax.to(arr1, 3, arr2);

                function setPoints() {
                    TweenMax.set('.content', {
                    webkitClipPath:
                        'polygon('+arr1[0]+'%'+arr1[1]+'%,+'+arr1[2]+'%'+arr1[3]+'%,'+arr1[4]+'%'+arr1[5]+'%,'+arr1[6]+'%'+arr1[7]+'%)'});
                }

            },
            _loadBody: function() {
                fromPath = {0:0, 1:0, 2:100, 3:0, 4:100, 5:-20, 6:0, 7:0};
                toPath = {0:0, 1:0, 2:100, 3:0, 4:100, 5:100, 6:0, 7:120};

                var arr1 = fromPath;
                var arr2 = toPath;

                arr2.ease = RoughEase.ease.config({ template: Power0.easeNone, strength: 3, points: 150, taper: "in", randomize: true, clamp: true});
                arr2.onUpdate = setPoints;

                TweenMax.to(arr1, 4, arr2);

                function setPoints() {
                    TweenMax.set('header .inner', {
                    webkitClipPath:
                        'polygon('+arr1[0]+'%'+arr1[1]+'%,+'+arr1[2]+'%'+arr1[3]+'%,'+arr1[4]+'%'+arr1[5]+'%,'+arr1[6]+'%'+arr1[7]+'%)'});
                }
            }

        });

        var MainRouter = Backbone.Router.extend({
            routes: {
                '': 'home',
                'home': 'home',
                'about': 'about',
                'contact': 'contact',
                'work': 'work'
            },
            initialize: function() {
                this.home = new MainView({});
                this.about = new MainView();
                this.contact = new MainView();
                this.work = new MainView();
            },
            home: function() {
                this.home.render('home');
            },
            about: function() {
                this.about.render('about');
            },
            contact: function() {
                this.contact.render('contact');
            },
            work: function() {
                this.work.render('work');
            }
        });
        var router = new MainRouter();
        Backbone.history.start();
        router.navigate(defaultView, true);
    }
);