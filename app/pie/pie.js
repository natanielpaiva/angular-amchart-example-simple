'use strict';

angular.module('myApp.pie', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/pie', {
                    templateUrl: 'pie/pie.html',
                    controller: 'PieController'
                });
            }])
        .controller('PieController', function ($scope) {
            $scope.pie = {
                "type": "pie",
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "titleField": "category",
                "valueField": "column-1",
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [],
                "data": [
                    {
                        "category": "category 1",
                        "column-1": 8
                    },
                    {
                        "category": "category 2",
                        "column-1": 6
                    },
                    {
                        "category": "category 3",
                        "column-1": 2
                    }
                ]
            };

            $scope.pie3D = {
                "type": "pie",
                "angle": 12,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "depth3D": 15,
                "titleField": "category",
                "valueField": "column-1",
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [],
                "data": [
                    {
                        "category": "category 1",
                        "column-1": 8
                    },
                    {
                        "category": "category 2",
                        "column-1": 6
                    },
                    {
                        "category": "category 3",
                        "column-1": 2
                    }
                ]
            };

            $scope.pieDanut = {
                "type": "pie",
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "innerRadius": "40%",
                "titleField": "category",
                "valueField": "column-1",
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [],
                "data": [
                    {
                        "category": "category 1",
                        "column-1": 8
                    },
                    {
                        "category": "category 2",
                        "column-1": 6
                    },
                    {
                        "category": "category 3",
                        "column-1": 2
                    }
                ]
            };

            $scope.pieDanut3D = {
                "type": "pie",
                "angle": 12,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "depth3D": 15,
                "innerRadius": "40%",
                "titleField": "category",
                "valueField": "column-1",
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "align": "center",
                    "markerType": "circle"
                },
                "titles": [],
                "data": [
                    {
                        "category": "category 1",
                        "column-1": 8
                    },
                    {
                        "category": "category 2",
                        "column-1": 6
                    },
                    {
                        "category": "category 3",
                        "column-1": 2
                    }
                ]
            };

        });