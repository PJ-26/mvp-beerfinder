angular.module("appRoutes", []).config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "MainController"
      })
      .when("/beers", {
        templateUrl: "views/beer.html",
        controller: "BeerController"
      })
      .when('/addYourOwn', {
        templateUrl: 'views/addYourOwn.html',
        controller: "AddYourOwnController"
      })
    $locationProvider.html5Mode(true);
  }
]);
