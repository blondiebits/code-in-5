app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  	$scope.todo = {
  		title: "Things I Need to Do",
  		list: ["Clean my room", "Go to the store", "Study Cracking the Coding Interview"]
  	}

  	$scope.books = {
  		title: "Books I Need to Buy",
  		list: []
  	}
    
    $scope.addItem = function(itemList, item) {
      itemList.push(item)
  	}

}]);