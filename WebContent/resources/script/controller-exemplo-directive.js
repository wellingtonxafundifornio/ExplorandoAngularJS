var app = angular.module('loja', ['ngRoute']);


// Criando um directive 'w3-test-directive'
app.directive("w3TestDirective", function () {
	return {
		template: "Fui feito em um construtor de diretriz!"
	}
});
