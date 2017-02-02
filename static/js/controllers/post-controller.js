app.controller("PostController", ["$scope", "PostService", function($scope, PostService) {
	$scope.posts = null;
	$scope.output = null;

	if ($scope.posts === null) {
		PostService.get()
			.then(function(reply) {
				$scope.posts = reply.data;
			});
	}

	$scope.post = function() {
		PostService.post({id: Math.floor(Math.random() * 100)})
			.then(function(reply) {
				$scope.output = reply.data;
			});
	}
}]);
