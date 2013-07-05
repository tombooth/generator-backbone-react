/*global <%= _.camelize(appname) %>, $*/


window.<%= _.camelize(appname) %> = {
    Models: {},
    Collections: {},
    Components: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
    }
};

/* Order and include as you please. */
require('app/scripts/components/*');
require('app/scripts/models/*');
require('app/scripts/controllers/*');
require('app/scripts/routers/*');

$(document).ready(function () {
    <%= _.camelize(appname) %>.init();
});
