const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')

    mix.styles([
        'resources/assets/plugins/simplebar/css/simplebar.css',
        'resources/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
        'resources/assets/plugins/metismenu/css/metisMenu.min.css',
        'resources/assets/css/pace.min.css',
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/icons.css',
        'resources/assets/css/dark-theme.css',
        'resources/assets/css/semi-dark.css',
        'resources/assets/css/header-colors.css',
        // 'resources/assets/css/normalize.css',
        // 'resources/assets/css/normalize.css',

        //pace js file should be there

    ], 'public/css/theme.css');

    mix.scripts([

        'resources/assets/js/bootstrap.bundle.min.js',
        'resources/assets/js/jquery.min.js',
        'resources/assets/plugins/simplebar/js/simplebar.min.js',
        'resources/assets/plugins/metismenu/js/metisMenu.min.js',
        'resources/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js',
        'resources/assets/js/pace.min.js',
        // 'resources/assets/js/admin.js',
        // 'resources/assets/js/admin.js',
        // 'resources/assets/js/admin.js',
        // 'resources/assets/js/admin.js',
    ], 'public/js/theme.js')

    .sourceMaps();
