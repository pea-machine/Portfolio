require(['config'], function () {
    require(
        [
            'backbone',
            'src/view/MainView',
            'src/MainRouter'
        ],
        function (Backbone, MainView, MainRouter) {
         	new MainRouter();  
        }
    );
});