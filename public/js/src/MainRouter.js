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