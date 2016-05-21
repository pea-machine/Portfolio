<!DOCTYPE html>
<html class="no-js <?php echo strtolower(BrowserDetect::detect()['browserFamily']); ?>">
    <head>
        <title>Peter Bailey / London Web Developer</title>
        <link href="{{ URL::asset('public/css/main.css') }}" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
        <meta name="HandheldFriendly" content="True">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable = 0">
        <link rel="icon" type="image/png" href="/public/img/palmemoji.png">
    </head>
    <body>
        <nav>
            <a href="/#about" class="page">About</a>
            <a href="/#work" class="page">Work</a>
            <a href="mailto:hello@peterbailey.eu">Contact</a>
            <a href="http://twitter.com/peabay" class="twitter-icon" target="_blank">
                <div class="svgImg" data-url="public/img/twitter-icon.svg" data-fallback-url="public/img/twitter-icon.png"></div>
            </a>
        </nav>
        <header id="header">
            <div class="inner">
                <div class="svgImg" data-url="public/img/peabay-logo.svg" data-fallback-url="public/img/peabay-logo.png" data-classes="logo"></div>
            </div>
        </header>
        <div class="content" id="content" data-toggle="up">
            {!! file_get_contents(asset('public/img/close.svg')) !!}
            <div class="inner"></div>
        </div>
        <script type="text/javascript" data-main="{{ URL::asset('public/js/main.js') }}" src="{{ URL::asset('public/js/vendor/requirejs/require.js') }}"></script>
    </body>
</html>
