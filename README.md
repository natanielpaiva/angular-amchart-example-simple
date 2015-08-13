AngularJs com AmCharts
====
Introdução
--- 
Recentemente precisei utilizar a biblioteca do AmCharts para criar alguns gráficos em meu sistema que está utilizando AngularJs.
Procurei, mas não achei nem uma directive completa que resolveria o meu problema, então decidi fazer a minha e também compartilhar isso aqui no github.
Espero que lhe ajude assim como me ajudou!

Fácil utilização
---
A forma de você utilizar essa directive é muito simples!
Veja o exemplo pronto baixando o projeto.

Baixe o projeto em seu computador, tenha instalado o node e o git para que você possa utilizar os seguintes comandos na raiz do projeto que baixou:

~~~javascript
npm install
~~~ 

Logo após utilize o 

~~~javascript
npm start
~~~ 

Olhe o exemplo abaixo:
* Gráfico de type serial(Todos eles bar, column, area...)

~~~html
<!--HTML-->
<h3>Serial Area Stacked</h3>
<amchart ng-model='areaStacked'>
</amchart>
~~~

~~~javascript
/*Em sua controller basta colocar o json que já vem
  no live do AmCharts trocando apenas o dataProvider
  por data*/
 $scope.areaStacked = {
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
                        "fillAlphas": 0.7,
                        "id": "AmGraph-1",
                        "lineAlpha": 0,
                        "title": "graph 1",
                        "valueField": "column-1"
                    },
                    {
                        "balloonText": "[[title]] of [[category]]:[[value]]",
                        "fillAlphas": 0.7,
                        "id": "AmGraph-2",
                        "lineAlpha": 0,
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
                "legend": {},
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
                        "column-1": 8,
                        "column-2": 5
                    },
                    {
                        "category": "category 2",
                        "column-1": 6,
                        "column-2": 7
                    },
                    {
                        "category": "category 3",
                        "column-1": 2,
                        "column-2": 3
                    },
                    {
                        "category": "category 4",
                        "column-1": 1,
                        "column-2": 3
                    },
                    {
                        "category": "category 5",
                        "column-1": 2,
                        "column-2": 1
                    },
                    {
                        "category": "category 6",
                        "column-1": 3,
                        "column-2": 2
                    },
                    {
                        "category": "category 7",
                        "column-1": 6,
                        "column-2": 8
                    }
                ]
            };
~~~
