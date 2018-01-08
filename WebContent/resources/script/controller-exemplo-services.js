var app = angular.module('loja', ['ngRoute']);


app.controller('localizacao', function($scope, $location) {
	$scope.myUrl = $location.absUrl();
});

app.controller('controllerTimeOut', function ($scope, $timeout) {
	$scope.timermsg = 'Oi!';
	$timeout(function () {
		$scope.timermsg = 'Oi depois de 3 segundos';
	}, 3000); // mesma coisa que a function de 'timeout' do js
});

app.controller('controllerIntervalo', function ($scope, $interval) {
	$scope.intervalo = new Date().toLocaleTimeString();
	$interval(function () {
		$scope.intervalo = new Date().toLocaleTimeString();
	}, 1000); // mesma coisa que a function de 'timeout' do js
})



