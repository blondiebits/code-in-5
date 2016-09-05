app.controller('MainController', ['$scope', 'nyt', function($scope, nyt) { 
	$scope.list = [];

	nyt.success(function(data) {
		for (i = 0; i < data.results.length; i++) {
			var story = {
				title: data.results[i].title,
				abstract: data.results[i].abstract,
				url: data.results[i].url
			}
			$scope.list.push(story)
		}
	})

}]);
