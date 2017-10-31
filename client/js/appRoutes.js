angular.module("appRoutes", []).config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      // home page
      .when("/", {
        templateUrl: "views/home.html",
        controller: "MainController"
      })
      // nerds page that will use the NerdController
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
