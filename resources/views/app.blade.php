<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="/public/css/app.css" media="all" rel="stylesheet" />
        <link rel="icon" type="image/png" href="{{ URL::asset('public/img/palmemoji.png') }}">
        <meta property="og:url" content="http://peabay.xyz"/>
        <meta property="og:title" content="Peter Bailey / Wordpress Developer London"/>
        <meta property="og:site_name" content="Peter Bailey"/>
        <meta property="og:description" content="Portfolio of Peter Bailey"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="{{ URL::asset('public/img/display-picture.jpg') }}"/>
        <meta property="og:locale" content="en_gb"/>
        <title>Peter Bailey / Wordpress Developer London</title>
    </head>
    <body>
        <div id="app"><router-view></router-view></div>
        <script src="/public/js/app.js"></script>
    </body>
</html>