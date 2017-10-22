var myApp = angular.module('myModule', []);

myApp.controller('myFirstController', function($scope) {

	var todoItems = [];

	$scope.todoItems = todoItems;
	// should change name for todos
	$scope.makeNewTodoItem = function () {
		$scope.todoItems.push(
			{
				name: $scope.todos.name,
				description: $scope.todos.description
			}
		);
	};

	$scope.deleteTodoItem = function ($index) {

		$scope.todoItems.splice($index, 1);

	};
});

