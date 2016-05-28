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
                var path = window.location.pathname,
                defaultView = path.split("/").pop();
                Backbone.history.start({ pushState: true });
                Backbone.history.navigate(defaultView, true);
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