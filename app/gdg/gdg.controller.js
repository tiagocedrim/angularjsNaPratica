(function () {
    'use strict';

    angular.module('gdgApp', []);

    angular.module('gdgApp')

        .controller('Gdg4Controller', ['$scope', function ($scope) {
            $scope.seuNome = "";
            $scope.nome = "";

            $scope.contrario = function () {
                return $scope.nome.split("").reverse().join("");
            };

            $scope.capsLock = function () {
                return $scope.seuNome.toUpperCase();
            };


        }])

        .controller('Gdg5Controller', ['$scope', function ($scope) {

            $scope.angle = 0;

            $scope.vai = function () {
                $scope.angle += 30;
                while ($scope.angle >= 360) {
                    $scope.angle -= 360;
                }
            };
            $scope.volta = function () {
                $scope.angle -= 30;
                while ($scope.angle < 0) {
                    $scope.angle += 360;
                }
            };

        }])

        .controller('ListaController', ['$scope', function ($scope) {

            $scope.jogos = [

                {
                    'id': 0,
                    'nome': 'UFC',
                    'preco': '119'
                },
                {
                    'id': 1,
                    'nome': 'GTA V',
                    'preco': '199'
                },
                {
                    'id': 2,
                    'nome': 'Watch Dogs',
                    'preco': '99'
                },
                {
                    'id': 3,
                    'nome': 'Fifa 15',
                    'preco': '150'
                },
                {
                    'id': 4,
                    'nome': 'Killzone',
                    'preco': '113'
                },
                {
                    'id': 5,
                    'nome': 'Infamous Second Son',
                    'preco': '119'
                },
                {
                    'id': 6,
                    'nome': 'Far Cry 4 ',
                    'preco': '137'
                }

            ];

            var nId = 7;

            $scope.salvar = function() {

                if($scope.novoJogo.id === null) {
                    //Se for um novo jogo, adiciona ele na nossa lista de jogos
                    $scope.novoJogo.id = nId++;
                    $scope.jogos.push($scope.novoJogo);
                } else {
                    //Se o ID existe, atualiza ele com os novos dados na nossa lista de jogos
                    for( var i in $scope.jogos) {
                        if($scope.jogos[i].id == $scope.novoJogo.id) {
                            $scope.jogos[i] = $scope.novoJogo;
                        }
                    }
                }

                //Limpa nossa lista de novoJogo
                $scope.novoJogo = {};
            };

            $scope.editar = function(id) {
                //Procura o ID do jogo passado no parametro e deleta.
                for(var i in $scope.jogos) {
                    if($scope.jogos[i].id == id) {
                        //Vamos usar o metodo angular.copy() para criar uma copia do objeto original
                        $scope.novoJogo = angular.copy($scope.jogos[i]);
                    }
                }
            };


            $scope.deletar = function (id) {
                //Procura o ID do jogo passado no parametro e deleta.
                for (var i in $scope.jogos) {
                    if ($scope.jogos[i].id == id) {
                        $scope.jogos.splice(i, 1);
                        $scope.novoJogo = {};
                    }
                }
            };

        }]);


}());


