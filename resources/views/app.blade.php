<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="/public/css/app.css" media="all" rel="stylesheet" />
        <title>Laravel</title>
    </head>
    <body>
        <div id="app"><transition name="fade"><router-view></router-view></transition></div>
        <script src="/public/js/app.js"></script>
    </body>
</html>