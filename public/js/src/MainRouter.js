"use strict";

define(
    [
        'backbone',
        'src/model/Main',
        'src/view/FullView',
        'src/view/BasicView',
        'src/collection/MainCollection',
        'bowser'
    ],
    function (Backbone, Main, FullView, BasicView, MainCollection, bowser) {
        var MainRouter = Backbone.Router.extend({
            initialize: function () {
                Backbone.history.start({ pushState: true });
                if(bowser.mobile || 
                    bowser.tablet ||
                    bowser.msedge ||
                    bowser.msie ||
                    bowser.gecko) {
                    new BasicView();
                } else {
                    new FullView();
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