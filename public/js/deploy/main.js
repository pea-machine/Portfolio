require.config({
    map: { '*': { 'src/view/MainView': 'src/view/MainView' } },
    paths: {
        'backbone': 'vendor/backbone/backbone',
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore/underscore',
        'tweenlite': 'vendor/gsap/src/minified/TweenLite.min',
        'tweenmax': 'vendor/gsap/src/minified/TweenMax.min',
        'easepack': 'vendor/gsap/src/minified/easing/EasePack.min',
        'modernizr': 'vendor/modernizr/modernizr-custom',
        'bowser': 'vendor/bowser/src/bowser',
        'glitch': 'vendor/glitch-canvas/dist/glitch-canvas'
    },
    shim: {}
});
define('config', [], function () {
    return;
});
'use strict';
require(['config'], function () {
    require([
        'backbone',
        'src/MainRouter'
    ], function (Backbone, MainRouter) {
        new MainRouter();
    });
});
define('main', ['config'], function () {
    return;
});require(["main"]);