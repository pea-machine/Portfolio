define(
    [
        'backbone',
        'jquery',
        'underscore'
        ],function(require, Background, $, _){
    _.extend(Backbone.View.prototype,{}, {

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
});