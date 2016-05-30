define(
    [
        'backbone',
        'src/model/Main',
        'src/view/MainView',
        'src/collection/MainCollection'
    ],
    function (Backbone, Main, MainView, MainCollection) {
        var MainRouter = Backbone.Router.extend({
            initialize: function () {
                Backbone.history.start({ pushState: true });
                new MainView();
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