app.controller("SinglePostController", function($scope, $routeParams) {
	var post1 = {
		title: "First Post",
		text: "asd asdf asdf asdf asdf asdf asdf adf"
	}

	var post2 = {
		title: "Second Post",
		text: "lfghfj fhj fghj fghj fghj fghj fhj fghj"
	}

	switch($routeParams.id) {
		case '1': 
			$scope.post = post1;
			break;
		case '2':
			$scope.post = post2;
			break;
		default:
			$scope.post = post2;
			break;
	}
})