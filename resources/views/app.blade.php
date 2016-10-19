<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="/public/css/app.css" media="all" rel="stylesheet" />
        <title>Peter Bailey / Wordpress Developer London</title>
    </head>
    <body>
        <div id="app"><router-view></router-view></div>
        <script src="/public/js/app.js"></script>
    </body>
</html>