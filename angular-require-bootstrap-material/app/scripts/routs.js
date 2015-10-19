'use strict';
define([], function()
{
    return {
        defaultRoutePath: '/home',
        routes: {
            '/home': {
                templateUrl: 'modules/home/views/home.html',
                controller:'homeCtrl',
                dependencies: ['../modules/home/scripts/controllers/homeCtrl']
            },
            '/about': {
                templateUrl: 'modules/about/views/about.html',
                controller:'',
                dependencies: ['../modules/about/scripts/controllers/aboutCtrl']
            }
        }
    };
});