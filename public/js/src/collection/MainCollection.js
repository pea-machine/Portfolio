"use strict";

define(
    [
        'backbone',
        'src/model/Main'
    ],
    function (Backbone, Main) {
        var MainCollection = Backbone.Collection.extend({
            model: Main
        });

        return MainCollection;
    }
);