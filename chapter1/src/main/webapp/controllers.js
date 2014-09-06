angular.module('helloApp', []).controller('HelloController', ['$scope', function($scope) {
	$scope.greeting = { text : 'Hello' };
}]);
