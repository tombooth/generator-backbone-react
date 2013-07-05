/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        react: {
            exports: 'React'
        }<% if (compassBootstrap) { %>,
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }<% } %>
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        react: '../bower_components/react/react'<% if (compassBootstrap) { %>,
        bootstrap: 'vendor/bootstrap'<% } %>
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
});
