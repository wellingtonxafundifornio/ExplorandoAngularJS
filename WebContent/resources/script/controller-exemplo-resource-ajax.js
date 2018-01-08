var app = angular.module('loja', ['ngRoute', 'ngResource']);

app.controller('controllerPessoa', function($scope, $resource) {
	
	// com Spring Framework RestFul
	//pessoas = $resource('/pessoas/:codPessoa');
	
	// Com Servlet
	pessoas = $resource('/ExplorandoAngularJS/pessoas/?codPessoa=:codPessoa');
	
	// getPorId()
	$scope.getPorId = function () {
		//get obtem um objeto somente
		pessoas.get({codPessoa: $scope.codPessoa}, function(data) { //data é a resposta
			$scope.objetoPessoa = data;
		});
	};
	
	//getTodos()
	$scope.getTodos = function () {
		//query é usado para obter uma lista
		pessoas.query(function(data) {
			$scope.objetoPessoa = data;
		});
	};
	
	// salvarPessoa()
	$scope.salvarPessoa = function () {
		p = new pessoas();
		p.numero = '5454';
		p.$save();
	};
	
	// deletarPessoa()
	$scope.deletarPessoa = function () {
		pessoas.$delete({codPessoa:"10"});
	};
});

