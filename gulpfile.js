var elixir = require('laravel-elixir');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass([
        'basic.scss'
    ],'public/css/basic.css');
    mix.sass([
        'full.scss'
    ],'public/css/full.css');
});