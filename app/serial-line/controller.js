'use strict';
angular.module('myApp.serialLine', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/serial-line', {
                    templateUrl: 'serial-line/view.html',
                    controller: 'SerialLineController'
                });
            }])
        .controller('SerialLineController', function ($scope) {

            $scope.lineStacked = {
                "type": "serial",
                "categoryField": "category",
                "startDuration": 1,
                "categoryAxis": {
                    "gridPosition": "start"
                },
                "trendLines": [],
                "graphs": [
                    {
                        "balloonText": "[[title]] of [[category]]:[[value]]",
                        "bullet": "round",
                        "id": "AmGraph-1",
                        "title": "graph 1",
                        "valueField": "column1"
                    },
                    {
                        "balloonText": "[[title]] of [[category]]:[[value]]",
                        "bullet": "square",
                        "id": "AmGraph-2",
                        "title": "graph 2",
                        "valueField": "column-2"
                    }
                ],
                "guides": [],
                "valueAxes": [
                    {
                        "id": "ValueAxis-1",
                        "stackType": "regular",
                        "title": "Axis title"
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "useGraphSettings": true
                },
                "titles": [
                    {
                        "id": "Title-1",
                        "size": 15,
                        "text": "Chart Title"
                    }
                ],
                "data": [
                    {
                        "category": "category 1",
                        "column1": 8,
                        "column-2": 5
                    },
                    {
                        "category": "category 2",
                        "column1": 6,
                        "column-2": 7
                    },
                    {
                        "category": "category 3",
                        "column1": 2,
                        "column-2": 3
                    },
                    {
                        "category": "category 4",
                        "column1": 1,
                        "column-2": 3
                    },
                    {
                        "category": "category 5",
                        "column1": 2,
                        "column-2": 1
                    },
                    {
                        "category": "category 6",
                        "column1": 3,
                        "column-2": 2
                    },
                    {
                        "category": "category 7",
                        "column-1": 6,
                        "column-2": 8
                    }
                ]
            };

        });