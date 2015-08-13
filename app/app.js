'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.serialColumn',
    'myApp.serialArea',
    'myApp.serialLine',
    'myApp.pie',
    'AngularAmChart'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/serial-column'});
    }]);