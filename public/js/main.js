require(['config'], function () {
    require(
        [
            'backbone',
            'src/MainRouter',
        ],
        function (Backbone, MainRouter) {
         	new MainRouter();  
        }
    );
});