define(
    [
        'backbone',
        'src/Model/Main'
    ],
    function (Backbone, Main) {
        var MainCollection = Backbone.Collection.extend({
            model: Main
        });
        return MainCollection;
    }
);