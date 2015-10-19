"use strict";
require.config({
    baseUrl: 'scripts/',
    paths: {
		angular: 'vendors/angular/angular',
		angularRoute: 'vendors/angular/angular-route',
        angularAnimate: 'vendors/angular/angular-animate',
        angularResource: 'vendors/angular/angular-resource',
        angularCookies: 'vendors/angular/angular-cookies',
        jquery: 'vendors/jquery/jquery-2.1.3.min',
        jqueryUi: 'vendors/jquery/jquery-ui.min',
        bootstrap: 'vendors/bootstrap/bootstrap.min',
        md:'vendors/material/angular-material.min',
        app:'app',
        ngAria: 'vendors/angular/angular-aria.min'
    },
	shim: {
		'app': {
			deps: ['angular', 'angularRoute', 'angularAnimate','angularResource', 'angularCookies',
                'jquery', 'jqueryUi','bootstrap','ngAria','md']
		},
        'md': {
            deps: ['angular','ngAria']
        },
        'ngAria': {
            deps: ['angular']
        },
		'angularRoute': {
			deps: ['angular']
		},
        'angularAnimate': {
            deps: ['angular']
        },
        'angularCookies': {
            deps: ['angular']
        },
        'angularResource': {
            deps: ['angular']
        },
        'jqueryUi': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        }
	}
});

require(['app','directives/directive','controllers/mainCtrl'], function (app) {
    angular.bootstrap(document, ['app']);
});