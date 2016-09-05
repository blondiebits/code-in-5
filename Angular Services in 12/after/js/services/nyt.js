app.factory('nyt', ['$http', function($http) {
	return $http.get("https://api.nytimes.com/svc/topstories/v2/technology.json", {params: {'api-key': "keyhere"}})

	.success(function(data) {
		return data;
	})

	.error(function(err) {
		alert(err)
		return err;
	})

}])