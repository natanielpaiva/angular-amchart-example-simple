'use strict';
angular.module('myApp.amchartDirective.amchart', [])
        .directive('amchart', function () {
            return {
                require: "ngModel",
                scope: {
                    options: '=ngModel'
                },
                templateUrl: 'components/amchartDirective/template/amchart-template.html'
            };
        });