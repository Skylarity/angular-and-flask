app.service("PostService", function($http) {
	this.get = function() {
		return $http.get("/api/post/");
	}

	this.post = function(id) {
		return $http.post("/api/post/" + id);
	}
});
