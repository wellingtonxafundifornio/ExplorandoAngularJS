var app = angular.module('loja', ['ngRoute', 'ngResource']);


app.controller('formCtrl', function($scope) {
	$scope.master = {firstName: 'John', lastName: 'Deep'};
	$scope.reseta = function() {
		$scope.user = angular.copy($scope.master);
	};
	$scope.reseta();
});
