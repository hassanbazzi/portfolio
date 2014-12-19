var app = angular.module('myapp', ['ui.router', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
    	url: "/",
    	templateUrl: "partials/home.html",
      controller: 'mainCtrl',
    })
    .state('skills', {
    	url: "/skills",
    	templateUrl: "partials/skills.html",
    	controller: 'mainCtrl'
    })
    .state('portfolio', {
    	url: "/portfolio",
    	templateUrl: "partials/portfolio.html",
    	controller: 'portfolioCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html",
      controller: 'contactCtrl'
    });
    $locationProvider.html5Mode(true);
});
app.run(function($rootScope, $state) {
    $rootScope.$state = $state;
});