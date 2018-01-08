var app = angular.module('loja', ['ngRoute']);


app.controller('personCtrl', function($scope) {
	$scope.firstName = 'John';
	$scope.lastName = 'Deep';
});

app.controller('namesCtrl', function ($scope) {
	$scope.names = [
	    {name: 'Wilton', country: 'Brazil'},
		{name: 'Jani', country: 'Norway'},
		{name: 'Carl', country: 'Sweden'},
		{name: 'Margareth', country: 'England'},
		{name: 'Hege', country: 'Norway'},
		{name: 'Joe', country: 'Denmark'},
		{name: 'Gustav', country: 'Sweden'},
		{name: 'Birgit', country: 'Denmark'}
	]
});

app.controller('costCtrl', function($scope) {
	$scope.price = 58;
});

app.controller('namesCtrl2', function ($scope) {
	$scope.names = [
					'Jani',
					'Carl',
					'Margareth',
					'Hege',
					'Joe',
					'Gustav',
					'Birgit',
					'kai'
	]
});

app.controller('namesCtrl3', function ($scope) {
	$scope.names = [
	            	'Jani',
					'Carl',
					'Margareth',
					'Hege',
					'Joe',
					'Gustav',
					'Birgit',
					'kai'
	]
});

app.controller('namesCtrl4', function ($scope) {
	$scope.names = [
	    {name: 'Wilton', country: 'Brazil'},
		{name: 'Jani', country: 'Norway'},
		{name: 'Carl', country: 'Sweden'},
		{name: 'Margareth', country: 'England'},
		{name: 'Hege', country: 'Norway'},
		{name: 'Joe', country: 'Denmark'},
		{name: 'Gustav', country: 'Sweden'},
		{name: 'Birgit', country: 'Denmark'}
	];
	$scope.orderByMe = function (x) {
		$scope.myOrderBy = x;
	}
});
