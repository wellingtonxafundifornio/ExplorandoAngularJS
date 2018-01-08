var app = angular.module('loja', ['ngRoute']);

app.controller('filterController', function($scope) {
	$scope.friends = [
	   { name : 'Mario', lastName : 'Souza', age : 20 },
	   { name : 'Renata', lastName : 'Fernanda', age : 80 },
	   { name : 'Gabriela', lastName : 'Nogueira', age : 30},
	   { name : 'Plinio', lastName : 'Arantes', age : 18},
	   { name : 'Luiza', lastName : 'Oliveira', age : 22}
	];
	
})


