<!DOCTYPE html>
<html class="no-js <?php echo strtolower(BrowserDetect::detect()['browserFamily']); ?>">
    <head>
        <title>Laravel</title>
        <link href="{{ URL::asset('public/css/main.css') }}" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <nav>
            <a href="/#about" class="page">About</a>
            <a href="/#work" class="page">Work</a>
            <a href="/#contact" class="page">Contact</a>
            <a href="http://twitter.com/peabay" class="twitter-icon" target="_blank">
                {!! file_get_contents(asset('public/img/twitter-icon.svg')) !!}
            </a>
        </nav>
        <header id="header">
            <div class="inner">
                {!! file_get_contents(asset('public/img/peabay-logo.svg')) !!}
                <img src="/public/img/peabay-logo.png" class="logo">
            </div>
        </header>
        <div class="content" id="content" data-toggle="up">
            {!! file_get_contents(asset('public/img/close.svg')) !!}
            <div class="inner"></div>
        </div>
        <script type="text/javascript" data-main="{{ URL::asset('public/js/main.js') }}" src="{{ URL::asset('public/js/vendor/requirejs/require.js') }}"></script>
    </body>
</html>
