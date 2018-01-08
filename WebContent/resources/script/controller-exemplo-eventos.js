var app = angular.module('loja', ['ngRoute', 'ngResource']);

app.controller('controllerClickMe', function($scope) {
	$scope.showMe = false;
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	}
});

app.controller('controllerCordinates', function($scope) {
	$scope.myFunc = function(myE) {
		$scope.x = myE.clientX;
		$scope.y = myE.clientY;
	}
})

