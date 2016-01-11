requirejs.config({
    //baseUrl: '/js',
    paths: {
        require: 'lib/require',
        backbone: 'lib/backbone',
        jquery: 'lib/jquery.min',
        underscore: 'lib/underscore'
    }
});
requirejs(['jquery'], function ($) {
    console.log('yup');








});