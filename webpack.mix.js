let mix = require('laravel-mix');

mix.sass('src/master.scss','dist/').options({
    processCssUrls: false
});

mix.js('src/main.js', 'dist/');
