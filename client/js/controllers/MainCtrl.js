angular.module("MainCtrl", ['BeerService'])
.controller("MainController", function($scope, Beers) {
  $scope.tagline = "To the moon and back!";
  $scope.allBeers = [];
  
  getBeers();

  function getBeers() {
    Beers.getAllBeers()
    .then(function(response) {
        $scope.beers = response.data;
        console.log($scope.beers);
      }, function(error) {
        $scope.status = "Unable to load beer data: " + error.message;
      });
  }

  $scope.addToDrink = (beer) => {
    Beers.saveBeer(beer)
    .then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    })
  }

});
