<!DOCTYPE html>
<html class="no-js <?php echo str_slug(strtolower(BrowserDetect::detect()['browserFamily']), '-'); ?>">
    <head>
        <title>Peter Bailey / London Web Developer</title>
        <link href="{{ URL::asset('public/css/main.css') }}" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
        <meta name="HandheldFriendly" content="True">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable = 0">
        <link rel="icon" type="image/png" href="/public/img/palmemoji.png">
        <meta property="og:url" content="http://peterbailey.eu"/>
        <meta property="og:title" content="Peter Bailey / Web Developer"/>
        <meta property="og:site_name" content="Peter Bailey"/>
        <meta property="og:description" content="London web developer."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="{{ URL::asset('public/img/og-image.png') }}"/>
        <meta property="og:locale" content="en_gb"/>
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
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-1519216-10', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>
