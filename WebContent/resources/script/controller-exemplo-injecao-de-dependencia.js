var app = angular.module('loja', ['ngRoute']);

// criacao do service (IOC)
app.factory('UserService', function() {
	var users = ['João', 'Ivete', 'Fernanda', 'Maria']; //viriria do banco de dados
	
	return {
		all: function() {
			return users;
		},
		primeiro: function() {
			return users[0];
		}
	};
});

//Criação do controller
primeiroUserController = app.controller('primeiroUserController', function($scope, UserService) {
	$scope.primeiro = UserService.primeiro();
	$scope.todos = UserService.all();
});

// Ativando injecao de dependencia
primeiroUserController.$inject = ['$scope', 'UserService']; //Inject Angular

//segundo controller
todosUserController = app.controller('todosUserController', function($scope, UserService) {
	$scope.todos = UserService.all();
});

//Ativando injecao de dependencia
todosUserController.$inject = ['$scope', 'UserService']; //Inject Angular


