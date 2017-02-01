app.directive("showPosts", function() {
	return {
		controller: "PostController",
		templateUrl: "/static/partials/show-posts.html"
	}
});
