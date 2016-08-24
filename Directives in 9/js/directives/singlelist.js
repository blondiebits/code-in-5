app.directive('singlelist', function() {
	return {
		restrict: 'E',
		scope: {
			mylist:'='
		},
		templateUrl: 'js/directives/singlelist.html'
	}
})