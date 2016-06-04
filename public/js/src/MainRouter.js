"use strict";

define(
    [
        'backbone',
        'src/model/Main',
        'src/view/DesktopView',
        'src/view/MobileView',
        'src/collection/MainCollection',
        'bowser'
    ],
    function (Backbone, Main, DesktopView, MobileView, MainCollection, bowser) {
        var MainRouter = Backbone.Router.extend({
            initialize: function () {
                Backbone.history.start({ pushState: true });
                if(bowser.mobile || bowser.tablet) {
                    new MobileView();
                } else {
                    new DesktopView();
                }
            },
            routes: {
                '': 'home',
                'home': 'home',
                'about': 'about',
                'contact': 'contact',
                'work': 'work'
            }
        });
        return MainRouter;
    }
);

define(
    [
        'backbone',
        'jquery',
        'underscore'
    ],
    function (Backbone, $, _) {
    
        _.extend(Backbone.View.prototype, {
            /**
             * Fetches SVG if supported, otherwise PNG/ JPG image.
             * Replaces elements with class .svgImg which require attributes 
             * data-url, data-fallback-url and data-classes.
             * @return Void
             */
            loadSvgs: function () {
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
    }
);