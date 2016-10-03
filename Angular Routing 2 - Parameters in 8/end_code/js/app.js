var app = angular.module('Blog', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "views/home.html"
	})

	.when("/aboutme", {
		templateUrl: "views/aboutme.html",
		controller: "AboutMeController"
	})

	.when("/posts", {
		templateUrl:"views/posts.html"
	})

	.when("/posts/:id", {
		templateUrl: "views/post.html",
		controller: "SinglePostController"
	})

	.when("/contact", {
		templateUrl:"views/contact.html"
	})

	.otherwise({redirectTo: '/'})
})