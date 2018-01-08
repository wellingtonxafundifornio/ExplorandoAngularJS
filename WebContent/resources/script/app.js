var app = angular.module('loja', ['ngRoute', 'ngResource', 'ngAnimate']);

// Configurando rotas
app.config(function($routeProvider, $provide, $httpProvider, $locationProvider) {
	
	$routeProvider.when('/clientelist', { //quando indicar o caminho http://localhost:8080/ExplorandoAngularJS/clientelist na url
		controller: 'clienteController',
		templateUrl: 'cliente/list.html' //será chamado essa pagina
	}) //listar
	
	.when('/cliente/:id', {
		controller: 'clienteController',
		templateUrl: 'cliente/cadastro.html'
	}) //editar
	
	.when('/cliente/cadastro', {
		controller: 'clienteController',
		templateUrl: 'cliente/cadastro.html'
	}) //novo
	
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('clienteController', function($scope, $http, $location, $routeParams) {
	
});
