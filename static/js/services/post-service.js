app.service("PostService", function($http) {
	this.get = function() {
		return $http.get("/api/post/");
	}

	this.post = function(body) {
		return $http.post("/api/post/", body);
	}
});
