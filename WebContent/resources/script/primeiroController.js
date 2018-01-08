// $scope é o escopo da aplicação html
// $location redirecionamento entre rotas
// $routeParams são os parametros repassados pela url /lista/:param
(function (angular) {
 'use strict';
 
var app = angular.module('loja', ['ngRoute']);

// Config - > Use este método para registrar o trabalho que precisa ser executado no carregamento na pagina

// When - > Adiciona uma nova definição de rota ao serviço $ route

// otherwise - > Define a definição da rota que será usada na mudança de rota quando nenhuma outra

app.config(function($routeProvider){
	$routeProvider
	.when('/', {controller: 'listaController', templateUrl: 'primeiroController-lista.html'}) //Listar
	.when('/edit/:name', {controller: 'editController', templateUrl: 'primeiroController-from.html'}) //Editar
	.when('/novo', {controller: 'novoController', templateUrl: 'primeiroController-from.html'}) //Novo
	.otherwise({redirectTo: '/'});
});

// Registro de trabalho que deve ser realizado quando o injetor é feito carregando todos os módulos
// .run() é iniciado antes da aplicação
app.run(function($rootScope) {
	$rootScope.frutas = ['banana', 'melancia', 'pera'];
});

// Controller 'listaController' 
 app.controller('listaController', ['$scope', '$routeParams', '$rootScope' ,'$route', '$location', 
                                    function($scope, $routeParams, $rootScope, $route, $location) {
	 
 }]);
 
 // Controller 'editController'
 app.controller('editController', [
		'$scope', '$routeParams', '$rootScope', '$route', '$location',
		function editController($scope,$routeParams, $rootScope, $route, $location) {
			 console.log($scope, '\n',  'RouteParams ->', $routeParams.name);
			$scope.title = 'Editar Frutas'; // adicionando titulo a pagina
			$scope.fruta = $routeParams.name; // pegando o 'nome da fruta' para editar
			$scope.frutaIndex = $scope.frutas.indexOf($scope.fruta); // pegando o 'indice da fruta' dentro da lista

			$scope.salvar = function() {
				 console.log('Fruta', $scope.fruta, '\n Fruta index: ', $scope.frutaIndex);
				$scope.frutas[$scope.frutaIndex] = $scope.fruta; // pega o novo nome da fruta editada 
				$location.path('/'); // volta para 'primeiroController-lista.html'
			}
		} ]);
 

// Controller 'novoController'
app.controller('novoController', [ '$scope', '$routeParams', '$rootScope', '$route', '$location',
		function novoController($scope, $routeParams, $rootScope, $route, $location) {
			$scope.title = 'Nova Fruta';
			$scope.fruta = '';

			$scope.salvar = function() {
				$scope.frutas.push($scope.fruta); // add nova fruta
				$location.path('/'); // volta para
										// 'primeiroController-lista.html'
				// console.log('Array: ', $scope.frutas, '\n Fruta ->', $scope.fruta);
			}
		} ]);


// Controller 'primeiroController'
app.controller('primeiroController', ['$scope', ' $routeParams' , function($scope, $routeParams){
	$scope.user = {meuNome : 'João', meuSobreNome: 'Da Silva'};
	
	$scope.contador = 0;
	
	$scope.addAContador = function() {
		$scope.contador++;
	};
	
	$scope.pessoas = ['Ana', 'Mario', 'José'];
}]);

// Criando um directive 'w3-test-directive'
app.directive("w3TestDirective", function () {
	return {
		template: "Fui feito em um construtor de diretriz!"
	}
});

})(window.angular);