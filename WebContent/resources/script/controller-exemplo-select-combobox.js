var app = angular.module('loja', ['ngRoute']);

app.controller('namesController', function($scope) {
	$scope.names = ['Emivaldo', 'Tobias', 'Lucimar'];
});

app.controller('pegarRespostaJson', function($scope, $http) {
	$http.get('pegarRespostaJson')
		 .then(function(response) {
			$scope.lista = response.data; 
		 });
})	

