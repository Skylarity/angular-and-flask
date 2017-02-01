app.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "/static/partials/index.html"
		})
		.when("/post", {
			templateUrl: "/static/partials/post.html"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);
